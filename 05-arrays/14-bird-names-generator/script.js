/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", function() {
        let str = '';
        let bi = Math.floor(Math.random() * 12); 
        let adj = Math.floor(Math.random() * 11);
        if(getSetValueByIndex(adjectives, adj) === 'petit' || getSetValueByIndex(adjectives, adj) === 'grand'){
            if (birds[bi].fem === true ) {
                str = 'La ' + getSetValueByIndex(adjectives, adj) + 'e' + ' ' + birds[bi].name;
            } else {
                str = 'Le ' + getSetValueByIndex(adjectives, adj) + ' ' + birds[bi].name;
            }
        } else{
            if (birds[bi].fem === true ) {
                str = 'La ' + birds[bi].name + ' ' + getSetValueByIndex(adjectives, adj) + 'e';
            } else {
                str = 'Le ' + birds[bi].name + ' ' + getSetValueByIndex(adjectives, adj);
            }
        }

        
        document.getElementById('target').innerHTML = str;
    });

    function getSetValueByIndex(setObj, index) {
        return [...setObj][index]
    }
})();
