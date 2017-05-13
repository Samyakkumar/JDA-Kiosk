var count = 0;
var nc = 0;
var fireworks = [];
var roses = []
var gravity;
var fonts = ["Georgia", "Helvetica", ]
var imgs = [];
function preload(){
var temp = loadImage("rose.jpeg")
for(var k = 1; k <= 18; k++){
  imgs.push(loadImage(k.toString() + ".jpg"))
}
}
function setup() {
  createCanvas(window.innerWidth - 50, window.innerHeight - 50)
  //background(img)
  
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  // textStyle(ITALIC);
ShowImages();
}


function draw() {
  colorMode(RGB);
 //background(255)
  if(count == 37){
    count = 0;
  }
  var r = map(count, 0, 60, 20, 255)
  var g = map(count, 0, 60, 20, 255)
  var b = map(count, 0, 60, 10, 255)
  var colrs = color(r, g, b)
  if(nc % 1000 == 0){
    ShowImages();
  }
 if (random(1) < 0.03) {
    fireworks.push(new Firework());
    // roses.push(new Rose(img))
  }

  showText(colrs);
  for(var j = roses.length - 1; j >= 0; j--){
    roses[j].show()
    roses[j].update()
    if(roses[j].out){
      roses.splice(i, 1)
    }
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  count += 1;
  nc += 1;
}



function showText(col){
  push()
  fill(col)
  // rotate(-count)
  noStroke()
  textFont("Courgette")
  textSize(60)
  text("HAPPY MOTHER'S DAY!!", width/2 - 280, height/2)
  text("Best Mom Awards", width/2 - 280, height/2 + 80)
  text("2017 !!", width/2 - 180, height/2 + 150)
  pop()
  // rotate(count)
  // text("HAPPY MOTHER'S DAY!!", 150, height/2)
  // text("")

}
function ShowImages(){
  clear();
  angleMode(DEGREES);
  for(var u = 0; u < imgs.length; u++){
    push()
        translate(width/3)
    rotate(random(0, 30))
    image(imgs[u], random(20, width-20), random(20, height - 50))
    pop()
  }
}