/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
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
        getterName(){
            let str = this.firstname + ' ' + this.lastname;
            return str;
        }
        setterName(str){
            var yes = str.split(' ');
            this.firstname = yes[0];
            this.lastname = yes[1];
        }
    }

    document.getElementById("run").addEventListener("click", function() {
        person1 = new Person('Simon', 'Thiry');
        console.log(person1.getterName());
        let str = 'Jeremy Thiry';
        person1.setterName(str);
        console.log(person1.getterName());
    });
})();
