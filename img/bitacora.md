1. Requerimientos e Identidad Visual

Objetivo del proyecto: Crear un formulario de contacto robusto para la marca NEXUP (Tecnología, Cultura y Educación).

Restricciones técnicas: Desarrollo en un único archivo HTML5 puro, sin archivos CSS externos ni dependencias de JavaScript, manteniendo compatibilidad con estándares web.

Integración de marca: Uso del logotipo futurista en neón (img/Logotipo futurista NEXUP en neón.png) integrado en la cabecera como enlace principal de retorno al inicio (index.html).

2. Decisiones de Maquetación y Diseño

Estructura basada en tablas: Elección de la etiqueta <table> para garantizar una alineación horizontal limpia y estructurada entre etiquetas <label> y campos <input>.

Distribución de campos: Organización de los datos en dos columnas principales por fila (Nombre/Correo, Teléfono/Edad, Consulta/Fecha, Sitio Web/Urgencia) y campos extendidos (colspan="3") para Asunto y Mensaje.

Limpieza de atributos obsoletos: Migración de atributos no válidos en HTML5 como align hacia estilos en línea (style="text-align: left;") para evitar advertencias en editores de código.

3. Implementación de Validaciones Estrictas

Restricciones de formato: Uso de expresiones regulares (pattern) para asegurar que el nombre solo contenga letras, el teléfono contenga exactamente 10 dígitos numéricos y el correo tenga una estructura válida.

Límites de rango y fecha: Configuración de campos numéricos (min="18" y max="100") e inclusión de fecha mínima mediante el atributo min.

Restricciones de texto y archivo: Definición de longitudes mínimas y máximas (minlength, maxlength) en los campos de texto/mensaje y restricción del formato de subida exclusivamente a archivos .pdf (accept=".pdf").

4. Componentes Interactivos y Estructura Global

Menú desplegable nativo: Uso de las etiquetas <details> y <summary> para crear un menú desplegable funcional (botón ☰) que contendrá la opción de "Cerrar sesión" sin necesidad de JavaScript.

Ubicación del pie de página (<footer>): Posicionamiento del pie de página al final del contenedor principal con la información de contacto y derechos actualizados.

5. Implementación de Estilos Globales (CSS Centralizado)
Migración de estilos: Eliminación progresiva de los atributos style="..." en línea para centralizar todas las reglas de diseño dentro de un bloque <style> en la etiqueta <head>.

Aplicación de la Paleta de Marca (NEXUP):

Fondo general y contenedores: Tonos oscuros de base (#0b0f19 y #121826) para dar una estética tecnológica y futurista.

Azul Eléctrico (#1970FF): Utilizado en bordes de enfoque (focus), acentos principales y la base de los degradados.

Violeta Eléctrico (#8E37FF): Integrado en degradados de botones y bordes secundarios de menús flotantes.

Turquesa Luminoso (#49DEC8): Aplicado en bordes de campos de formulario, elementos interactivos y efectos de neón en cursor (hover).

6. Rediseño del Logotipo y Cabecera
Contenedor del Logotipo: Creación de clases CSS específicas para el contenedor del logo (como .logo-circle-container), dotándolo de un marco estilizado, bordes redondeados y efectos de resplandor neón (box-shadow) que mejoran la jerarquía visual de la marca al regresar al inicio (index.html).

7. Refinamiento del Menú Desplegable y Botón de Sesión
Estructura del Menú (.dropdown-menu): Diseño de un contenedor flotante con posicionamiento absoluto, fondo oscuro y bordes definidos para contener las opciones de navegación rápida.

Estilización del Botón de Cierre de Sesión (.btn-logout):

Transformación del enlace simple de "Cerrar sesión" en un botón interactivo con degradado (Azul a Violeta eléctrico).

Implementación de efectos de transición y estado hover con inversión de colores hacia el Turquesa Luminoso para una mejor retroalimentación visual del usuario.

