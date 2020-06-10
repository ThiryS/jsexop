/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function tableCreate(row, col){
        var tbl  = document.createElement('table');
        tbl.style.width  = '100px';
        tbl.style.border = '1px solid black';
    
        for(var i = 0; i < row; i++){
            var tr = tbl.insertRow();
            for(var j = 0; j < col; j++){
                if(i == 10   && j == 1){
                    break;
                } else {
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode((i+1) * (j+1)));
                    td.style.border = '1px solid black';
                    if(i == 1 && j == 1){
                        td.setAttribute('rowSpan', '1');
                    }
                }
            }
        }
        document.getElementById('target').appendChild(tbl);
    }
    tableCreate(10,10);

})();
