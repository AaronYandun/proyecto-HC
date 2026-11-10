# Requisitos del proyecto

## Origen y alcance

- **Obligatorio por la consigna.** Elegir otro rol y tres heurísticas, dibujar un wireframe en papel, adaptar el código fuente y los tokens CSS, crear un estado interactivo o una tarjeta de servicio, y hacer una coevaluación cruzada por grupos. [Detalle de la consigna y del ejemplo](analisis.md#qué-pide-el-taller)
- **Obligatorio por el encargo.** Adoptar el rol de cliente de catering y cubrir el flujo de explorar, elegir, completar, confirmar y consultar. Usar HTML5, CSS3 y JavaScript puro, sin frameworks, backend, pagos reales ni reservas en servidor. La entrega final comprende análisis, diseño, interfaz funcional, evaluación técnica y referencia docente.
- **Criterios del prototipo.** Las tablas concretan el encargo en comportamientos verificables para la fase de construcción. Los campos, textos, medidas de control y duración de la sesión son propuestas del proyecto.

## Requisitos funcionales para la construcción

| ID | Requisito | Criterio de aceptación |
| --- | --- | --- |
| RF-01 | Explorar servicios de catering de demostración. | Cada tarjeta muestra nombre, descripción breve, qué incluye y una acción de selección. La tarjeta de servicio adapta el patrón del código docente y agrupa su información. |
| RF-02 | Elegir un servicio y mantener visible la elección. | «Elegir servicio» abre el formulario asociado. El nombre aparece en el formulario y el resumen. La persona puede volver a elegir antes de registrar. |
| RF-03 | Capturar los datos mínimos de la solicitud y validarlos. | El formulario pide nombre, correo, teléfono de prueba, fecha, cantidad de asistentes y observaciones opcionales. Rechaza campos obligatorios vacíos, fechas pasadas según la fecha local, cantidades que no sean enteros positivos y correos con formato inválido. Identifica el campo y conserva los datos ingresados para corregirlos. |
| RF-04 | Revisar y editar antes de confirmar. | El resumen muestra el servicio y los datos ingresados. «Editar» vuelve al formulario con los valores anteriores. Solo una confirmación explícita registra la solicitud. |
| RF-05 | Registrar y confirmar una solicitud simulada. | Una confirmación válida crea un único registro en localStorage, con código identificable en la sesión y estado «Solicitud registrada» con indicación de pendiente de revisión. La pantalla comunica el resultado y muestra un acceso a «Mis solicitudes». Una activación doble inmediata conserva un solo registro para esa confirmación. |
| RF-06 | Consultar las solicitudes y su estado en el mismo navegador y origen. | «Mis solicitudes» muestra servicio, fecha, código y estado textual de cada solicitud registrada. La vista vacía ofrece acceso al catálogo. El estado se lee como información del prototipo y no requiere escribir el código. |

## Requisitos no funcionales para la construcción

| ID | Requisito | Criterio de aceptación |
| --- | --- | --- |
| RNF-01 | Tecnologías y separación de responsabilidades. | `index.html` concentra estructura semántica, `styles.css` estilos y tokens en `:root`, y `script.js` interacción y datos de la demo. El flujo funciona en el navegador con archivos estáticos y JavaScript nativo. |
| RNF-02 | Acceso por teclado y semántica. | Se completa el flujo con teclado, foco visible y orden lógico. Los campos tienen etiquetas asociadas y los errores están vinculados a su campo. Un cambio de paso conserva un foco predecible y la confirmación se anuncia o recibe foco según el patrón elegido. |
| RNF-03 | Contraste y comunicación del estado. | Contraste objetivo de 4,5:1 para texto normal y 3:1 para texto grande. Etiquetas textuales identifican estados y errores junto con el color. Se comprueban las combinaciones de la paleta, incluido el texto sobre botones. |
| RNF-04 | Adaptabilidad y objetivos de toque. | Se puede completar el flujo a 320 px CSS de ancho y en escritorio sin desplazamiento horizontal del contenido principal. Las acciones principales tienen una altura objetivo de 44 px CSS y espacio suficiente frente a los controles vecinos. |
| RNF-05 | Simulación local y datos de prueba. | La aplicación identifica catálogo y solicitudes como demostración. Los registros confirmados se conservan en localStorage al recargar y el flujo no transmite datos a un servidor. Usar contactos ficticios en pruebas y coevaluación. |
| RNF-06 | Legibilidad y trazabilidad. | Nombres coherentes en HTML, CSS y JavaScript. Colores y escalas reutilizables en variables CSS. La referencia del profesor se conserva separada para comparar estructura, componentes y cambios. |

Los criterios de contraste y acceso se tomarán como comprobaciones concretas para el prototipo. Los 44 px son un objetivo del proyecto para las acciones principales. [WCAG 2.2, W3C](https://www.w3.org/TR/WCAG22/)

## Mejoras opcionales

- Filtrar por categorías si aumenta el tamaño del catálogo.
- Incorporar solicitudes ficticias de muestra con estados adicionales para ampliar la prueba visual del seguimiento.
La persistencia en localStorage pasó a ser obligatoria por el encargo posterior y está implementada.
