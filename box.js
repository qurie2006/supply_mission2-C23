class box{
    constructor(x, y, width, height){
      var options = {
          'isStatic' : true,
            'restitution' : 0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
       rectMode(CENTER);
        var pos  = this.body.position;
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
}