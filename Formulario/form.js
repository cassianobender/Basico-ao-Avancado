function meuEscopo(){
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');
    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value
        })

        console.log(pessoas);

        result.innerHTML += `<p>${nome.value} ${sobrenome.value} ${idade.value} </p>`;
    }
    
    form.addEventListener('submit', recebeEventoForm);
    //console.log('Enviado');
}

meuEscopo();