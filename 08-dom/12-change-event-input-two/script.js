/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var patt = new RegExp(/^(?=(.*\d){2}).{8,}$/);

    
    document.getElementById("pass-one").addEventListener('input', doThing);

    function doThing(e){
        if ( !patt.test(e.target.value) ) {
            document.getElementById("validity").innerHTML = ('Not ok');
                  
        } 
        else {
            document.getElementById("validity").innerHTML = ('Ok');
        }
        
        
     }


})();
