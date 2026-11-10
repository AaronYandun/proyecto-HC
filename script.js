'use strict';

const services = { cafe: 'Pausa café', almuerzo: 'Almuerzo', bocaditos: 'Bocaditos' };
const storagePrefix = 'puce-catering.v1.';
const form = document.querySelector('#reserva-form');
const fieldNames = ['servicio', 'nombre', 'correo', 'telefono', 'fecha', 'personas', 'observaciones'];
const fields = Object.fromEntries(fieldNames.map(name => [name, document.getElementById(name)]));
const confirmButton = document.querySelector('#confirmar');
let reviewed = null;
let requestId = null;
let saved = false;

function today() {
  const date = new Date();
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'),
    String(date.getDate()).padStart(2, '0')].join('-');
}

function announce(message) {
  document.querySelector('#mensajes').textContent = message;
}

function values() {
  return Object.fromEntries(fieldNames.map(name => [name, fields[name].value.trim()]));
}

function setError(name, message) {
  document.getElementById(name + '-error').textContent = message;
  fields[name].setAttribute('aria-invalid', String(Boolean(message)));
}

function validate() {
  fields.fecha.min = today();
  const data = values();
  const errors = {
    servicio: services[data.servicio] ? '' : 'Selecciona un servicio.',
    nombre: data.nombre ? '' : 'Escribe tu nombre.',
    correo: !data.correo ? 'Escribe tu correo.' :
      fields.correo.validity.typeMismatch ? 'Escribe un correo válido, como nombre@example.com.' : '',
    telefono: /^[+\d\s().-]+$/.test(data.telefono) &&
      data.telefono.replace(/\D/g, '').length >= 7 &&
      data.telefono.replace(/\D/g, '').length <= 15 ? '' : 'Escribe un teléfono con entre 7 y 15 dígitos.',
    fecha: !data.fecha || !fields.fecha.validity.valid ? 'Elige una fecha válida, igual o posterior a hoy.' :
      data.fecha < today() ? 'La fecha no puede ser anterior a hoy.' : '',
    personas: Number.isSafeInteger(Number(data.personas)) && Number(data.personas) > 0 &&
      fields.personas.validity.valid ? '' : 'Indica una cantidad entera de personas mayor que cero.',
    observaciones: ''
  };
  fieldNames.forEach(name => setError(name, errors[name]));
  const first = fieldNames.find(name => errors[name]);
  if (first) {
    fields[first].focus();
    announce('Revisa los campos señalados antes de continuar.');
    return null;
  }
  return data;
}

function element(tag, text, className) {
  const node = document.createElement(tag);
  node.textContent = text;
  if (className) node.className = className;
  return node;
}

function renderSummary() {
  const data = values();
  const labels = { servicio: 'Servicio', nombre: 'Cliente', correo: 'Correo',
    telefono: 'Teléfono', fecha: 'Fecha', personas: 'Personas', observaciones: 'Observaciones' };
  const list = document.querySelector('#resumen-datos');
  list.replaceChildren();
  fieldNames.forEach(name => {
    const row = document.createElement('div');
    const value = name === 'servicio' ? services[data.servicio] : data[name];
    row.append(element('dt', labels[name]), element('dd', value || 'Sin indicar'));
    list.append(row);
  });
  document.querySelectorAll('.service-choice').forEach(button => {
    const selected = button.dataset.service === data.servicio;
    button.setAttribute('aria-pressed', String(selected));
    button.closest('.order-card').classList.toggle('is-selected', selected);
    button.textContent = (selected ? 'Seleccionado · ' : 'Elegir ') + services[button.dataset.service];
  });
}

function invalidateReview() {
  if (saved) return;
  reviewed = null;
  requestId = null;
  confirmButton.disabled = true;
  document.querySelector('#resumen-estado').textContent = 'Borrador · revisa los datos antes de confirmar.';
  renderSummary();
}

function isRecord(record) {
  return record && typeof record.id === 'string' && /^CAT-[A-Z0-9-]+$/.test(record.id) &&
    Object.hasOwn(services, record.servicio) &&
    fieldNames.every(name => typeof record[name] === 'string') &&
    record.status === 'Solicitud registrada' && typeof record.createdAt === 'string';
}

// Una clave por solicitud evita sobrescribir registros creados en otras pestañas.
function readRecords() {
  const records = [];
  let damaged = false;
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    if (!key || !key.startsWith(storagePrefix)) continue;
    try {
      const record = JSON.parse(localStorage.getItem(key));
      if (!isRecord(record) || key !== storagePrefix + record.id) {
        damaged = true;
        continue;
      }
      records.push(record);
    } catch {
      damaged = true;
    }
  }
  return { records: records.sort((a, b) => b.createdAt.localeCompare(a.createdAt)), damaged };
}

function requestCard(record) {
  const card = element('article', '', 'request-card status-registered');
  const header = document.createElement('header');
  header.append(element('span', record.id, 'request-id'),
    element('span', record.status, 'status-tag tag-registered'));
  card.append(header, element('h3', services[record.servicio]),
    element('p', record.fecha + ' · ' + record.personas + ' personas'),
    element('p', 'Guardada localmente · pendiente de revisión.', 'request-detail'));
  return card;
}

function refreshRecords() {
  const list = document.querySelector('#lista-solicitudes');
  try {
    const { records, damaged } = readRecords();
    list.replaceChildren(...records.map(requestCard));
    if (!records.length) list.append(element('p', 'Todavía no hay solicitudes guardadas.'));
    document.querySelector('#consulta-mensaje').textContent = damaged ?
      'Hay registros locales dañados que no se pueden mostrar. Los registros válidos siguen disponibles.' : '';
  } catch {
    list.replaceChildren();
    document.querySelector('#consulta-mensaje').textContent =
      'El navegador impide leer el almacenamiento local. Revisa sus permisos para consultar solicitudes.';
  }
}

