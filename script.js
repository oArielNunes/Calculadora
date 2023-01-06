function criaCal() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.pressionaB();
            this.pressionaE();
            this.cliqueBts();
            alert('Bem-vindo! Confira outros projetos em:');
        },
        pressionaB() {
            display.addEventListener('keydown', e => {
                if (e.keycode === 8) {
                    e.preventDefault();
                    this.clearD();
                }
            });
        },
        pressionaE() {
            display.addEventListener('keypress', e => {
                if (e.keycode === 13) {
                    this.conta();
                }
            });
        },

        conta() {
            let conta = display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }
                display.value = String(conta);
            } catch (e) {
                alert('Conta inválida!');
                return;
            }
        },

        clearD() {
            display.value = '';
        },
        del() {
            display.value = display.value.slice(0, -1);
        },

        cliqueBts() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('num')) {
                    this.btTD(el.innerText);
                }
                if (el.classList.contains('clear')) {
                    this.clearD();
                }
                if (el.classList.contains('del')) {
                    this.del();
                }
                if (el.classList.contains('equal')) {
                    this.conta();
                }
            });
        },

        btTD(valor) {
            display.value += valor;
        }

    };
}

const calculadora = criaCal();
calculadora.inicia();
