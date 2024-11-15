// Seleciona todos os elementos com a classe "dropdown" (que representa os dropdowns na página)
const dropdowns = document.querySelectorAll('.dropdown');

// Itera por cada dropdown encontrado na página
dropdowns.forEach(dropdown => {

    // Seleciona os elementos internos dentro de cada dropdown
    const select = dropdown.querySelector('.select');  // O contêiner que exibe a opção selecionada
    const caret = dropdown.querySelector('.caret');    // A seta indicadora (geralmente para expandir/colapsar o menu)
    const menu = dropdown.querySelector('ul');         // O menu suspenso (a lista de opções)

    // Verifica se o dropdown é do tipo "passageiros-dropdown"
    if (dropdown.classList.contains('passageiros-dropdown')) {

        // Evento de clique na área de seleção do dropdown (mostra/esconde o menu)
        select.addEventListener('click', () => {
            // Alterna as classes para abrir/fechar o menu e girar a seta
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });

        // Seleciona os botões de aumento e diminuição dentro do dropdown
        const buttonsIncrease = dropdown.querySelectorAll('.btn-increase');
        const buttonsDecrease = dropdown.querySelectorAll('.btn-decrease');

        // Evento de clique nos botões de aumento (para adicionar passageiros)
        buttonsIncrease.forEach(button => {
            button.addEventListener('click', () => {
                const countElement = button.parentElement.querySelector('.count'); // Seleciona o elemento de contagem
                let count = parseInt(countElement.textContent);  // Converte o texto da contagem para número

                // Verifica se o total de passageiros não ultrapassa 9
                if (calcularTotalPassageiros() < 9) {
                    countElement.textContent = count + 1;  // Incrementa a contagem de passageiros
                    updatePassengerSummary(); // Atualiza o cabeçalho com a nova contagem de passageiros
                } else {
                    alert('O número máximo de passageiros é 9!'); // Exibe um alerta caso o limite seja atingido
                }
            });
        });

        // Evento de clique nos botões de diminuição (para subtrair passageiros)
        buttonsDecrease.forEach(button => {
            button.addEventListener('click', () => {
                const countElement = button.parentElement.querySelector('.count'); // Seleciona o elemento de contagem
                let count = parseInt(countElement.textContent);  // Converte o texto da contagem para número
                if (count > 0) { // Verifica se o número de passageiros é maior que 0
                    countElement.textContent = count - 1; // Decrementa a contagem de passageiros
                    updatePassengerSummary(); // Atualiza o cabeçalho com a nova contagem de passageiros
                }
            });
        });
    } else {

        // Para os dropdowns que não são de passageiros, lidamos com o comportamento do menu
        const options = menu.querySelectorAll('li'); // Seleciona todas as opções do menu
        const selected = dropdown.querySelector('.selected'); // A opção selecionada (exibida no dropdown)

        // Evento de clique na área de seleção do dropdown (para abrir/fechar o menu de opções)
        select.addEventListener('click', () => {
            // Alterna as classes para abrir/fechar o menu e girar a seta
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');

            // Mostra/oculta as opções do menu dependendo da opção selecionada
            options.forEach(option => {
                if (option.innerText === selected.innerText) {
                    option.classList.add('hidden');  // Oculta a opção já selecionada
                } else {
                    option.classList.remove('hidden');  // Mostra as opções restantes
                }
            });

            menu.classList.toggle('menu-open'); // Alterna a visibilidade do menu
        });

        // Evento de clique em cada opção do menu
        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;  // Define a opção clicada como a selecionada
                select.classList.remove('select-clicked'); // Fecha o menu após a seleção
                caret.classList.remove('caret-rotate'); // Remove a rotação da seta
                menu.classList.remove('menu-open'); // Fecha o menu
            });
        });
    }
});

// Função para calcular o total de passageiros
function calcularTotalPassageiros() {
    // Obtém a contagem de cada tipo de passageiro e soma todos os valores
    const adultCount = parseInt(document.querySelector('.count[data-type="adult"]').textContent);
    const adolescentCount = parseInt(document.querySelector('.count[data-type="adolescent"]').textContent);
    const childCount = parseInt(document.querySelector('.count[data-type="child"]').textContent);
    const babyCount = parseInt(document.querySelector('.count[data-type="baby"]').textContent);
    
    return adultCount + adolescentCount + childCount + babyCount; // Retorna o total de passageiros
}

// Função para atualizar o cabeçalho "Passageiros" com a contagem total
function updatePassengerSummary() {
    // Obtém o número de passageiros de cada tipo
    const adultCount = parseInt(document.querySelector('.count[data-type="adult"]').textContent);
    const adolescentCount = parseInt(document.querySelector('.count[data-type="adolescent"]').textContent); 
    const childCount = parseInt(document.querySelector('.count[data-type="child"]').textContent);
    const babyCount = parseInt(document.querySelector('.count[data-type="baby"]').textContent);

    // Calcula o total de passageiros
    const totalPassengers = adultCount + adolescentCount + childCount + babyCount;
    // Cria um texto com a descrição de quantos passageiros de cada tipo foram selecionados
    const summaryText = `${adultCount} Adulto(s), ${adolescentCount} Adolescente(s), ${childCount} Criança(s), ${babyCount} Bebê(s)`;

    // Atualiza o texto exibido no botão "Passageiros" com a contagem total de passageiros
    document.querySelector('.passageiros-dropdown .selected').textContent = summaryText;
}
