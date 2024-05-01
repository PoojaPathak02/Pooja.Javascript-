// Question 3: Accessing Parent Class Methods
// Consider the following code:
    
        class Vehicle {
        constructor(make, model) {
            this.make = make;
            this.model = model;
        }
        getInfo() {
            return `Make: ${this.make}, Model: ${this.model}`;
        }
    }
    
    class Car extends Vehicle {
        constructor(make, model, year) {
            super(make, model);
            this.year = year;
        }
        getInfo() {
            return `${super.getInfo()}, Year: ${this.year}`;
        }
    }
    
    let myCar = new Car('Toyota', 'Camry', 2020);
    console.log(myCar.getInfo());
    
/* Explanation:
-First we made Vehical class then use constructor and pass (make,model) as a parameter.
-Then we make a method named as getInfo() which returns the value of parameter(make,model).
-Then make another class named as Car in which we use extends keyword to allow properties
 of Vehicle class (parent class) then use constructor and pass (make,model,year) as a parameter and also 
 use super keyword to use properties of parent class.
 -Then we make a method named as getInfo() which returns the value of the fuction(super) and parameter(year).
 -Then make a variable named as (mycar) in which we call class with the help of new Car
  and gives ('Toyota','camry',2020) as argument.
  -Then we consoled (mycar).
-Output:
 Make:Toyota, Model:Camry, Year:2020
    */

     