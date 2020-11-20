class dustbin {
    constructor(x,y,w,r) {
var posBottom=this.bottomBody.position;
var posLeft=this.leftWallBody.postion;
var posRight=this.rightWallBody.postion;
angleMode(RADIOUS);
fill(255);
stroke(255);
rotate(this.angle);
rect(0,0,this.wallThickness,this.dustbinHeight);
translate (posRight.x , posRight.y);
rectMode(CENTER);
angleMode(RADIOUS);
fill(255);
stroke(255);
    }
}