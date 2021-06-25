class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    super.display();
    if (this.body.velocity.X>10&&this.body.position.X>200){
    
    var position=[this.body.position.x,this.body.position.y];
    this.trejectory.push(position)
    }
      for(var i=0;i<this.trejectory.length;i=i+1){
        image(this.smokeImage,this.trejectory[i][0],this.trejectory[i][1]);
      }
    
  }
}
