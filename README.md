# overlayNI
**overlayNI.js** es una pantalla semi transparente en la cual puedes mostrar mensajes a pantalla completa al usuario. **overlayNI.js** es facil de usar y de configurar o puedes usar sus valores por defecto. (sin dependencias)

## propiedades
- show
-hide

## configuracion (opcional)
- fondo del overlay: background
- color del texto: color
- borde al rededor del texto: border (true|false)
- texto en pantalla: text
- duracion de la animacion: time

### ejemplo de configuracion
~~~javascript
let config = {
  background:'red',
  color:'white',
  border:true
}
let overlay = new overlayNI(config);
~~~


## ejemplo simple
~~~javascript
let overlay = new overlayNI();

//mostrar overlay
overlayNI.show;
~~~
