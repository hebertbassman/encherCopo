const coposPequenos = document.querySelectorAll('.copo-pequeno');
const litros = document.getElementById('litros');
const porcentagem = document.getElementById('porcentagem');
const enfeitar = document.getElementById('enfeitar');


coposPequenos.forEach((copo, index) => {
    copo.addEventListener('click', () => {
        if(index === -1) index = 0;
        
        if (coposPequenos[index].classList.contains('cheio') &&
            !coposPequenos[index].nextElementSibling.classList.contains('cheio')) {
            index--;
        }

        coposPequenos.forEach((copo, index2) => {
            if (index2 <= index) {
                copo.classList.add('cheio');
            } else {
                copo.classList.remove('cheio');
            }
        });

        encherCopoGrande();
    })
});

function encherCopoGrande() {
    const coposPequenosCheios = document.querySelectorAll('.copo-pequeno.cheio').length;

    if (coposPequenosCheios === 0) {
        porcentagem.style.visibility = 'hidden';
        porcentagem.style.height = 0;
    } else  {
        porcentagem.style.visibility = 'visible';
        porcentagem.style.height = `${coposPequenosCheios / coposPequenos.length * 330}px`;
        porcentagem.innerText = `${coposPequenosCheios / coposPequenos.length * 100}%`;
    }

    if (coposPequenosCheios === coposPequenos.length) {
        enfeitar.style.visibility = 'hidden';
        enfeitar.style.height = 0;
    } else {
        enfeitar.style.visibility = 'visible';
        litros.innerText = `${250 * coposPequenosCheios / 1000} L`;
    }
}