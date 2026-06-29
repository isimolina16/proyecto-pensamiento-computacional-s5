# proyecto-pensamiento-computacional-s5
examen de s5 pensamiento computacional



## Link de web pública (github pages)

<https://link.com>

### Título del proyecto

El paso del tiempo en Más allá del jardín

### Referencia de origen / bibliografía
Este storyboard esta inspirado en la serie animada "Más allá del jardín"/ "Over The Garden Wall" creada por Patrick McHale y estrenada en 2014.
Tomando su estetica misteriosa y lugubre, reversionandola a tráves de acuarelas.


### Imagen de referencia de proyecto

Deja acá una imagen de la "portada" de tu proyecto. Como si fuera un afiche. Puede ser un fotograma de toda la interacción.

### Integrantes

Isidora Molina [isimolina16](https://github.com/isimolina16)

### Enlace de p5.js 

<https://editor.p5js.org/yogurtconchia/sketches/HT5Uyg0Dc>

### Relato inicial

El proyecto representa dos momentos de un mismo lugar inspirados en Más allá del jardín. En el primer lugar el bosque que se encuentra lleno de vida, donde las hojas caen lentamente, y estan los elementos caracteristicos de los personajes la tetera con la rana y el gorro rojo, mientras la lampara permanece encendida iluminando el entorno. Luego la escena cambia al invierno, donde el paisaje aparece cubierto de nieve, la lámpara se apaga y los objetos muestran el paso del tiempo.
### Storyboard
<img width="3001" height="1961" alt="fondo" src="https://github.com/user-attachments/assets/b1a24c64-e87d-4c03-91c2-847187a1e98f" />
<img width="2000" height="2000" alt="hojas" src="https://github.com/user-attachments/assets/a4b11e96-122f-44c4-bc3a-d4463cc662c1" />

<img width="3000" height="2621" alt="invierno" src="https://github.com/user-attachments/assets/fb30960c-1269-4743-a2df-d1d3e7bc4b89" />
<img width="2046" height="1747" alt="lamparaencendida" src="https://github.com/user-attachments/assets/080d5ceb-a9a5-4026-8219-f607dec6b301" />
<img width="1818" height="1204" alt="tetera" src="https://github.com/user-attachments/assets/0cf7802c-50ae-429a-adf8-0320009fbf20" />
<img width="2108" height="1428" alt="invierno" src="https://github.com/user-attachments/assets/5b5b6573-637b-497a-a930-ae96259ee0b9" />
<img width="2200" height="2552" alt="gorrito" src="https://github.com/user-attachments/assets/8f34c050-47dc-4817-a7ad-7ce24acc04a3" />
<img width="3000" height="2016" alt="ranita" src="https://github.com/user-attachments/assets/82b72ca8-1459-4bb6-97dc-800f7b4f0f59" />





### Estados

#### Estado 1

En el primer estado, tenemos el fondo de otoño que se reproduce solo si la variable "esinvierno"
vale no. Además el fondo cambia de escala con (sin(frameCount)), generando un aumento y oscilación para que la imagen se expanda y contraiga desde su centro.

```let escala = 1 + sin(frameCount * 0.005) * 0.05;
if (esinvierno == false) {

```


#### Estado 2

Para pasar al fondo de invierno utilizamos mousePressed, que  alterna el valor de la variable "esinvierno", que controla qué escena debe dibujarse, si otoño o invierno.

```function mousePressed() {
esinvierno = !esinvierno;// se invierte el valor de las variables entre false y true


```
#### Estado 3

El tercer estado es la condición de la lampara entre encendida y apagada.

La imagen de la lámpara cambia ligeramente de tamaño para simular el parpadeo de la llama. Al mismo tiempo, su posición se ajusta para que permanezca centrada mientras sigue el movimiento del cursor. El valor de "brillo" representa el ancho y el alto simulando un parpadeo.
```//lampara encendida
let brillo = 100 + sin(frameCount * 0.15) * 5;
image( encendida, mouseX -50 - brillo / 2, mouseY -50  - brillo / 2, brillo,brillo);


La lámpara apagada sigue el movimiento del cursor y presenta un ligero balanceo de lado a lado

//lampara apagada
translate(mouseX -50, mouseY- 50);//hace que la imagen de la lampara este al lado del cursor, no sobre el
rotate(radians(sin(frameCount * 0.01) * 6));// hace que la lampara se mueva de derecha a izquierda
image(apagada, 0, 0, 200, 200)```



