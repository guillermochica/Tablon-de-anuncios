Tablon-de-anuncios
==================

Aplicación cliente-servidor en JavaScript.

Proyecto para el curso del CEVUG Porgramación cliente-servidor en JavaScript.

Consiste en un servicio de tablón de anuncios para publicar y ver anuncios. Hay tres categorias: trabajo, transporte y ventas de segunda mano. Se pueden publicar anuncios en cada una de las categorías y ver todos los anuncios correspondientes a cada categoría.

El servidor está programado en node.js y hay dos clientes, uno en JQuery para usar la aplicación desde el navegador y otro en node.js para usarla desde la terminal.

Para ejecutar el cliente en node.js se necesita tener instalado node.js y el módulo restler (`npm install restler`).
Las instrucciones para usar este cliente son:

-Para publicar un anuncio escribe `node clienteNode post categoria Nombre El texto del anuncio`, donde el nombre debe ser una sola palabra. Ejemplo: `node clienteNode post trabajo Guillermo Soy minero de pico y barrena`.

-Para ver los anuncios de una categoría escribe `node clienteNode get categoria`. Ejemplo: `node clienteNode get trabajo`.
