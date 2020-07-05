function line1(x, y, t){

	for(var i = 0; i < n; i += 2){
		push();
		stroke(255, 0, 0);
		fill(255, 0, 0);
		translate(x, y - sp - t*i);
		rect(i*ss, 0, 10, ss + sp);
		pop();
	}

	push();
	stroke(0, 0, 255);
	fill(0, 0, 255);
	translate(x - sz, y);
	rect(0, 0, full, 10);
	pop();

	for(var j = 0; j < n; j += 2){
		push();
		stroke(255, 0, 0);
		fill(255, 0, 0);
		translate(x, y - sp - t*j);
		rect((j+1)*ss, 0, 10, ss + sp);
		pop();
	}
}

function line2(x, y, t){

	for(var j = 0; j < n; j += 2){
		push();
		stroke(255, 0, 0);
		fill(255, 0, 0);
		translate(x, y - sp - t*j);
		rect((j+1)*ss, 0, 10, ss + sp);
		pop();
	}

	push();
	stroke(0, 0, 255);
	fill(0, 0, 255);
	translate(x - sz, y);
	rect(0, 0, full, 10);
	pop();

	for(var i = 0; i < n; i += 2){
		push();
		stroke(255, 0, 0);
		fill(255, 0, 0);
		translate(x, y - sp - t*i);
		rect(i*ss, 0, 10, ss + sp);
		pop();
	}
}
