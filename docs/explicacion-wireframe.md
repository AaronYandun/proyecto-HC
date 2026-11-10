# Explicación del wireframe de reservas de catering

Los esquemas desarrollan el flujo definido en [el análisis](analisis.md) y los criterios de [requisitos](requisitos.md). Se leen de arriba abajo como una secuencia de vistas. Cada flecha señala el número de la sección de destino. Los números son anotaciones para el dibujo en papel.

[Versión de escritorio](wireframe.svg) · [Versión de celular](wireframe-mobile.svg)

## Secciones y necesidades del cliente

| Sección | Función y necesidad atendida | Relación con requisitos |
| --- | --- | --- |
| Encabezado | Identifica la cafetería y permite llegar a Servicios o Mis solicitudes desde cualquier etapa. Mantiene una navegación de dos opciones. | RF-01 y RF-06 |
| 1. Bienvenida | Explica brevemente qué puede hacer Valeria y anticipa el proceso para organizar su evento. | RF-01 |
| 2. Catálogo | Presenta tres servicios ficticios con nombre, descripción y contenido en el mismo orden. Cada tarjeta reúne información y un botón amplio de selección. | RF-01 y RF-02 |
| 3. Formulario | Mantiene visible el servicio elegido y agrupa datos del cliente, datos del evento y observaciones. Los campos obligatorios tienen asterisco y las observaciones son opcionales. | RF-02 y RF-03 |
| 4. Resumen | Reúne todos los datos antes de confirmar. Editar regresa al formulario conservando los valores. Confirmar registra una sola solicitud por operación. | RF-04 y RF-05 |
| 5. Confirmación | Comunica el registro simulado, muestra el código y el estado Pendiente de revisión. Ofrece acceso directo a la consulta. | RF-05 |
| 6. Consulta | Muestra servicio, fecha, personas, código y estado textual. La variante vacía conduce al catálogo. Permite identificar la solicitud sin memorizar el código. | RF-06 |

## Comportamiento entre vistas

La selección abre el formulario con el nombre del servicio. Revisar valida los campos y abre el resumen cuando son válidos. Un error conserva los demás datos, se ubica junto al campo correspondiente y dirige el foco al primer campo que necesita corrección. El error dibujado es una variante para explicar ese caso.

Editar permite corregir antes de confirmar. Cambiar servicio vuelve al catálogo conservando el borrador. Confirmar genera el resultado y evita duplicados por una doble pulsación. La consulta muestra las solicitudes de la página abierta. La recarga reinicia la demostración, conforme al alcance inicial.

El formulario aparece después de elegir un servicio, el resumen después de validar y la confirmación después de registrar. La variante vacía de consulta se presenta cuando todavía no existen solicitudes. El lienzo reúne esos estados para facilitar su comparación y su dibujo en papel.

## Principios aplicados

- **Fitts.** Los botones tienen 48 unidades de altura en los esquemas a escala nominal, superando el objetivo de 44 px previsto para las acciones principales. En celular ocupan el ancho disponible y las acciones consecutivas tienen separación.
- **Hick.** La navegación ofrece dos destinos y el catálogo propone tres alternativas. Cada etapa presenta una decisión principal. La revisión reúne los datos antes del último paso.
- **Proximidad de Gestalt.** Los bordes y espacios agrupan cada servicio. Etiquetas y campos permanecen juntos, mientras los bloques de cliente y evento tienen separación adicional.
- **Jerarquía visual.** Los títulos de etapa son mayores y más destacados que las instrucciones. Los encabezados de tarjeta y las acciones se diferencian mediante peso tipográfico. Los tonos grises delimitan áreas.
- **Visibilidad del estado del sistema.** El indicador de paso, el servicio elegido, la confirmación y la etiqueta de estado explican dónde está el cliente y qué ocurrió.
- **Prevención de errores.** Los campos requeridos se anticipan, las ayudas describen fecha y cantidad válidas y el resumen permite corregir antes del registro.
- **Reconocimiento antes que recuerdo.** El servicio se repite en formulario, resumen y consulta. Los datos visibles permiten reconocer cada solicitud.

Los principios se desarrollan y referencian en el análisis. Los controles futuros usarán elementos semánticos, etiquetas asociadas, orden de teclado coherente y foco visible. Los cambios de vista llevarán el foco al encabezado correspondiente y el resultado se comunicará de forma accesible.

## Adaptación a los dispositivos

El escritorio usa tres tarjetas en una fila y navegación junto a la identidad. El celular apila las tarjetas, coloca la navegación debajo de la identidad y conserva formularios y acciones en una columna. Ambos mantienen el orden de lectura y las mismas funciones. El esquema móvil tiene 390 px de ancho nominal. La implementación deberá comprobar además los 320 px previstos en RNF-04.

## Decisiones de esta fase

Los nombres Pausa café, Almuerzo y Bocaditos, sus contenidos y los datos mostrados son ejemplos para el prototipo. Se incorpora nombre como dato obligatorio del cliente y observaciones como campo opcional para concretar el encargo actual. Estos campos amplían el formulario mínimo descrito en RF-03. La fecha es un valor ilustrativo que deberá sustituirse por una fecha válida al probar.

La paleta gris y las formas simples corresponden a baja fidelidad. Los wireframes digitales son referencias para realizar el dibujo en papel exigido por el taller. El dibujo y la coevaluación grupal siguen pendientes.

Para dibujarlos, reproduce las secciones numeradas en hojas consecutivas, traza flechas entre las acciones y sus destinos, y añade las variantes de error y consulta vacía junto a la vista correspondiente.
