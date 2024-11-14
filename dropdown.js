const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('ul');

    // Verifica se o dropdown é o de passageiros
    if (dropdown.classList.contains('passageiros-dropdown')) {
        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });

        // Lógica para os botões de ajuste de número de passageiros
        const buttonsIncrease = dropdown.querySelectorAll('.btn-increase');
        const buttonsDecrease = dropdown.querySelectorAll('.btn-decrease');

        buttonsIncrease.forEach(button => {
            button.addEventListener('click', () => {
                // Seleciona o elemento .count diretamente após o botão de aumento
                const countElement = button.parentElement.querySelector('.count');
                let count = parseInt(countElement.textContent);
                countElement.textContent = count + 1;
            });
        });

        buttonsDecrease.forEach(button => {
            button.addEventListener('click', () => {
                // Seleciona o elemento .count diretamente antes do botão de diminuição
                const countElement = button.parentElement.querySelector('.count');
                let count = parseInt(countElement.textContent);
                if (count > 0) {
                    countElement.textContent = count - 1;
                }
            });
        });
    } else {
        // Lógica para os outros dropdowns que requerem alteração de texto
        const options = menu.querySelectorAll('li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                options.forEach(opt => opt.classList.remove('hidden'));
                option.classList.add('hidden');
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
            });
        });
    }
});