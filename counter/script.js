let decrase = document.querySelector('#decrase');
let reset = document.querySelector('#reset');
let incrase = document.querySelector('#incrase');
let contlabel = document.querySelector('#contlabel');

let counter = 0;

incrase.onclick = () => {
    counter++;
    contlabel.textContent = counter;
}

//this is for decrease button
decrase.onclick = () => {
    counter--;
    contlabel.textContent = counter;
}

//this is for reset button
reset.onclick = () => {
    counter = 0;
    contlabel.textContent = counter;
}


