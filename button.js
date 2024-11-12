// Seleciona todos os elementos com a classe '.dropdown', retornando uma lista de dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

// Para cada dropdown (cada lista suspensa) encontrada, executa uma função
dropdowns.forEach(dropdown => {
    // Seleciona o botão '.select' dentro de cada dropdown, que será o botão de interação
    const select = dropdown.querySelector('.select');

    // Seleciona a seta (caret) que será rotacionada ao abrir o menu
    const caret = dropdown.querySelector('.caret');

    // Seleciona o menu (ul) onde as opções estão localizadas
    const menu = dropdown.querySelector('.menu');

    // Seleciona todas as opções de lista dentro do menu (li)
    const options = menu.querySelectorAll('li');

    // Seleciona o elemento '.selected', onde será mostrado o item selecionado
    const selected = dropdown.querySelector('.selected');

    // Adiciona um ouvinte de evento para o clique no botão '.select'
    select.addEventListener('click', () => {
        // Alterna a classe 'select-clicked', alterando o estilo do botão quando ele é clicado
        select.classList.toggle('select-clicked');

        // Alterna a rotação da seta, fazendo-a girar para cima ou para baixo
        caret.classList.toggle('caret-rotate');

        // Alterna a visibilidade do menu (abre ou fecha) usando a classe 'menu-open'
        menu.classList.toggle('menu-open');
    });

    // Para cada item de opção dentro do menu (cada 'li'), adiciona um ouvinte de clique
    options.forEach(option => {
        // Quando uma opção é clicada
        option.addEventListener('click', () => {
            // Atualiza o texto do botão '.select' para refletir a opção selecionada
            selected.innerText = option.innerText;

            // Remove a classe 'hidden' de todas as opções, tornando-as visíveis novamente
            options.forEach(opt => opt.classList.remove('hidden'));

            // Adiciona a classe 'hidden' ao item selecionado, escondendo-o do menu
            option.classList.add('hidden');

            // Fecha o menu, removendo as classes que indicam que ele está aberto
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        });
    });
});