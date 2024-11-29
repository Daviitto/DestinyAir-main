//alert ("Após comprar a passagem, clique novamente para cancelar!");//
let cl = 0;

function button6() {
    const botao = document.querySelector(".button6");

    if (cl === 0) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white'; 
        botao.textContent = 'Aprovado'; 
        cl++;
    } else if (cl === 1) {
        botao.style.backgroundColor = 'red'; 
        botao.style.color = 'white';
        botao.textContent = 'Cancelado'; 
        cl++;
    } else if (cl === 2) {
        botao.style.backgroundColor = 'green'; 
        botao.style.color = 'white';
        botao.textContent = 'Comprar'; 
        cl++;
    }else {
    botao.disabled = true; 
    }
}