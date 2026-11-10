# Accesibilidad del sistema de catering

Revisión del 10 de noviembre de 2026 mediante inspección del código, pruebas del DOM y cálculo numérico de contrastes. El navegador integrado falló al conectar la pestaña. La evaluación visual y con tecnologías de asistencia permanece pendiente. Los resultados parciales no constituyen una declaración de conformidad WCAG AA del sistema completo.

## Método de contraste

Se calcularon luminancias relativas a partir de los valores sRGB hexadecimales del CSS. Cada canal se normalizó entre 0 y 1 y se convirtió a luz lineal usando el umbral 0,04045. Se aplicó L = 0,2126 R + 0,7152 G + 0,0722 B. La relación es (L mayor + 0,05) / (L menor + 0,05). Las decisiones usan el valor completo; la tabla redondea a dos decimales.

El criterio 1.4.3 AA exige 4,5:1 para texto normal y 3:1 para texto grande. Para esta tabla se usó 4,5:1 en todos los pares de texto. Los componentes inactivos y elementos puramente decorativos tienen excepciones. [W3C, contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

Para bordes que identifican controles e indicadores relevantes se comparó con 3:1, de acuerdo con 1.4.11. La comprobación se limita a pares declarados, sin medir píxeles renderizados, superposiciones o antialiasing. [W3C, contraste no textual](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)

| Uso | Primer color | Fondo | Relación | Umbral de comparación | Resultado |
| --- | --- | --- | --- | --- | --- |
| Texto principal / fondo | #1F2937 | #F8F6F3 | 13.61:1 | 4.5:1 | Cumple el umbral |
| Texto secundario / blanco | #59616B | #FFFFFF | 6.27:1 | 4.5:1 | Cumple el umbral |
| Texto secundario / panel beige | #59616B | #EEE9E1 | 5.19:1 | 4.5:1 | Cumple el umbral |
| Blanco / vino | #FFFFFF | #722F37 | 9.65:1 | 4.5:1 | Cumple el umbral |
| Blanco / vino hover | #FFFFFF | #59242B | 12.27:1 | 4.5:1 | Cumple el umbral |
| Vino / fondo | #722F37 | #F8F6F3 | 8.94:1 | 4.5:1 | Cumple el umbral |
| Error / blanco | #9A202B | #FFFFFF | 8.03:1 | 4.5:1 | Cumple el umbral |
| Estado registrado | #24553A | #E8F2EB | 7.53:1 | 4.5:1 | Cumple el umbral |
| Estado nuevo | #25456D | #EAF0FA | 8.53:1 | 4.5:1 | Cumple el umbral; clase visual conservada, sin transición funcional actual |
| Estado revisión | #6C4E09 | #FFF2CD | 6.90:1 | 4.5:1 | Cumple el umbral; clase visual conservada, sin transición funcional actual |
| Texto tarjeta café | #653A2B | #EEE3DB | 7.59:1 | 4.5:1 | Cumple el umbral |
| Texto tarjeta almuerzo | #3D4B32 | #E7EADD | 7.65:1 | 4.5:1 | Cumple el umbral |
| Texto tarjeta bocaditos | #722F37 | #F0E2E5 | 7.68:1 | 4.5:1 | Cumple el umbral |
| Borde del campo / blanco | #7B7770 | #FFFFFF | 4.45:1 | 3:1 | Cumple el umbral |
| Foco / fondo | #1F2937 | #F8F6F3 | 13.61:1 | 3:1 | Cumple el umbral |
| Dorado / blanco decorativo | #D4AF37 | #FFFFFF | 2.10:1 | 4.5:1 | 2,10:1; uso decorativo, evitar para texto |
| Control deshabilitado | #62616A | #ECE9E4 | 5.05:1 | 4.5:1 | Supera el umbral; control inactivo exento |

## Inspección por criterio

| Aspecto | Resultado y evidencia | Comprobación pendiente |
| --- | --- | --- |
| Legibilidad | Inter con respaldo del sistema, interlineado 1,6 y campos de 16 px. Títulos distinguidos por tamaño y peso. Algunos textos auxiliares descienden a 8–12 px. | Ampliación al 200 %, reflujo a 400 % y comodidad de lectura real. Aumentar auxiliares pequeños es una mejora propuesta. |
| Etiquetas | Los campos tienen label asociado, nombre, tipo y atributos required cuando corresponde. Los grupos usan fieldset y legend. Teléfono y correo incluyen autocomplete. | Anuncio de nombre, obligatoriedad y ayuda en lector de pantalla. |
| Foco | Regla focus-visible de 3 px con separación de 4 px. El código enfoca el primer error, el resumen y la confirmación. Las pruebas del DOM verificaron esos destinos. | Visibilidad real, ausencia de recortes y orden completo con Tab y Mayús+Tab. |
| Teclado | Botones, enlaces y selector nativos. Enlace Saltar al contenido. Sin tabindex positivo ni captura de teclado personalizada. | Recorrido completo con Enter, Espacio y teclado de calendario en navegador. |
| Errores | Mensajes específicos junto a cada campo, vinculados por aria-describedby y aria-invalid. Validación probada en DOM. Se conserva el resto de los valores. | Anuncio de mensajes repetidos con lector de pantalla. |
| Estados | Texto Seleccionado y aria-pressed complementan el borde. Solicitud registrada aparece como texto. Las regiones de mensajes tienen role=status. | Anuncio de resultados y contexto después de cambios de foco. |
| Semántica | Header, nav, main, section, article, aside y footer. Resumen con dl, dt y dd. Documento en español. | Revisar árbol accesible del navegador y navegación por encabezados con tecnología de asistencia. |
| Móvil | CSS Grid con minmax(0, 1fr), Flexbox y cortes de 1000, 760 y 420 px. Se añadió ajuste de palabras y min-width al texto de confirmación. | Comprobar 320, 390 y 768 px, identificadores largos, orientación y teclado virtual. |
| Interacción | Botones con altura mínima declarada de 48 px y enlaces de navegación de 44 px. | Medir áreas reales y comprobar separación. |

WCAG 2.2 AA, criterio 2.5.8, establece objetivos de 24 × 24 px o las excepciones previstas. Los 44 px del plan son una meta del proyecto y se relacionan con el criterio mejorado 2.5.5 AAA. La altura de 48 px declarada en CSS es evidencia parcial, pendiente de medición del ancho y del renderizado. [W3C, tamaño mínimo del objetivo](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

## Limitaciones y prioridades

1. Validar teclado y lector de pantalla en un navegador real. El foco del DOM no demuestra por sí solo un anuncio correcto.
2. Comprobar ampliación y reflujo, incluidos los estados con errores y la confirmación de códigos largos.
3. Evaluar la legibilidad de textos pequeños con los compañeros y registrar sus observaciones.
4. Mantener el dorado como acento decorativo. Si se convierte en texto o señal esencial, elegir una combinación que supere el umbral aplicable.
5. Confirmar visualmente que el indicador de foco de los botones contenidos en tarjetas no se recorta.

La corrección del selector y la limpieza de mensajes de consulta están verificadas con pruebas de regresión. El ajuste CSS de confirmación queda documentado como corrección preventiva por inspección y requiere revisión visual.
