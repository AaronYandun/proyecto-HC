# Evaluación heurística del sistema de catering

Evaluación técnica realizada por el asistente el 10 de noviembre de 2026. Se revisaron HTML, CSS y JavaScript y se ejecutaron pruebas del DOM con jsdom. La coevaluación entre estudiantes permanece pendiente. El navegador integrado agotó el tiempo de conexión de la pestaña, por lo que esta revisión carece de evidencia visual de un navegador real.

El alcance actual incluye teléfono y persistencia en localStorage, solicitados después del análisis inicial. La descripción anterior de datos que se pierden al recargar queda superada por ese encargo. El estado funcional es Solicitud registrada, con información de pendiente de revisión. Los estilos de estados adicionales conservados en CSS pertenecen a la fase visual previa.

## Heurísticas seleccionadas

| Heurística | Implementación y evidencia | Beneficio | Mejora pendiente |
| --- | --- | --- | --- |
| Visibilidad del estado del sistema | La tarjeta usa aria-pressed, borde y texto Seleccionado. El resumen distingue borrador y datos revisados. La confirmación muestra código y registro local. Las regiones de estado comunican resultados. Las pruebas verificaron selección, revisión, confirmación y consulta. | El cliente conoce su elección y el resultado de guardar. | Comprobar con lector de pantalla el anuncio de mensajes repetidos y con usuarios la claridad del bloqueo posterior al guardado. |
| Prevención de errores | Campos obligatorios, fecha mínima local, enteros positivos, teléfono, correo, revisión previa, invalidación al editar y bloqueo después de confirmar. La recuperación tras fallo de almacenamiento conserva los datos. | Reduce solicitudes incompletas y registros repetidos por activaciones consecutivas. | Probar calendario y teclado en varios navegadores y el cambio de día con la página abierta. |
| Reconocimiento antes que recuerdo | Catálogo de tres tarjetas, servicio visible en selector y resumen, lista de solicitudes por servicio, fecha y código. Tras guardar se rellena el campo de consulta. | Permite identificar la solicitud a partir de información visible. | Valorar en la coevaluación un botón para consultar cada tarjeta sin copiar el identificador largo. |

La selección de principios corresponde a las heurísticas 1, 5 y 6 de Jakob Nielsen. Las observaciones anteriores son de esta inspección técnica. [Heurísticas de Nielsen](https://www.nngroup.com/articles/ten-usability-heuristics/)

## Leyes y organización visual

| Principio | Evaluación del código | Limitación y siguiente comprobación |
| --- | --- | --- |
| Fitts | Botones con altura mínima de 48 px y campos de 48 px. Navegación con 44 px mínimos. Las acciones de tarjetas y formulario usan todo el ancho disponible. | Medir áreas efectivas y separación en navegador, particularmente a 320 px. Se inspeccionó CSS, no se midieron píxeles renderizados. |
| Hick | Tres servicios y tres destinos de navegación. La confirmación se habilita después de revisar y las opciones ya completadas se bloquean al guardar. | Comprobar si mostrar formulario y resumen simultáneamente facilita el aprendizaje. La navegación incorpora Reservar además de los dos destinos inicialmente propuestos. |
| Proximidad de Gestalt | Cada tarjeta reúne nombre, descripción, contenido y acción. Fieldset y legend agrupan cliente y evento. Resumen y confirmación tienen contenedores propios. | Comprobar separación, lectura y desplazamiento en pantalla pequeña. |

## Hallazgos y correcciones

Escala técnica empleada para priorizar esta revisión: 0 sin problema observado, 1 menor, 2 moderado, 3 grave, 4 bloqueante. La calificación expresa el juicio del asistente, pendiente de contraste con la coevaluación.

| ID | Hallazgo observado | Severidad | Acción y resultado |
| --- | --- | --- | --- |
| H-01 | La opción Pausa café tenía una etiqueta HTML mal cerrada. Su botón dejaba una selección inválida y bloqueaba el recorrido válido. | 3 | Corregida la etiqueta option. La selección, revisión y confirmación de ese servicio pasan las pruebas del DOM. |
| H-02 | Después de una consulta encontrada, enviar una consulta vacía conservaba el mensaje de éxito anterior junto al error. | 2 | Se limpia la región de estado al iniciar cada consulta. La prueba de regresión pasa. |
| H-03 | El contenedor de confirmación carecía de una regla explícita para ajustar un identificador largo dentro de Flexbox. | 1, riesgo por inspección | Añadidos min-width y overflow-wrap. El efecto visual queda pendiente de validación en móvil. |
| H-04 | Algunos textos auxiliares son de 8 a 12 px, especialmente la identificación académica móvil. | 1 | Mejora de legibilidad propuesta. Debe evaluarse con zoom y usuarios; el tamaño por sí solo no demuestra incumplimiento AA. |
| H-05 | Documentos iniciales describen memoria de página y un formulario más breve. | 1 | Este informe registra la evolución autorizada hacia teléfono y localStorage para interpretar las pruebas actuales. |

## Cumplimiento y trabajo pendiente

El nuevo rol, las tres heurísticas y la adaptación del patrón docente de tarjetas y tokens están documentados e implementados. Existe el estado interactivo Solicitud registrada. Los wireframes digitales sirven de referencia para el dibujo en papel.

El dibujo en papel y la evaluación cruzada por grupos requieren evidencia del estudiante. Este informe y [el formato de coevaluación](formato-coevaluacion.md) permiten preparar esa actividad. Los resultados técnicos se detallan en [pruebas funcionales](pruebas-funcionales.md) y [accesibilidad](accesibilidad.md).
