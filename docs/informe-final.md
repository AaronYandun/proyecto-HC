# Informe final del Taller S7

Proyecto de reservas de catering de la Cafetería PUCE Ibarra. Asignatura Interacción Humano Computador. Revisión de entrega del 10 de noviembre de 2026.

## Introducción

El proyecto adapta el ejemplo docente de gestión de pedidos a un cliente que solicita catering. La entrega reúne el análisis, wireframes, implementación y evaluación técnica. Las actividades presenciales de dibujo en papel y evaluación cruzada requieren participación del estudiante.

Se volvió a leer directamente el archivo taller_S7.docx de la carpeta de trabajo, en la sección 4, Guía del Taller para los Estudiantes, correspondiente a la consigna indicada por el usuario como página 13. Se verificó el texto mediante extracción del Word. La numeración física de página 13 no se corroboró con un renderizado nuevo.

## Análisis

El ejemplo se dirige a Carlos, operador de cocina y caja. El proyecto se dirige a Valeria, persona ficticia que organiza actividades y necesita comparar servicios, introducir los datos de su evento y reconocer una solicitud guardada.

Las heurísticas seleccionadas son visibilidad del estado del sistema, prevención de errores y reconocimiento antes que recuerdo. Sus justificaciones y aplicaciones están documentadas en [el análisis](analisis.md) y [la evaluación heurística](evaluacion-heuristica.md).

Los requisitos del profesor se diferencian de las decisiones posteriores del proyecto. El teléfono, JavaScript, localStorage y consulta por identificador concretan el encargo del usuario. Los precios, pagos, disponibilidad y aprobación real quedan fuera del prototipo.

## Diseño

Los wireframes [de escritorio](wireframe.svg) y [de celular](wireframe-mobile.svg) describen las etapas y sus variantes. [La explicación](explicacion-wireframe.md) relaciona las secciones con las necesidades de Valeria.

La implementación conserva del ejemplo docente HTML semántico, tarjetas, Grid, Flexbox, variables CSS, estados y botones amplios. Adapta la identidad a la cafetería con vino #722F37, dorado #D4AF37, blanco #FFFFFF, fondo #F8F6F3 y texto #1F2937. La tipografía es Inter con respaldo local.

Fitts orienta botones con 48 px mínimos de altura. Hick orienta tres servicios y decisiones progresivas. La proximidad agrupa la información en tarjetas y fieldsets. Las reglas de respuesta móvil están definidas a 1000, 760 y 420 px.

## Implementación

HTML, CSS y JavaScript están separados. La selección actualiza tarjeta, selector y resumen. El formulario valida seis campos obligatorios y permite observaciones opcionales. El usuario revisa y corrige conservando la información, confirma y obtiene un identificador aleatorio local.

El estado interactivo Solicitud registrada comunica recepción local. Cada registro ocupa una clave propia en localStorage. La confirmación repetida queda bloqueada después del guardado. La consulta admite el identificador sin distinguir mayúsculas y minúsculas. Los mensajes de error y contenido del usuario se insertan como texto.

Los archivos de referencia HTML y CSS coinciden con los bloques del Word actual. La revisión detectó reglas CSS conservadas de estados visuales anteriores y la clase example-label, actualmente sin uso en el flujo. Se conservan los estados solicitados en la etapa visual como referencia de diseño; no se activan aprobaciones ficticias. Su presencia no agrega dependencias ni procesamiento JavaScript.

## Evaluación

Se volvieron a ejecutar 16 comprobaciones del DOM con jsdom, todas aprobadas, además de sintaxis JavaScript, enlaces locales, etiquetas e identificadores. Las pruebas incluyen recorrido válido, entradas inválidas, edición, confirmación repetida, consulta, recuperación lógica de almacenamiento, JSON dañado, fallo de escritura y texto potencialmente peligroso.

Se corrigieron en la etapa de evaluación una etiqueta option mal cerrada que impedía usar Pausa café y un mensaje de éxito obsoleto después de consultar un identificador vacío. Se añadió ajuste CSS para códigos largos en confirmación. Las regresiones funcionales pasan; el ajuste visual necesita comprobación en pantalla.

