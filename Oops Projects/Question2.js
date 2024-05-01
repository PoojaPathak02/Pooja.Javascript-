// Question 2: Multiple Levels of Inheritance**
// Given the following code:
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

class ColoredCircle extends Circle {
    constructor(color, radius) {
        super(color, radius);
    }
}

let coloredCircle = new ColoredCircle('blue', 5);
console.log(coloredCircle.getColor());

/* Explanation:
-First we made Shape class then use constructor and pass (color) as a parameter.
-Then we make a method named as getColor() which returns the value of parameter(color).
-Then make another class named as Circle in which we use extends keyword to allow properties
 of Shape class (parent class) then use constructor and pass (color,radius) as a parameter and also 
 use super keyword to use properties of parent class.
 -Then make another class named as ColoredCircle in which we use extends keyword to allow properties
 of Circle class (parent class) then use constructor and pass (color,radius) as a parameter and also 
 use super keyword to use properties of parent class.
 -Then make a variable named as (coloredCircle) in which we call class with the help of new ColoredCircle
  and gives ('Blue',5) as argument.
  -Then we consoled.
-Output:
blue
 
 */