//alert ("Após comprar a passagem, clique novamente para cancelar!");//
let click = 0;

function passage() {
    const botao = document.querySelector(".button3");

    if (click === 0) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white'; 
        botao.textContent = 'Aprovado'; 
        click++;
    } else if (click === 1) {
        botao.style.backgroundColor = 'red'; 
        botao.style.color = 'white';
        botao.textContent = 'Cancelado'; 
        click++;
    } else if (click === 2) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white';
        botao.textContent = 'Comprar'; 
        click++;
    }else {
    botao.disabled = true; 
    }
}