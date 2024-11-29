//alert ("Após comprar a passagem, clique novamente para cancelar!");//

let clique = 0;

function pass() {
    const botao = document.querySelector(".button1");

    if (clique === 0) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white'; 
        botao.textContent = 'Aprovado'; 
        clique++;
    } else if (clique === 1) {
        botao.style.backgroundColor = 'red'; 
        botao.style.color = 'white';
        botao.textContent = 'Cancelado'; 
        clique++;
    } else if (clique === 2) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white';
        botao.textContent = 'Comprar'; 
        clique++;}
    else {
    botao.disabled = true; 
    }
}

