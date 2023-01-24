
let hr = 0;
let min = 0;
let sec = 0;

function preload(){
    hourFoot = loadImage('./hour.png');
    minFoot = loadImage('./minFoot.jpeg');
    secFoot = loadImage('./secFoot.png');
}

function setup() {
    createCanvas(600, 600);
    background(0,0,0);
    //background('rgba(230,237,245,255)');
    //frameRate(1);
    //noLoop();
    
    tint(0, 200, 100, 150); // Tint blue and set transparency
    //image(hourFoot, 50, 0);
}

function draw(){
    //background('rgba(230,237,245,255)');
    if (hr == 0){
        drawHour(hour());
        hr = hour();
    }
    if(hr < hour() && hr!=0){
        drawHour(1);
        hr = hour();
    }
    if(hr == 23&&min == 59&& sec == 59){
        hourCheck();
    }

    if (min == 0){
        drawMin(minute());
        min = minute();
    }
    if(min < minute() && min!=0){
        drawMin(1);
        min = minute();
    }
    if(min == 59&& sec == 59){
       minCheck();
    }

    if (sec == 0){
        drawSec(second());
        sec = second();
    }
    if(sec < second() && sec!=0 && sec!=59){
        drawSec(1);
        sec = second();
    }
  if(sec == 59){
    drawSec(1);
    let hrs = hour();
    let mins = minute();
    let secs = second();

    textSize(32);
    fill(15, 18, 214);
    text(hrs, 10, 30);
    fill(255, 3, 19, 140);
    text(mins, 10, 60);
    fill(3, 255, 45);
    text(secs, 10, 90);
    secCheck();
  } 
}

let hourx = 0;
function drawHour(hr){
    let i = 0; 
    while(i<=hr){
        line(hourx,0,hourx,600);
        //line(0,hourx,600,hourx);
        stroke(15, 18, 214);
        strokeWeight(1);
        hourx = hourx+24;
        //radi = random(105,220);
        //noStroke();
        //fill(15, 18, 214,120);
        //ellipse(random(20,500), random(10,580),radi, radi);
        i = i+1;
}
}


function drawMin(min){
    let i = 0; 
    while(i<min){
        //console.log(minute());
        radi = random(60,90);
        noStroke();
        fill(255, 3, 19, 140);
        ellipse(random(10,580), random(10,580),radi, radi);
        i = i+1;
    }
}


function drawSec(sec){
    let i = 0; 
    while(i<sec){
        //console.log(minute());
        radi = random(10,40);
        deg = random(0,360);
        noStroke();
        fill(3, 255, 45, 180);
        ellipse(random(100,580), random(5,590),radi, radi);
        i = i+1;
    }
}

//function drawSecFoot(){}

function hourCheck(){
    background(0,0,0);
    sec = 0;
    min = 0;
    hr = 0;
    redraw(); 
}

function minCheck(){
    background(0,0,0);
    sec = 0;
    min = 0;
    hr = 0;
    redraw(); 
}

function secCheck(){
    background(0,0,0);
    sec = 0;
    min = 0;
    hr = 0;
    hourx = 0;
    redraw(); 
}

