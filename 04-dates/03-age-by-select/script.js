/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    
    document.getElementById("run").addEventListener("click", function() {
        var bd = new Date((Number(document.getElementById("dob-year").value)), (document.getElementById("dob-month").value), (Number(document.getElementById("dob-day").value)));
        alert(calculate_age(bd));
        
        function calculate_age(dob) { 
            var diff_ms = Date.now() - dob.getTime();
            var age_dt = new Date(diff_ms); 
          
            return Math.abs(age_dt.getUTCFullYear() - 1970);
        }
    });

})();
