# Análisis del Taller S7

**Asignatura** Interacción Humano Computador · PUCE Ibarra  
**Proyecto** Reservas de catering de la Cafetería PUCE Ibarra  
**Fuente** Taller práctico «De la Necesidad a la Interfaz Gráfica» (`taller_S7.docx`)

## Qué pide el taller

La sección **4. Guía del Taller para los Estudiantes** establece las actividades. Las etapas 1 a 3 presentan el caso de cocina y la base que se editará en la fase de construcción.

| Sección de la consigna | Actividad obligatoria | Situación en esta fase |
| --- | --- | --- |
| Análisis | Elegir un rol distinto al operador y definir tres heurísticas de Nielsen prioritarias para ese rol. | Cliente de catering elegido. Las tres heurísticas se justifican abajo. |
| Diseño de Interacción | Dibujar en papel un wireframe rápido que responda al nuevo flujo del cliente. | Flujo definido. Dibujo en papel pendiente para la siguiente fase. |
| Construcción en HTML & CSS | Editar el código proporcionado y modificar los tokens de `:root` con una paleta corporativa elegante elegida por el estudiante para la Cafetería PUCE Ibarra. | Código fuente conservado. Adaptación y paleta vino y dorado implementadas. El dorado `#D4AF37` y el vino tinto son ejemplos del taller. |
| Construcción en HTML & CSS | Crear un nuevo estado interactivo **o** una nueva tarjeta de servicio con jerarquía y proximidad visual. | Se implementaron tres tarjetas y el estado Solicitud registrada. |
| Evaluación | Realizar una coevaluación heurística cruzada por grupos. La consigna menciona el tamaño de botones (Fitts) y el contraste como ejemplos de verificación. | Comprobaciones previstas. La evaluación grupal queda pendiente. |

La búsqueda de portales como Loyverse u OpenTable aparece como sugerencia. El proyecto adopta HTML5, CSS3 y JavaScript puro con una reserva simulada por indicación del equipo. Los campos, los estados y el mecanismo de consulta del prototipo son decisiones de alcance del proyecto.

## Qué aporta el ejemplo del profesor

| Etapa del documento | Contenido del ejemplo | Aplicación prevista al nuevo rol |
| --- | --- | --- |
| 1. Análisis | Carlos, operador de cocina y caja, necesita reconocer pedidos pendientes, en preparación y listos. La tarea prioritaria consiste en ver pedidos por estado y cambiarlos con rapidez. | El cliente compara servicios, solicita uno y consulta el estado de su propia solicitud. El cliente inicia la solicitud y solo consulta el estado resultante. |
| 2. HTML5 semántico | Dashboard «D’Fiorella Eventos» con `header`, `main`, navegación de filtros y tres tarjetas `article`. Los pedidos, etiquetas, contadores y acciones están escritos en HTML. | Mantener una estructura semántica y adaptar el patrón de tarjeta al catálogo. Reutilizar la idea de etiqueta textual para el seguimiento, con vocabulario comprensible para el cliente. |
| 3. CSS3 responsivo y tokens | Variables en `:root`, tarjetas con Grid, encabezados y filtros con Flexbox, etiquetas con texto y color, botones de ancho completo y media query de 640 px. | Adaptar las variables a la paleta elegida y conservar la jerarquía de las tarjetas. Ajustar la cuadrícula para pantallas estrechas y comprobar el contraste y el foco. |

El ejemplo es una maqueta estática. El perfil de Carlos, la marca, el menú de estados, los pedidos y el indicador «En línea» son datos de demostración. Las pestañas y los botones aparecen en pantalla, pero el ejemplo carece de JavaScript que cambie los estados o aplique filtros. El Word usa «Entregados» al describir el filtro de la etapa 1 y «Listos» en las pestañas del HTML. Estas etiquetas pertenecen al flujo de cocina. Para el cliente se propone un catálogo de servicios y una vista separada de solicitudes.

Las copias de [HTML](../referencia-original/index.html) y [CSS](../referencia-original/styles.css) reproducen los bloques del Word en archivos de texto UTF-8, incluidos sus textos y comentarios. Los archivos de la raíz implementan el flujo del cliente adaptando los patrones semánticos y visuales del código docente.

## User Persona

**Valeria, 27 años · Coordinadora de actividades estudiantiles**. Persona ficticia que sirve como hipótesis de diseño. Organiza reuniones y jornadas en el campus. Suele consultar opciones desde el celular entre actividades y usa el portátil cuando reúne los detalles del evento. Maneja formularios web y desconoce el catálogo y el proceso de solicitud de la cafetería.

**Escenario.** Valeria organiza una jornada académica para 30 asistentes. Tiene la fecha tentativa y la cantidad de personas. Quiere saber qué incluye cada servicio y dejar registrada una solicitud que pueda volver a identificar durante la demostración.

