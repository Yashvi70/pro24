class ground{
    constructor(x,y){

        

        this.x = x;
        this.y = y;
        World.add(world,this.body);
    };


display()
{

    var ground = this.body.position;
    
    
    rectMode(CENTER);
    fill(255,0,255);
    

}
};