# Plan de desarrollo del prototipo

La entrega actual incluye la implementación funcional y la evaluación técnica. `index.html` enlaza los archivos base `styles.css` y `script.js`. La carpeta `referencia-original` contiene los bloques del profesor para consultar y comparar durante la construcción.

| Fase | Trabajo | Evidencia de cierre | Estado |
| --- | --- | --- | --- |
| 1. Análisis y preparación | Leer la consigna y el ejemplo. Elegir el rol, definir la persona, justificar las tres heurísticas, describir las leyes de interacción y documentar flujo y requisitos. Conservar los bloques originales y crear los tres archivos base. | Análisis, requisitos, plan, archivos base y copia separada del HTML y CSS del profesor. | Completada |
| 2. Diseño de interacción | Dibujar en papel el catálogo, el servicio seleccionado, el formulario, la revisión, la confirmación y la consulta. Marcar las transiciones, el regreso a edición y al menos un caso de validación. | Wireframe en papel que permite seguir una solicitud completa y localizar las decisiones de diseño. | Pendiente |
| 3. Construcción | Adaptar en los archivos de trabajo la estructura HTML5, las tarjetas y los tokens del código de referencia. Crear la tarjeta de servicio, aplicar la paleta de la cafetería en `:root` y programar el formulario, la confirmación y la consulta simulada con JavaScript. | Prototipo con RF-01 a RF-06 probado en DOM; revisión visual y asistiva pendiente. | Implementada |
| 4. Verificación y coevaluación | Probar el flujo principal y los errores. Hacer la evaluación heurística cruzada por grupos y registrar observaciones sobre las tres heurísticas, Fitts y contraste. Corregir los hallazgos que impidan completar la tarea y volver a probar. | Evaluación técnica documentada y formato de coevaluación disponible. | Técnica realizada; coevaluación pendiente |

## Decisiones para el wireframe

- Usar la tarjeta del profesor como patrón estructural. La versión para el cliente agrupará nombre del servicio, descripción, contenido y una acción principal.
- Dibujar la secuencia con los textos de las acciones. Mantener el servicio visible al completar y revisar. Representar el mensaje de registro simulado y el acceso a «Mis solicitudes».
- Señalar la proximidad entre cada campo y su mensaje de ayuda. Reservar espacio para errores y botones accionables en una pantalla móvil.
- Elegir la paleta durante el diseño y verificar su contraste al trasladarla a `:root`. El dorado y el vino tinto quedan como ejemplos de la consigna.

## Casos para comprobar en la coevaluación

| Caso | Tarea del grupo evaluador | Qué observar |
| --- | --- | --- |
| Camino principal | Elegir un servicio para una jornada, registrar la solicitud y encontrarla en «Mis solicitudes». | Claridad del paso actual, reconocimiento del servicio, código y estado textual. |
| Error y recuperación | Probar fecha pasada y cantidad cero. Corregir y editar un dato desde el resumen. | Mensajes comprensibles junto al campo y conservación de los otros datos. |
| Confirmación | Accionar dos veces seguidas la confirmación y abrir la consulta. | Un registro para esa confirmación y distinción clara entre registro simulado y estado pendiente. |
| Teclado y móvil | Repetir la tarea con teclado y en una vista de 320 px CSS. | Orden y visibilidad del foco, tamaño y separación de acciones, contraste y ajuste del contenido. |

[Requisitos y criterios de aceptación](requisitos.md)
