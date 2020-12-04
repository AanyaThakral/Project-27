class Bob{
    constructor(x , y ){
         var options ={
            isStatic : false,
            restitution : 1.0,
            friction : 0,
            density : 0.8
         };
        this.body = Bodies.circle(x , y , 25 , options);
        this.radius = 25;
        World.add(world , this.body);
    }
    display(){

     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x , pos.y);
     rotate(angle);
     strokeWeight(4);
     fill("red");
     ellipseMode(RADIUS);
     ellipse(0 , 0 ,this.radius); 
     pop(); 
     
    }
}

  
