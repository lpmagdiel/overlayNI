# loadingOverlay 1.1
**loadingOverlay.js** es una pantalla semi transparente en la cual puedes mostrar mensajes a pantalla completa al usuario. **loadingOverlay.js** es facil de usar y de configurar o puedes usar sus valores por defecto. (sin dependencias)

## Descarga
[Produccion](https://lpzmagdiel.neocities.org/loadingOverlay/loadingOverlay.js)
[Produccion - comprimido](https://lpzmagdiel.neocities.org/loadingOverlay/loadingOverlay.min.js)

## Propiedades
- show
- hide

## Configuracion (opcional)
- fondo del overlay: background
- color del texto: color
- borde al rededor del texto: border (true|false)
- texto en pantalla: text
- duracion de la animacion: time (milisegundos)
- activar icono animado en lugar de texto: icon (true|false)

### Configuracion por defecto
~~~javascript
let default = {
  background:'#fff',
  color:'#000',
  border:false,
  time:700,
  text:'Loading'
}
~~~

### Ejemplo de configuracion
~~~javascript
let config = {
  background:'red',
  color:'white',
  border:true
}
let overlay = new loadingOverlay(config);
~~~


## Ejemplo simple
~~~javascript
let overlay = new loadingOverlay();

//mostrar overlay
overlay.show;
~~~
