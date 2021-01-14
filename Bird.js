class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    Matter.Body.setDensity(this.body,5)
    this.birdTrajectory=[];
  }

  display() {
    super.display();
    var position=[this.body.position.x,this.body.position.y];
    if(this.body.position.x>200 && this.body.velocity.x>10)
    {
    this.birdTrajectory.push(position);
    for(var i=0;i<this.birdTrajectory.length;i++)
    {
    image(this.smokeImage,this.birdTrajectory[i][0],this.birdTrajectory[i][1]);
  }
}
}
}
