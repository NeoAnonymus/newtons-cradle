class Chain{
    constructor(bodyA,bodyB,offsetX) {
        
        this.offsetX = offsetX
        //this.offsetY = offsetY

        var options = {
           bodyA:bodyA,
           bodyB:bodyB,
           PointB:{x:this.offsetX,y:0},
          stiffness:1,
           length:550
        }
       this.chain = Constraint.create(options)
       World.add(world,this.chain)
      }
      display(){
       var pointA = this.chain.bodyA.position
       var pointB = this.chain.bodyB.position

       strokeWeight(4)
       line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y)
      }
}