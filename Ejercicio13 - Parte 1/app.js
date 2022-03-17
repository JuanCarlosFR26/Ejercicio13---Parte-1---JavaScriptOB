const div = document.querySelector('div');
const btn = document.querySelector('button');

div.addEventListener('mouseenter', () => {
    div.style.backgroundColor = "white";
})

div.addEventListener('mouseleave', ()=> {
    div.style.backgroundColor = randomColor();
})

btn.addEventListener('click', setWhite);


function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setWhite() {
    div.style.backgroundColor = 'white';
}