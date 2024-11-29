//alert ("Após comprar a passagem, clique novamente para cancelar!");//
let cli = 0;

function button5() {
    const botao = document.querySelector(".button5");

    if (cli === 0) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white'; 
        botao.textContent = 'Aprovado'; 
        cli++;
    } else if (cli === 1) {
        botao.style.backgroundColor = 'red'; 
        botao.style.color = 'white';
        botao.textContent = 'Cancelado'; 
        cli++;
    } else if (cli === 2) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white';
        botao.textContent = 'Comprar'; 
        cli++;
    }else {
    botao.disabled = true; 
    }
}