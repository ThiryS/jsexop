/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let average = (array) => array.reduce((a, b) => a + b) / array.length;
        var arr = [];
        var i = 1;
        while(arr.length < 10){
            var r = Math.floor(Math.random() * 100) + 1;
            var str = 'n-';
            str += i;
            if(arr.indexOf(r) === -1) {
                arr.push(r)
                document.getElementById(str).innerHTML = arr[i-1];
                i++;
            }
        }
        document.getElementById('max').innerHTML = Math.max(...arr);
        document.getElementById('min').innerHTML = Math.min(...arr);
        document.getElementById('average').innerHTML = average(arr);
        document.getElementById('sum').innerHTML = arr.reduce(reducer);
        
    });


})();
