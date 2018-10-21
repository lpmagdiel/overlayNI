# overlayNI
**overlayNI.js** es una pantalla semi transparente en la cual puedes mostrar mensajes a pantalla completa al usuario. **overlayNI.js** es facil de usar y de configurar o puedes usar sus valores por defecto. (sin dependencias)

## Propiedades
- show
- hide

## Configuracion (opcional)
- fondo del overlay: background
- color del texto: color
- borde al rededor del texto: border (true|false)
- texto en pantalla: text
- duracion de la animacion: time (milisegundos)

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
let overlay = new overlayNI(config);
~~~


## Ejemplo simple
~~~javascript
let overlay = new overlayNI();

//mostrar overlay
overlay.show;
~~~
