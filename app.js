

// battlefield = [
//     '0111111',
//     '  A  B1',
//     ' 111111',
//     ' 1     ',
//     ' 1C1111',
//     ' 111 D1',
//     '      1'
// ]
// turrets = {'A':[3,2],'B':[1,4],'C':[2,2],'D':[1,3]}
// wave = [30,14,27,21,13,0,15,17,0,18,26]
// tower_defense(battlefield,turrets,wave); #10
// '''
// The aliens that survive are the alien at wave[7] with an ending health of 2
// and the alien at wave[8] with an ending health of 8.'''


// Sets important constants and variables

const container = document.getElementById('container');

function makeDivs(numDivs) {
for (let d = 0; d < numDivs; d++){
    let cells = document.createElement('div');
    container.appendChild(cells)    
    }
    }

makeDivs(4);
