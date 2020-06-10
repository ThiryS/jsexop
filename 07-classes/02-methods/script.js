/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        sayHello(){
            let str = 'hello ' + this.firstname + ' ' + this.lastname;
            return str;
        }
    }
    document.getElementById("run").addEventListener("click", function() {
        person1 = new Person ('sim', 'thiry');
        person2 = new Person('jerem', 'thiry');
        console.log(person1.sayHello());
        console.log(person2.sayHello());
     });
})();
