/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    function tableCreate(){
        var tbl  = document.createElement('table');
        tbl.style.width  = '100px';
        tbl.style.border = '1px solid black';
    
        for(var i = 0; i < 10; i++){
            var tr = tbl.insertRow();
            for(var j = 0; j < 1; j++){
                if(i == 2 && j == 1){
                    break;
                } else {
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode('Cell'));
                    td.style.border = '1px solid black';
                    if(i == 1 && j == 1){
                        td.setAttribute('rowSpan', '1');
                    }
                }
            }
        }
        document.getElementById('target').appendChild(tbl);
    }
    tableCreate();

    

})();
