/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = Math.floor(Math.random() * 100) + 1;
    let find = false;
    for (var i = 0; find === false; i++) {
        const aNumber = Number(window.prompt("Guess the number (between 1 and 100): ", ""));
        if(aNumber === target){
            find = true;
        }else if (target > aNumber) {
                alert('Higher');
        } else if (target < aNumber){
            alert('Lower');
        }
    }

    alert(`That s it! The number was ${target}, you needed ${i} guesses`);

})();
