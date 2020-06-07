/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function lol() {

    var firtname = prompt("First name? : ");
    var lastname = prompt("Last name? : ");
    var age = prompt("Age? : ");

    if ( confirm( "FN : " + firtname + " LN : " + lastname + " Age : " + age + " correct?" ) ) {
        alert("cool");
        return;
    } else {
        lol();
        return;
    }

})();
