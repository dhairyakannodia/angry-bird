class SlingShot{
    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    reattach(body)
        {
          this.sling.bodyA=body;
        }
    

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        push();
        if(pointA.x<200)
        {
            strokeWeight(7);
            stroke(48, 22, 8);
            line(pointA.x-25, pointA.y+5, pointB.x-10, pointB.y);
            line(pointA.x-25, pointA.y+5, pointB.x+25, pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10)
        }
           else
           {
            strokeWeight(3);
            stroke(48, 22, 8);
            line(pointA.x+25, pointA.y+5, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y+5, pointB.x+25, pointB.y);
            image(this.sling3,pointA.x+25,pointA.y-10)
           }

            pop();
        }
    }
    
}