| Necesidad prioritaria | Objetivo observable |
| --- | --- |
| Entender y comparar la oferta. | Distinguir qué incluye cada servicio antes de elegirlo. |
| Saber qué datos debe preparar. | Identificar los campos obligatorios y completar la fecha, el número de asistentes y el contacto de prueba. |
| Evitar solicitar el servicio equivocado o registrar datos incorrectos. | Ver el servicio elegido, revisar los datos y corregirlos conservando el resto. |
| Tener constancia y conocer el estado. | Reconocer el registro de la solicitud, su código y la etapa en que se encuentra. |

## Heurísticas prioritarias de Nielsen

| Heurística | Justificación para Valeria | Aplicación y comprobación |
| --- | --- | --- |
| 1. Visibilidad del estado del sistema | Necesita saber si seleccionó el servicio correcto, en qué paso está y qué ocurrió al confirmar. | Mostrar el paso actual y el servicio elegido. Al registrar, mostrar un código y el estado «Pendiente de revisión» con la indicación de que es una simulación. Verificar que el resultado se pueda percibir con lector de pantalla y que el estado se entienda por su texto. |
| 5. Prevención de errores | Una fecha pasada, una cantidad inválida o una selección involuntaria afectan directamente al evento. | Identificar campos requeridos antes de escribir, validar fecha y cantidad, y ofrecer un resumen editable antes de registrar. Probar que una entrada inválida conserva los demás valores y que confirmar dos veces seguidas crea una sola solicitud. |
| 6. Reconocimiento antes que recuerdo | Compara opciones entre actividades y puede olvidar el nombre del servicio o el código. | Mantener visible el nombre elegido durante el formulario y la revisión. Dar acceso a «Mis solicitudes» con el nombre, la fecha y el código visibles. Probar la consulta a partir de esos datos sin pedir al usuario que memorice el código. |

Numeración y principios según la publicación de Jakob Nielsen. [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/)

## Leyes y principios de diseño

- **Ley de Fitts.** Facilitar la selección aumentando el área interactiva y reduciendo el desplazamiento hasta ella. Colocar «Elegir servicio» junto a la información de su tarjeta y «Confirmar solicitud» debajo del resumen, con una altura objetivo de 44 px CSS para las acciones principales y ancho completo en móvil cuando corresponda. Separar la acción secundaria «Editar» para reducir pulsaciones accidentales. [Estudio original de Paul Fitts](https://www2.psychology.uiowa.edu/faculty/mordkoff/infoproc/pdfs/Fitts%201954.pdf)
- **Ley de Hick.** La elección exige más tiempo cuando aumenta la incertidumbre entre alternativas. Organizar las decisiones por pasos reduce las opciones que compiten a la vez. Primero comparar un catálogo inicial breve con el mismo orden de atributos, después completar los datos y finalmente revisar. Dar una acción principal a cada paso y conservar visible el acceso a la consulta de solicitudes. [Estudio original de W. E. Hick](https://www2.psychology.uiowa.edu/faculty/mordkoff/InfoProc/pdfs/Hick%201952.pdf)
- **Proximidad de Gestalt.** Los elementos cercanos tienden a percibirse como parte del mismo grupo. Mantener cerca el nombre, lo incluido y la acción dentro de cada tarjeta, con mayor separación entre tarjetas que entre sus elementos. En el formulario, unir visualmente etiqueta, campo, ayuda y error, y separar los grupos «Evento» y «Contacto». Aplicar el mismo agrupamiento semántico para el lector de pantalla. [Factor de proximidad de Max Wertheimer](https://psychclassics.yorku.ca/Wertheimer/Forms/forms.htm)

## Flujo de interacción previsto

**Explorar servicios → Elegir servicio → Completar la solicitud → Revisar y confirmar → Consultar estado**

1. **Explorar.** Valeria ve las tarjetas del catálogo y compara sus contenidos.
2. **Elegir.** Selecciona un servicio y llega al formulario con la elección visible. Puede volver al catálogo.
3. **Completar.** Indica fecha, asistentes y correo de contacto ficticio. Los errores se muestran junto a sus campos y permiten corregir los valores antes de continuar.
4. **Revisar y confirmar.** Comprueba servicio y datos en un resumen. Puede volver a editarlos sin reescribirlos. Al confirmar, el prototipo registra la solicitud, muestra su código e indica «Pendiente de revisión». La pantalla confirma el registro simulado de la solicitud, cuya aprobación queda pendiente.
5. **Consultar.** Accede a «Mis solicitudes» en el mismo navegador y origen. Identifica su solicitud por servicio, fecha y código. Si todavía no hay solicitudes, la vista explica cómo crear una.

La versión final incorpora teléfono obligatorio y conserva las solicitudes confirmadas en localStorage, según el encargo posterior. La recarga reinicia el borrador y recupera las solicitudes del mismo navegador y origen. [Requisitos y criterios de aceptación](requisitos.md)
