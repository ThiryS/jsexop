/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var today = new Date();
    var date = daysInWeek[today.getDay()]+' '+today.getDate()+' '+months[(today.getMonth()+1)]+' '+today.getFullYear();
    var time = today.getHours() + "h" + today.getMinutes();
    var dateTime = date+' '+time;
    

    document.getElementById("target").innerHTML = dateTime;

})();
