//dibujos de acuarela de la serie animada Más allá del jardín
let otoño;
let invierno;
let gorrito;
let gorritos;
let teteraRana;
let tetera;
let encendida;
let apagada;
//música de la serie
let musica; 
let hoja;
//arreglo de hojas
let hojas = [];

//la variable esinvierno vale no
let esinvierno = false;

function preload(){
  otoño = loadImage("otoño.jpg");
  invierno = loadImage("invierno.jpg");
  gorrito = loadImage ("gorrito.png");
  gorritos = loadImage ("gorritos.png");
  teteraRana = loadImage ("teteraRanita.png");
  tetera = loadImage ("tetera.png"); 
  encendida = loadImage ("encend.png");
  apagada = loadImage("apagada.png");
  hoja = loadImage("hojas.png")
  musica = loadSound("Intro.mp3")
}

function setup() {
  createCanvas(1200, 720);
//hacer que hayan 50 hojas en el lienzo cayendo de manera aleatoria
for (let i = 0; i < 50; i++) {
hojas.push({
x: random(width),
y: random(-height, 0),
velocidad: random(1, 3),
tam: random(20, 60) });
}
}

function draw() {
  background(220);
//tanto el fondo de otoño como el de invierno tendran un zoom
  let escala = 1 + sin(frameCount * 0.005) * 0.05;
  
//si no estamos en invierno se reproduce el fondo otoñal y los elementos en buen estado
if (esinvierno == false) {
//zoom del fondo de otoño
push();
translate(width/2,height/2);
scale(escala);
imageMode(CENTER);
image(otoño,0,0,width,height);
pop();
imageMode(CORNER);

//movimiento de balanceo del gorrito ocasionado por el viento
push();
translate(225, 525); 
rotate(radians(sin(frameCount * 0.03) * 3));
imageMode(CENTER);
image(gorrito, 0, 0, 150, 150);
pop();
imageMode(CORNER);

//movimiento de balanceo de la tetera, pero menos que el gorrito
push();
translate(825, 475); // centro de la tetera
rotate(radians(sin(frameCount * 0.01) * 2));
imageMode(CENTER);
image(teteraRana, 0, 0, 250, 250);
pop();
imageMode(CORNER);

//rectangulo negro con transparencia sobre el fondo
fill(0, 120);  
noStroke();
rect(0, 0, width, height);
  
//halo de luces más tenues para la lampara
for (let i = 150; i > 0; i -= 15) {
fill(255, 220, 100, 8);
ellipse(mouseX -50, mouseY -50, i * 2);
}
//halo  de luz más intensa
noStroke();
fill(255, 230, 120, 60);
//halo de luz parpadeando
let radio = 120 + sin(frameCount * 0.15) * 10;
ellipse(mouseX -50, mouseY -50, radio, radio);
//lampara parpadeando 
let brillo = 100 + sin(frameCount * 0.15) * 5;
image( encendida, mouseX -50 - brillo / 2, mouseY -50  - brillo / 2, brillo,brillo);

//hace que las hojas recorran el lienzo, a la velocidad establecida anteriormente
for (let h of hojas) {
h.y += h.velocidad;
//simula movimiento del viento
h.x += sin(frameCount * 0.02 + h.y * 0.01);
image(hoja, h.x, h.y, h.tam, h.tam);
//si la hoja cae al final del lienzo, reaparecera desde el comienzo
if (h.y > height) {
h.y = random(-300, -50);
h.x = random(width);
  }
}    
} 
// si se reproduce invierno ocurre la siguiente secuencia
   else {
// fondo invierno con zoom
push();
translate(width / 2, height / 2);
scale(escala);
imageMode(CENTER);
image(invierno, 0, 0, width, height);
pop();

// gorritos con enredadera
image(gorritos, 250, 250, 350, 350);
     
//tetera con enredadera
 image(tetera, 700, 200, 230, 230 );
     
// la lámpara apagada sigue al mouse mientras se balancea
push();
translate(mouseX -50, mouseY- 50);
rotate(radians(sin(frameCount * 0.01) * 6));
imageMode(CENTER);
image(apagada, 0, 0, 200, 200)
pop();
imageMode(CORNER);
    
//nieve cayendo
fill(255);
noStroke();
for (let i = 0; i < width; i += 5) {
let velocidad = map(sin(i), -1, 1, 10, 3);
let y = (frameCount * velocidad + i * 8) % height;
let x = i + sin(frameCount * 0.03 + i * 0.2) * 8;
let tam = map(sin(i * 3), -1, 1, 2, 4);
ellipse(x, y, tam, tam);
}
  }

}

// Cambia entre otoño e invierno con un clic
function mousePressed() {
esinvierno = !esinvierno;
  

//canción "Over The Garden Wall Official Soundtrack | Prelude – The Blasting Company" en loop
if(!musica.isPlaying()){
musica.loop();    
  } 
}


