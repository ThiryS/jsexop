/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var e = document.getElementById("source");
    console.log(e);
    let str = e.dataset;
    str = str.image;
    console.log(str);
    var img = document.createElement("img"); 
    img.src = str;
    document.getElementById('target').appendChild(img); 
    
    console.log(img);

})();