function newIdentifier() {
  const bytes = crypto.getRandomValues(new Uint8Array(12));
  return 'CAT-' + Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
}

function confirmRequest() {
  if (saved || !reviewed) return;
  const data = validate();
  if (!data) {
    reviewed = null;
    confirmButton.disabled = true;
    return;
  }
  if (JSON.stringify(data) !== JSON.stringify(reviewed)) {
    invalidateReview();
    announce('Los datos cambiaron. Revisa nuevamente la solicitud.');
    return;
  }
  confirmButton.disabled = true;
  try {
    requestId = requestId || newIdentifier();
    const key = storagePrefix + requestId;
    const record = { ...reviewed, id: requestId, status: 'Solicitud registrada',
      createdAt: new Date().toISOString() };
    if (localStorage.getItem(key) !== null) throw new Error('Identificador ocupado');
    localStorage.setItem(key, JSON.stringify(record));
    saved = true;
    form.querySelectorAll('fieldset').forEach(group => { group.disabled = true; });
    document.querySelector('#revisar').disabled = true;
    document.querySelector('#editar').disabled = true;
    document.querySelectorAll('.service-choice').forEach(button => { button.disabled = true; });
    document.querySelector('#nueva').hidden = false;
    document.querySelector('#resumen-estado').textContent = 'Solicitud registrada · guardada localmente.';
    document.querySelector('#confirmacion-detalle').textContent =
      requestId + ' · ' + services[data.servicio] + ' · Solicitud registrada';
    document.querySelector('#confirmacion').hidden = false;
    document.querySelector('#consulta-id').value = requestId;
    refreshRecords();
    announce('Solicitud registrada en este navegador. Identificador ' + requestId);
    document.querySelector('#confirmacion-titulo').focus();
  } catch {
    confirmButton.disabled = false;
    announce('No se pudo guardar la solicitud. Revisa el espacio y los permisos de almacenamiento del navegador y vuelve a intentar. Tus datos siguen en el formulario.');
  }
}

fieldNames.forEach(name => {
  const error = element('p', '', 'field-error');
  error.id = name + '-error';
  fields[name].insertAdjacentElement('afterend', error);
  fields[name].setAttribute('aria-describedby',
    [fields[name].getAttribute('aria-describedby'), error.id].filter(Boolean).join(' '));
});
fields.fecha.min = today();
form.addEventListener('input', event => {
  if (fieldNames.includes(event.target.id)) setError(event.target.id, '');
  invalidateReview();
});
form.addEventListener('change', invalidateReview);
document.querySelectorAll('.service-choice').forEach(button => {
  button.addEventListener('click', () => {
    fields.servicio.value = button.dataset.service;
    setError('servicio', '');
    invalidateReview();
    announce('Servicio seleccionado: ' + services[fields.servicio.value]);
    fields.nombre.focus();
  });
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (saved) return;
  const data = validate();
  if (!data) return;
  reviewed = data;
  renderSummary();
  confirmButton.disabled = false;
  document.querySelector('#resumen-estado').textContent = 'Datos revisados · confirma para guardar localmente.';
  document.querySelector('#resumen-titulo').focus();
  announce('Revisa el resumen. Puedes editar los datos o confirmar.');
});
document.querySelector('#editar').addEventListener('click', () => {
  invalidateReview();
  fields.nombre.focus();
});
confirmButton.addEventListener('click', confirmRequest);
document.querySelector('#nueva').addEventListener('click', () => {
  saved = false;
  form.reset();
  form.querySelectorAll('fieldset').forEach(group => { group.disabled = false; });
  document.querySelector('#revisar').disabled = false;
  document.querySelector('#editar').disabled = false;
  document.querySelectorAll('.service-choice').forEach(button => { button.disabled = false; });
  document.querySelector('#nueva').hidden = true;
  document.querySelector('#confirmacion').hidden = true;
  fieldNames.forEach(name => setError(name, ''));
  invalidateReview();
  announce('Nuevo borrador. La solicitud anterior sigue guardada.');
  fields.servicio.focus();
});
document.querySelector('#consulta-form').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#consulta-id');
  const result = document.querySelector('#resultado-consulta');
  const error = document.querySelector('#consulta-error');
  result.replaceChildren();
  error.textContent = '';
  document.querySelector('#consulta-mensaje').textContent = '';
  input.removeAttribute('aria-invalid');
  if (!input.value.trim()) {
    error.textContent = 'Escribe el identificador de la solicitud.';
    input.setAttribute('aria-invalid', 'true');
    input.focus();
    return;
  }
  try {
    const { records } = readRecords();
    const record = records.find(item => item.id === input.value.trim().toUpperCase());
    if (!record) {
      document.querySelector('#consulta-mensaje').textContent = 'No se encontró ese identificador en este navegador.';
      return;
    }
    result.append(requestCard(record));
    document.querySelector('#consulta-mensaje').textContent = 'Solicitud encontrada. Estado: ' + record.status + '.';
  } catch {
    document.querySelector('#consulta-mensaje').textContent = 'No se puede acceder al almacenamiento local. Revisa los permisos del navegador.';
  }
});
window.addEventListener('storage', refreshRecords);
window.addEventListener('focus', () => { fields.fecha.min = today(); });
renderSummary();
refreshRecords();
