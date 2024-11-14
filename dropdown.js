// Seleciona todos os elementos que têm a classe "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Itera por cada dropdown encontrado na página
dropdowns.forEach(dropdown => {
    // Para cada dropdown, seleciona o botão principal e os elementos necessários
    const select = dropdown.querySelector('.select'); // O botão que abre o menu
    const caret = dropdown.querySelector('.caret');   // O ícone de seta para baixo
    const menu = dropdown.querySelector('ul');        // O menu com as opções (lista)

    // Verifica se o dropdown tem a classe "passageiros-dropdown"
    if (dropdown.classList.contains('passageiros-dropdown')) {
        // Se for o dropdown de passageiros, adiciona o evento de clique para abrir e fechar o menu
        select.addEventListener('click', () => {
            // Alterna as classes para estilização e abertura do menu
            select.classList.toggle('select-clicked'); // Adiciona uma borda ou efeito visual ao botão
            caret.classList.toggle('caret-rotate');    // Gira o ícone de seta
            menu.classList.toggle('menu-open');        // Exibe ou oculta o menu
        });

        // Seleciona todos os botões de aumentar e diminuir dentro do dropdown
        const buttonsIncrease = dropdown.querySelectorAll('.btn-increase'); // Botões de aumentar
        const buttonsDecrease = dropdown.querySelectorAll('.btn-decrease'); // Botões de diminuir

        // Adiciona eventos de clique para cada botão de aumento
        buttonsIncrease.forEach(button => {
            button.addEventListener('click', () => {
                // Encontra o elemento de contagem diretamente relacionado ao botão
                const countElement = button.parentElement.querySelector('.count'); // Elemento que mostra o número de passageiros
                let count = parseInt(countElement.textContent); // Converte o texto atual para número
                countElement.textContent = count + 1;           // Incrementa o número e atualiza o texto
            });
        });

        // Adiciona eventos de clique para cada botão de diminuição
        buttonsDecrease.forEach(button => {
            button.addEventListener('click', () => {
                // Encontra o elemento de contagem diretamente relacionado ao botão
                const countElement = button.parentElement.querySelector('.count');
                let count = parseInt(countElement.textContent); // Converte o texto atual para número
                if (count > 0) {                                // Garante que o número não seja negativo
                    countElement.textContent = count - 1;       // Decrementa o número e atualiza o texto
                }
            });
        });
    } else {
        // Se não for o dropdown de passageiros, lida com opções de seleção padrão
        const options = menu.querySelectorAll('li');      // Seleciona todas as opções de menu (elementos <li>)
        const selected = dropdown.querySelector('.selected'); // Elemento que mostra a opção selecionada no botão principal

        // Adiciona o evento de clique para abrir/fechar o menu e exibir apenas as opções não selecionadas
        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked'); // Adiciona uma borda ou efeito visual ao botão
            caret.classList.toggle('caret-rotate');    // Gira o ícone de seta

            // Para cada opção de menu, exibe apenas as opções que não foram selecionadas
            options.forEach(option => {
                if (option.innerText === selected.innerText) {
                    option.classList.add('hidden');   // Oculta a opção que já está selecionada
                } else {
                    option.classList.remove('hidden'); // Exibe as opções que não estão selecionadas
                }
            });

            menu.classList.toggle('menu-open'); // Exibe ou oculta o menu
        });

        // Adiciona um evento para cada opção de menu para alterar a seleção
        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText; // Atualiza o texto no botão principal com a opção selecionada

                // Fecha o menu e remove as classes de estilização do botão e da seta
                select.classList.remove('select-clicked'); 
                caret.classList.remove('caret-rotate');    
                menu.classList.remove('menu-open');        
            });
        });
    }
});
