/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  var i = 0;
  let txt = document.getElementById("target").innerHTML;
  document.getElementById("target").innerHTML = '';
  typeWriter();

  function typeWriter() {
    if (i < txt.length) {
      var speed = Math.floor(Math.random() * 100) + 1;
      document.getElementById("target").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
})();
