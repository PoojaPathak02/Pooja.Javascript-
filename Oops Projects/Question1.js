// 1.Question 1: Understanding Class Inheritance 
// Consider the following code snippet:
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Buddy');
dog.speak();

/* Explanation:
-First we made Animal class then use constructor and pass (name) as a parameter.
-Make a method named as (speak()) when ever we call speak its inner code gives "(`${this.name} makes a noise.`)"
something as return in console.
-Then we made Dog class in which we use extends keyword to allow properties of animal class (parent class).And 
in this class we don't use constructor but nothing to worry because if we write or don't Javascript call constructor
 itself.
-Then we make a method named as(speak()) when ever we call speak its inner code gives "(`${this.name} barks.`)"
something as return in console.
-Then made a variable with named as(dog) in which we call class with the help of new Dog and gives (Buddy) as argument.
-And call speak like this [dog.speak()].
-Output:
-Buddy barks.
 */