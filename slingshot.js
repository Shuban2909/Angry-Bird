class slingshot{
    constructor(ob1,ob2){
        var op={
            bodyA:ob1,
            bodyB:ob2,
            length:90,
            stiffness:0.5
         }
         
         //creating the chain varible
         this.chain=Contraint.create(op);
         World.add(world,this.chain);
        
    }
    display(){
        strokeWeight(5);
        //making the line
        line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}