El contraste calculado blanco sobre vino es 9,65:1; texto principal sobre fondo, 13,61:1; estado registrado, 7,53:1; borde del campo sobre blanco, 4,45:1. Los pares relevantes evaluados superan sus umbrales. El dorado sobre blanco da 2,10:1 y se reserva para decoración. La tabla completa, método y referencias WCAG están en [accesibilidad](accesibilidad.md).

El navegador integrado no consiguió una conexión operable durante la evaluación anterior. No se dispone de capturas reales ni resultados visuales. Las pruebas del DOM no acreditan funcionamiento del lector de pantalla, reflujo renderizado o persistencia real entre sesiones. [Las pruebas funcionales](pruebas-funcionales.md) describen el alcance y los pasos manuales pendientes.

## Verificación de la consigna docente

| Requisito de la guía | Evidencia | Estado |
| --- | --- | --- |
| Elegir un rol distinto | analisis.md, cliente Valeria frente a operador Carlos | Completo |
| Definir tres heurísticas prioritarias | analisis.md y evaluacion-heuristica.md | Completo |
| Dibujar un wireframe rápido en papel para el nuevo flujo | wireframe.svg, wireframe-mobile.svg y explicacion-wireframe.md como referencias digitales | Pendiente del dibujo en papel |
| Editar el código fuente proporcionado | index.html y styles.css adaptan tarjetas, estructura semántica, Grid y Flexbox; referencia-original permite comparar | Completo |
| Modificar tokens CSS con paleta para la cafetería | styles.css, bloque :root con los cinco colores solicitados | Completo |
| Crear un nuevo estado interactivo o tarjeta de servicio con jerarquía y proximidad | Tres tarjetas y estado Solicitud registrada en script.js y styles.css | Completo; comportamiento probado en DOM |
| Realizar evaluación cruzada por grupos | formato-coevaluacion.md preparado; revisión técnica en evaluacion-heuristica.md | Pendiente de compañeros |
| Comprobar Fitts y contraste dentro de la evaluación | Alturas CSS y cálculos en accesibilidad.md | Requiere comprobación manual del tamaño renderizado y coevaluación |

La investigación de portales aparece como sugerencia en el documento. Dorado y vino son ejemplos de paleta ofrecidos por el profesor, elegidos expresamente para este proyecto.

## Verificación adicional de entrega

| Elemento | Evidencia | Estado |
| --- | --- | --- |
| HTML5, CSS3 y JavaScript puro | Archivos separados, sin framework | Completo |
| Wireframes digitales y explicación | Tres archivos en docs | Completo |
| Teléfono, validación, revisión, confirmación y consulta | Implementación y 16 pruebas del DOM | Completo en el entorno probado |
| Persistencia tras recarga real | Recuperación lógica probada con almacenamiento copiado en jsdom | Requiere comprobación manual |
| Responsive y teclado | CSS, controles nativos y destinos de foco revisados | Requiere comprobación manual |
| Etiquetas y contraste | Comprobación estructural y cálculo | Completo para el alcance documentado; conformidad integral pendiente |
| README e informe final | README.md y este archivo | Completo |
| Capturas y evidencias académicas | evidencias/PENDIENTES.md | Pendiente |
| Git | .gitignore apropiado; la carpeta no es un repositorio | Pendiente de inicialización si se desea versionar |

## Conclusiones

El prototipo cubre el recorrido funcional y la adaptación técnica del taller dentro del alcance probado. La entrega preserva el código docente y reúne los documentos necesarios para su exposición. El análisis y los requisitos se actualizaron para reflejar teléfono y persistencia local; el wireframe conserva su función de documento de diseño.

Para cerrar las actividades del profesor, el estudiante debe realizar el dibujo en papel, la coevaluación cruzada y las comprobaciones manuales documentadas. El formato dispone de espacios vacíos para evaluadores, fecha, hallazgos, severidad, recomendaciones y resultados.

La carpeta outputs constituye la entrega. [El README](../README.md) explica cómo ejecutarla y demostrarla. El espacio work contiene herramientas y dependencias de evaluación, separado de los archivos entregables. Se añadió .gitignore; no se detectó un repositorio Git y no hay commit creado ni cambios publicados.
