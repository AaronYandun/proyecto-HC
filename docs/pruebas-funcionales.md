# Pruebas funcionales de reservas de catering

Fecha de ejecución, 10 de noviembre de 2026. Responsable de las comprobaciones automatizadas, asistente de desarrollo.

## Método y alcance

Se intentó abrir http://127.0.0.1:8765 en el navegador integrado. La conexión con la vista del navegador agotó su tiempo de espera y no proporcionó una pestaña utilizable.

Las pruebas realizadas usan Node.js y jsdom con el HTML y JavaScript reales del proyecto. Ejecutan eventos, clics programáticos, validación HTML, lectura del DOM y almacenamiento simulado. La biblioteca se instaló exclusivamente en work/qa para las pruebas y no constituye una dependencia de la aplicación.

Se completaron 16 comprobaciones automatizadas después de corregir H-01 y H-02. Todas pasaron. No se ejecutaron pruebas de renderizado, gestos táctiles ni tabulación física. El reinicio del DOM con copia del almacenamiento comprueba recuperación lógica y no equivale a recargar una página en un navegador real.

## Escenarios solicitados

| N.º | Procedimiento y datos | Resultado observado | Alcance |
| --- | --- | --- | --- |
| 1 | Pulsar Almuerzo y después Pausa café. | Selector, tarjeta seleccionada y resumen corresponden a la elección. | DOM, aprobado tras corregir H-01. |
| 2 | Nombre Persona de prueba, correo prueba@example.com, teléfono 0991234567, fecha actual obtenida del campo mínimo, 30 personas. | Revisar habilita Confirmar y enfoca el título del resumen. | DOM, aprobado. |
| 3 | Enviar formulario vacío. | Seis campos inválidos, foco en servicio y confirmación deshabilitada. | DOM, aprobado. |
| 4 | Usar 2000-01-01. | Mensaje específico de fecha y bloqueo de confirmación. | DOM, aprobado. |
| 5 | Probar 0, -1, 1.5 y 9007199254740992 personas. | Cada cantidad se rechaza. | DOM, aprobado. |
| 6 | Revisar, volver a editar y cambiar 30 por 31. | Los datos se conservan; editar deshabilita confirmación hasta revisar nuevamente. | DOM, aprobado. |
| 7 | Confirmar y activar de nuevo el botón inmediatamente. | Se guarda un registro, aparece Solicitud registrada y el foco llega al título de confirmación. | DOM, aprobado. El doble clic físico queda pendiente. |
| 8 | Consultar el identificador generado en minúsculas. | Se encuentra la solicitud y se muestra su estado. | DOM, aprobado. |
| 9 | Recrear la página en jsdom conservando sus claves locales y consultar el código. | Se recupera la solicitud con 31 personas. | Recuperación lógica aprobada. Recarga real y almacenamiento entre sesiones pendientes. |
| 10 | Inspeccionar reglas CSS para escritorio, tablet y móvil. | Existen cortes de 1000, 760 y 420 px y columnas flexibles. | Inspección aprobada. Renderizado móvil pendiente. |

## Comprobaciones adicionales ejecutadas

- Texto con una etiqueta img y manejador onerror en observaciones. Se muestra como texto y no se crea una imagen.
- Consulta vacía después de un resultado válido. Limpia el éxito anterior y presenta el error, tras corregir H-02.
- Identificador inexistente. Informa que no se encontró en este navegador.
- Clave con JSON dañado junto a una solicitud válida. Informa el problema y mantiene visible la solicitud válida.
- Excepción de escritura simulada. Conserva el formulario, informa el fallo y permite guardar al restablecer el almacenamiento.
- Nuevo borrador. Vacía los campos y conserva las solicitudes existentes.
- La ejecución del DOM no produjo errores recogidos por la consola de jsdom.
- Node comprobó la sintaxis de script.js. El comprobador estructural verificó vínculos locales, identificadores únicos, destinos internos y etiquetas de controles.

El script reproducible está en work/audit-dom.cjs y sus resultados en work/audit-results.json, dentro del espacio de trabajo. Desde la raíz se ejecuta con node work/audit-dom.cjs.

## Verificación manual pendiente

1. Abrir index.html en Chrome y otro navegador, o servir outputs desde un origen local estable.
2. Completar los escenarios 1 a 8 con datos ficticios, conservar el identificador, recargar y consultar nuevamente. Usar el mismo navegador y origen.
3. Probar Tab, Mayús+Tab, Enter y Espacio desde el enlace Saltar al contenido hasta la consulta, observando el foco y la conservación de datos.
4. Verificar 320, 390, 768 y 1440 px de ancho. Revisar especialmente el identificador de confirmación, la selección de Pausa café y los botones de consulta.
5. Comprobar zoom al 200 % y reflujo al 400 %, lector de pantalla y un teléfono real.
6. Activar la confirmación dos veces rápidamente y comprobar que aparece una sola solicitud.
7. Probar almacenamiento bloqueado o lleno en un perfil de prueba. Comprobar el mensaje y recuperar los datos sin recargar.
8. Registrar navegador, versión, tamaño, evidencia y resultado en el formato de coevaluación.

El almacenamiento está asociado al navegador y origen. El modo privado, el borrado de datos o un cambio entre archivo local y servidor pueden alterar su disponibilidad. Las solicitudes siguen siendo una demostración local.
