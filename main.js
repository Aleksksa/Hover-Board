const board = document.querySelector('#board');
const SQUARE_NUMBER = 500;
const colors = ['#ED474A', '#48E5C2', '#8332AC', '#FFE66D', '#7DDF64','#FF9F1C'];

for (let i=0; i<SQUARE_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');


    square.addEventListener('mouseover', () => {
        setColor(square);
    })
    square.addEventListener('mouseleave', () =>{
        removeColor(square);
    } )

    board.append(square)
}


function setColor(el) {
    const color = getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

}

function removeColor (el) {
    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = "";
}

function getRandomColor (){
    let index = Math.floor(Math.random()*colors.length);
    return colors[index];
}
