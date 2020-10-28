var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    // toString():String{
    // }
    Circle.prototype.getArea = function () {
        return (Math.PI * (this.radius) * (this.radius));
    };
    Circle.prototype.getCircumference = function () {
        return (2 * Math.PI * (this.radius));
    };
    return Circle;
}());
var cir = new Circle(2, 'red');
var area = cir.getArea();
console.log('area is: ' + area);
var circumference = cir.getCircumference();
console.log('circumference is: ' + circumference);
