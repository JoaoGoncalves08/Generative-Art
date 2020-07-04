var side = 500;
var s;
var t = 0;
var inc = 1;

function setup() {
	createCanvas(side, side);
	s = side/6;
}

function draw() {
	background(0, 0, 0);
	noFill();

	translate(s, s);

	//top red
	stroke(255, 0, 0);
	rect(0, -t, 2*s, s);

	//top magenta
	stroke(255, 0, 255);
	rect(s - t, 0, 2*s, s);
	
	//blue
	stroke(0, 0, 255);
	rect(2*s + t, 0, s, 2*s);

	//top green
	stroke(0, 255, 0);
	rect(3*s, -t, s, 2*s);

	//left cyan
	stroke(0, 255, 255);
	rect(t, s, s, 2*s);

	//yellow
	stroke(255, 255, 0);
	rect(s, s + t, s, 2*s);

	//white
	stroke(255, 255, 255);
	rect(0, 3*s - t, 2*s, s);

	//bottom red
	stroke(255, 0, 0);
	rect(s - 2*t, 2*s, s, 2*s);

	//right cyan
	stroke(0, 255, 255);
	rect(2*s, 2*s - 2*t, s, 2*s);

	//bottom magenta
	stroke(255, 0, 255);
	rect(3*s, 2*s + t, s, 2*s);

	//bottom green
	stroke(0, 255, 0);
	rect(2*s + t, 3*s, 2*s, s);

	t = t + inc;

	if(t > s){
		inc = inc * -1;
	}

	if(t < 0){
		inc = 0;
	}
}
