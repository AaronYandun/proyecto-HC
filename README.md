# Cafetería PUCE Ibarra

Prototipo académico de reservas de catering para el Taller S7 de Interacción Humano Computador. En el espacio de trabajo original, la carpeta de entrega es outputs. En GitHub, su contenido está directamente en la raíz del repositorio.

## Objetivo y problema

Facilitar que un cliente consulte servicios, prepare una solicitud, revise sus datos y consulte su estado. Se adapta el dashboard docente de un operador de cocina al flujo de un cliente que organiza un evento.

La persona de referencia es Valeria, coordinadora ficticia de actividades estudiantiles. Necesita comparar servicios, evitar errores al registrar fecha y personas y reconocer su solicitud posteriormente.

## Tecnologías

HTML5 semántico, CSS3 con Grid, Flexbox, media queries y variables en :root, y JavaScript puro. Fuente Inter desde Google Fonts con respaldo del sistema. La aplicación usa localStorage y se ejecuta como archivos estáticos.

## Funcionalidades

- Catálogo demostrativo con Pausa café, Almuerzo y Bocaditos.
- Selección con tarjeta resaltada, estado textual y resumen actualizado.
- Nombre, correo, teléfono, fecha, asistentes y observaciones.
- Validación junto a los campos y conservación de datos al editar.
- Revisión previa y confirmación con identificador local.
- Estado Solicitud registrada, prevención de confirmaciones repetidas y manejo de errores de almacenamiento.
- Consulta por identificador y lista de solicitudes locales.
- Recuperación de registros del mismo navegador y origen después de recargar.

## Principios de interacción

Visibilidad del estado mediante selección, resumen y mensajes. Prevención de errores mediante validación y revisión previa. Reconocimiento antes que recuerdo mediante catálogo, resumen y lista de solicitudes. Fitts se aplica con botones amplios; Hick, con tres alternativas y decisiones por etapas; Gestalt, con tarjetas y grupos de formulario.

Paleta elegida: vino #722F37, dorado #D4AF37, blanco #FFFFFF, fondo #F8F6F3 y texto #1F2937. El dorado funciona como acento decorativo. La evaluación de contrastes está en docs/accesibilidad.md.

## Estructura de entrega

```text
outputs/
  .gitignore
  README.md
  index.html
  styles.css
  script.js
  referencia-original/
    index.html
    styles.css
  docs/
    analisis.md
    requisitos.md
    plan-desarrollo.md
    wireframe.svg
    wireframe-mobile.svg
    explicacion-wireframe.md
    evaluacion-heuristica.md
    pruebas-funcionales.md
    accesibilidad.md
    formato-coevaluacion.md
    informe-final.md
  evidencias/
    PENDIENTES.md
```

## Ejecución

Abrir index.html desde esta carpeta en un navegador moderno.

Para trabajar con un origen estable, abrir una terminal dentro de outputs y ejecutar, si Python está instalado:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Visitar http://127.0.0.1:8000 y usar siempre ese origen para consultar los mismos datos. Detener el servidor con Ctrl+C. La fuente Inter necesita conexión; el resto del flujo funciona con los archivos locales y la fuente de respaldo.

## Guion de demostración

1. Elegir Pausa café y comprobar la tarjeta y el resumen.
2. Enviar el formulario vacío y observar los errores.
3. Completar datos ficticios, una fecha actual o futura y 30 personas.
4. Revisar, editar la cantidad y revisar nuevamente.
5. Confirmar y conservar el identificador.
6. Consultarlo, recargar y volver a buscarlo en el mismo navegador y origen.
7. Probar teclado y ancho móvil siguiendo docs/pruebas-funcionales.md.

## Evaluación y limitaciones

Se superaron 16 pruebas del DOM con jsdom y comprobaciones de sintaxis y vínculos. La dependencia de pruebas permanece en work, fuera de la entrega. El navegador integrado falló al conectar; las pruebas visuales, de tabulación física, lector de pantalla, móvil real y recarga real siguen pendientes.

Las solicitudes son datos de demostración almacenados en este navegador. No hay backend, pagos, envío de correos, autenticación, disponibilidad real ni aprobación por la cafetería. La limpieza del almacenamiento elimina las solicitudes. Los borradores sin confirmar no persisten. Usar datos ficticios.

El wireframe en papel y la coevaluación con compañeros requieren realización y evidencias del estudiante. Consultar docs/informe-final.md y evidencias/PENDIENTES.md.

## Control de versiones

Se incluye .gitignore. El repositorio de entrega es https://github.com/AaronYandun/proyecto-HC y la rama principal es main. Mensaje del commit de entrega:

```text
Completa prototipo de catering del Taller S7 y documentación de entrega
```

