# loadingOverlay 1.2
**loadingOverlay.js** es una pantalla semi transparente en la cual puedes mostrar mensajes a pantalla completa al usuario. **loadingOverlay.js** es facil de usar y de configurar o puedes usar sus valores por defecto. (sin dependencias)

## Descarga
[Produccion](https://lpzmagdiel.neocities.org/loadingOverlay/loadingOverlay.js)
[Produccion - comprimido](https://lpzmagdiel.neocities.org/loadingOverlay/loadingOverlay.min.js)

## Metodos
- show
- hide

## Configuracion (opcional)
- color del icono: color



## Ejemplo simple
~~~javascript
let overlay = new loadingOverlay();

//mostrar overlay
overlay.show();

// ocultar despues de 4 segundos
setTimeout(function(){
	overlay.hide();
	},4000);
~~~
