let gui;

//boton para regresar al menú
let menu;
var titulo;

//botones de luna

//ambiente 1
let bluna1;
var svolumen1;

var stella;
var x_stella = [];
var y_stella = [];
var vely_stella = [];
var sz_stella = [];

var musica1;
var analisis;

//ambiente 2
let bluna2;
var svolumen2;

var musica2;

//ambiente 3
let bluna3;
var svolumen3;

var musica3;

//ambiente 4
let bluna4;
var svolumen4;

var musica4;

//ambiente 5
let bluna5;
var svolumen5;

var musica5;

//ambiente 6
let bluna6;
var svolumen6;

var musica6;

//ambiente 7
let bluna7;
var svolumen7;

var musica7;

//imagenes
var fondo;
var luna1P;
var luna2P;
var luna3P;
var luna4P;
var luna5P;
var luna6P;
var luna7P;

function preload() {
  fondo = loadImage("fondolun.png");

  luna2P = loadImage("luna2.png");
  luna3P = loadImage("luna3.png");
  luna4P = loadImage("luna4.png");
  luna5P = loadImage("luna5.png");
  luna6P = loadImage("luna6.png");
  luna7P = loadImage("luna7.png");

  musica1 = loadSound("musicalun1.mp3");
  musica2 = loadSound("luna2c.mp3");
  musica3 = loadSound("luna3c.mp3");
  musica4 = loadSound("luna4c.mp3");
  musica5 = loadSound("luna5c.mp3");
  musica6 = loadSound("luna6c.mp3");
  musica7 = loadSound("luna7c.mp3");

  titulo = loadFont("Rock3D-Regular.ttf");

  //elementos del ambiente 1
}

function setup() {
  createCanvas(1920, 1080);
  gui = createGui();

  //velocidad del titulo y lunas de laportada
  y = -500;
  y1 = -500;

  analisis = new p5.Amplitude();
  analisis.setInput(musica1);

  //toggles
  bluna1 = createToggle("luna1", 356, 777, 15, 15);
  bluna2 = createToggle("luna2", 463, 570, 50, 50);
  bluna3 = createToggle("luna3", 640, 292, 100, 200);
  bluna4 = createToggle("luna4", 925, 186, 150, 150);
  bluna5 = createToggle("luna5", 1248, 301, 100, 100);
  bluna6 = createToggle("luna6", 1490, 519, 100, 60);
  bluna7 = createToggle("luna7", 1616, 777, 15, 15);

  menu = createButton("Back", 100, 950, 100, 100);

  //sliders. Recuerda que sus valores son 2 posicion, 2 tamaño, 2 de que a que valor van

  svolumen1 = createSlider("svolumen1", 50, 50, 150, 50, 0, 1);
  svolumen2 = createSlider("svolumen2", 250, 50, 150, 50, 0, 1);
  svolumen3 = createSlider("svolumen3", 450, 50, 150, 50, 0, 1);
  svolumen4 = createSlider("svolumen4", 650, 50, 150, 50, 0, 1);
  svolumen5 = createSlider("svolumen5", 850, 50, 150, 50, 0, 1);
  svolumen6 = createSlider("svolumen6", 1000, 50, 150, 50, 0, 1);
  svolumen7 = createSlider("svolumen7", 1780, 50, 150, 50, 0, 1);

  //instrucciones de visibilidad para los botones y sliders
  svolumen1.visible = false;
  svolumen2.visible = false;
  svolumen3.visible = false;
  svolumen4.visible = false;
  svolumen5.visible = false;
  svolumen6.visible = false;
  svolumen7.visible = false;

  //elementos del ambiente 1
  luna1P = loadImage("luna1.png");
  stella = loadImage("estrellaa.png");

  for (var i = 0; i < 200; i++) {
    x_stella = append(x_stella, random(width));
    y_stella = append(y_stella, 0);
    vely_stella = append(vely_stella, random(3, 7));
    sz_stella = append(sz_stella, random(70, 120));
  }

  //elementos del ambiente 2

  //elementos del ambiente 3

  //elementos del ambiente 4

  //
}

