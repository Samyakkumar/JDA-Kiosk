function Rose(img){
	this.x = width;
	this.y = 0;
	this.img = img;
	this.speed = random(0, 4)
	this.show = function(){
		image(this.img, this.x, this.y)
	}
	this.update = function(){
		this.x += this.speed;
	}
}