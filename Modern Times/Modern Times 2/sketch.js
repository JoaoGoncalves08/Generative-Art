var sz = 10;
var sp = 5;
var ss;
var n = 10;
var full;
var t = 0;
var inc = 1;

function setup() {
	createCanvas(500, 500);

	ss = sz + sp;
	full = ss*n + sp + sz;

}

function draw() {
	background(0);

	for(var i = 0; i < n; i += 2){
		line1(80, 80 + ss*i, t);
		line2(80, 80 + ss*(i+1), t);
	}


}
