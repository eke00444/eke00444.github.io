function setup() {
  createCanvas(400, 400);rectMode(CENTER);
}

function draw() {
  //background(220);
	stroke(255,0,0);
	strokeWeight(5);
	line(0,200, 400, 200)
	rect(200,200,110,150);
	noStroke();
	fill(random(0,255),random(0,255),random(0,255));
	ellipse(mouseX,mouseY,100,100);
	fill(100,28,0);
	stroke(255,0,0);
	beginShape();
	vertex(150,200);
	vertex(200,150);
	vertex(300,100);
	vertex(100,300);
	endShape(CLOSE);
	
}