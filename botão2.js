//alert ("Após comprar a passagem, clique novamente para cancelar!");//
let comprar = 0;

function cancel() {
    const botao = document.querySelector(".button2");

    if (comprar  === 0) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white'; 
        botao.textContent = 'Aprovado'; 
        comprar++;
    } else if (comprar  === 1) {
        botao.style.backgroundColor = 'red'; 
        botao.style.color = 'white';
        botao.textContent = 'Cancelado'; 
        comprar++;
    } else if (comprar  === 2) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white';
        botao.textContent = 'Comprar'; 
        comprar++;
    }else {
    botao.disabled = true; 
    }
}
