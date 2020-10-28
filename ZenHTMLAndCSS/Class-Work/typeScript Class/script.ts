class Circle{
    radius:number;
    color:String;

    

    constructor(radius:number, color:String){
        this.radius = radius;
        this.color = color;
    }

     getRadius() :number{
        return this.radius;
    }

    setRadius(radius:number) :void{
         this.radius = radius;
    }

    getColor() :String{
        return this.color;
    }

    setColor(color:String) :void{
         this.color = color;
    }

    // toString():String{

    // }

    getArea():number{
        return (Math.PI*(this.radius)*(this.radius));
    }

    getCircumference():number{
        return (2*Math.PI*(this.radius));
    }
}

let cir = new Circle(2,'red');
let area = cir.getArea();
console.log('area is: '+ area);
let circumference = cir.getCircumference();
console.log('circumference is: '+ circumference);