/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var e = document.getElementsByTagName("img");
    let theimage = e[0]
    console.log(e);
    var hov = theimage.dataset.hover;
    var lef = theimage.src;
    console.log(hov);
    theimage.addEventListener('mouseover', function() {
        this.src = hov;
      });
      theimage.addEventListener('mouseleave', function() {
        this.src = lef;
      });

})();
