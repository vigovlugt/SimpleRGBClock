let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    window.onresize = () => {

    };
}

function draw() {
    background(30, 30, 35);

    let h = hour();
    let m = minute();
    let s = second();
    let secAngle = map(s, 0, 60, 0, PI * 2);
    let minAngle = map(m, 0, 60, 0, PI * 2);
    let hourAngle = map(h % 12, 0, 12, 0, PI * 2);
    
    translate(windowWidth / 2, windowHeight / 2)
    rotate(PI * 1.5);
    strokeWeight(8);
    noFill();
    stroke(255, 0, 0);
    arc(0,0, 300, 300, 0, secAngle);
    stroke(0, 255, 0);
    arc(0,0, 280, 280, 0, minAngle);
    stroke(0, 0, 255);
    arc(0,0, 260, 260, 0, hourAngle);
}