function draw() {
  background(fondo, width / 2, height / 2, width, height);
  //background(250);

  textFont(titulo);
  fill("#E7CE9C");
  text("A una luna", width / 2, y);
  text("de distancia", width / 2, y1);
  textAlign(CENTER);
  textSize(80);

  y += 10;
  y1 += 12;
  //yf[i]+=5;

  if (y > height / 2 + 50) {
    y = height / 2 + 50;
  }
  if (y1 > height / 2 + 150) {
    y1 = height / 2 + 150;
  }

  drawGui();

  //para regresar al menu
  if (menu.val) {
    bluna1.val = false;
    bluna2.val = false;
    bluna3.val = false;
    bluna4.val = false;
    bluna5.val = false;
    bluna6.val = false;
    bluna7.val = false;
    
   
  } else {
     
  }

  //ambiente 1

  image(luna1P, 0, 0, width, height);
  image(luna2P, 0, 0, width, height);
  image(luna3P, 0, 0, width, height);
  image(luna4P, 0, 0, width, height);
  image(luna5P, 0, 0, width, height);
  image(luna6P, 0, 0, width, height);
  image(luna7P, 0, 0, width, height);

  if (bluna1.val) {
    //instrucciones de visibilidad
    svolumen1.visible = true;

    image(fondo, 0, 0, width, height);

    musica1.setVolume(svolumen1.val);

    if (musica1.isPlaying()) {
    } else {
      musica1.play();
    }

    let rms = analisis.getLevel();
  } else {
    svolumen1.visible = false;

    if (musica1.isPlaying()) {
      musica1.stop();
    } else {
    }
  }

  //ambiente 2

  if (bluna2.val) {
    //instrucciones de visibilidad

    image(fondo, 0, 0, width, height);
    svolumen2.visible = true;

    musica2.setVolume(svolumen2.val);

    if (musica2.isPlaying()) {
    } else {
      musica2.play();
    }

    let rms = analisis.getLevel();
  } else {
    svolumen2.visible = false;

    if (musica2.isPlaying()) {
      musica2.stop();
    } else {
    }
  }

  //ambiente 3

  if (bluna3.val) {
    //instrucciones de visibilidad

    image(fondo, 0, 0, width, height);
    svolumen3.visible = true;

    musica3.setVolume(svolumen3.val);

    if (musica3.isPlaying()) {
    } else {
      musica3.play();
    }

    let rms = analisis.getLevel();
  } else {
    svolumen3.visible = false;

    if (musica3.isPlaying()) {
      musica3.stop();
    } else {
    }
  }

  //ambiente 4

  if (bluna4.val) {
    //instrucciones de visibilidad
    image(fondo, 0, 0, width, height);
    svolumen4.visible = true;
    menu.visible = true;

    bluna4.visible = false;

    musica4.setVolume(svolumen4.val);

    if (musica4.isPlaying()) {
    } else {
      musica4.play();
    }

    //comando de las estrellas
    for (var i = 0; i < x_stella.length; i += 5) {
      image(stella, x_stella[i], y_stella[i], sz_stella[i], sz_stella[i]);

      y_stella[i] += vely_stella[i];

      if (y_stella[i] >= height) {
        y_stella[i] = 0;
        x_stella[i] = random(width);
      }
    }
  } else {
    
    svolumen4.visible = false;

    bluna4.visible = true;
    if (musica4.isPlaying()) {
      musica4.stop();
    } else {
    }
  }

  //ambiente 5

  if (bluna5.val) {
    //instrucciones de visibilidad
    svolumen5.visible = true;

    image(fondo, 0, 0, width, height);

    musica5.setVolume(svolumen5.val);

    if (musica5.isPlaying()) {
    } else {
      musica5.play();
    }

    let rms = analisis.getLevel();
  } else {
    svolumen5.visible = false;

    if (musica5.isPlaying()) {
      musica5.stop();
    } else {
    }
  }

  //ambiente 6

  if (bluna6.val) {
    //instrucciones de visibilidad
    svolumen6.visible = true;

    image(fondo, 0, 0, width, height);

    musica6.setVolume(svolumen6.val);

    if (musica6.isPlaying()) {
    } else {
      musica6.play();
    }

    let rms = analisis.getLevel();
  } else {
    svolumen6.visible = false;

    if (musica6.isPlaying()) {
      musica6.stop();
    } else {
    }
  }

  //ambiente 7

  if (bluna7.val) {
    //instrucciones de visibilidad
    svolumen7.visible = true;

    image(fondo, 0, 0, width, height);

    musica7.setVolume(svolumen7.val);

    if (musica7.isPlaying()) {
    } else {
      musica7.play();
    }

    let rms = analisis.getLevel();
  } else {
    svolumen7.visible = false;

    if (musica7.isPlaying()) {
      musica7.stop();
    } else {
    }
  }

  console.log(mouseX, mouseY);
}
