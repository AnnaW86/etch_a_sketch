const container = document.querySelector('#container');
const reset = document.querySelector('#reset');
let cell //= document.getElementsByClassName("cell");
let target;


function makeCell(numCell) {
    for (let i=0; i<numCell; i++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}
function makeGrid(numRow, numCol) {
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    for (let j=0; j<numRow; j++) {
        makeCell(numCol);
    }
}


function changeColor(target) {
    target.style.backgroundColor = 'red';
}
container.addEventListener("mouseover", function(e){
    target = e.target;
    
    if (target.matches("div.cell")) {
        changeColor(target);
    }
    
})


reset.addEventListener('click', function() {
window.location.reload();
})

function userGrid() {
    rowNum = prompt("How big a grid would you like? Choose anything from 5 to 50:", "25");
        if (rowNum>=5 && rowNum<=50 /*&& Number.isInteger(rowNum)*/) {
            makeGrid(rowNum, rowNum);
        }
        else {
            do {
                rowNum = prompt('Try again, this time choose a whole number between 5 and 50.');
            }
            while (rowNum<5 || rowNum>50 || Number.isInteger(rowNum));
            makeGrid(rowNum, rowNum);
        }
}
userGrid();
