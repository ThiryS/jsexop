/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        static greeting = 'hi';
        constructor(name){
            this.name = name;
            
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat extends Animal{
    }
    class Dog extends Animal  {   
    }
    document.getElementById("run").addEventListener("click", function() {
        dog1 = new Dog('sim');
        cat1 = new Cat('jerem');
        console.log(dog1.sayHello());
        console.log(cat1.sayHello());
    });
})();
