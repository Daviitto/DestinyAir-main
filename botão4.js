//alert ("Após comprar a passagem, clique novamente para cancelar!");//
let clic = 0;

function button4() {
    const botao = document.querySelector(".button4");

    if (clic === 0) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white'; 
        botao.textContent = 'Aprovado'; 
        clic++;
    } else if (clic === 1) {
        botao.style.backgroundColor = 'red'; 
        botao.style.color = 'white';
        botao.textContent = 'Cancelado'; 
        clic++;
    } else if (clic === 2) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white';
        botao.textContent = 'Comprar'; 
        clic++;
    }else {
    botao.disabled = true; 
    }
}