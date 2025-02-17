// https://github.com/luizomf/curso-js

/*

console.log('Ola meu nome é "NOME". Estou aprendendo JavaScript as', 10, 'da manha');

let num1 = Number(prompt ("Digite um numero"));
let num2 = Number(prompt ("Digite outro numero"));

let soma = num1 + num2;

alert('O resultado foi ' + soma);


let nome = prompt('Digite seu Nome Completo:');

document.body.innerHTML += `Seu nome Completo é: ${nome} <br />`;
document.body.innerHTML += `Seu nome tem: ${nome.replace(/\s/g,'').length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome: ${nome.charAt(1)} <br />`;
document.body.innerHTML += `Qual o primeiro indice da letra 'A' em seu nome? ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `Qual o ultimo indice da letra 'A' em seu nome? ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome sao: ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As Palavras do seu nome: ${nome.split(' ')} <br />`;
document.body.innerHTML += `Nome Maiusculo: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Nome Minusculo: ${nome.toLowerCase()} <br />`;


let num = Number(prompt('Digite um Numero'));
let numTitulo = document.getElementById('numero');
let texto = document.getElementById('texto');

numTitulo.innerHTML = num;
texto.innerHTML = 
`<p> Raiz Quadrada: ${Math.sqrt(num)} </p> </br> 
<p> ${num} eh inteiro: ${Number.isInteger(num)} </p> 
<p>  ${num} eh Nan: ${Number.isNaN(num)} </p>
<p>Arredondamento para cima: ${Math.ceil(num)} </p>
<p>Arredondamento para baixo: ${Math.floor(num)} </p>
<p>Com duas casas decimais: ${Number(num.toFixed(2))} </p>`

Valores Primitivos e Valores por Referência:

Valores primitivos: string, number, boolean, undefined, null - Valores são copiados (=)
Valores por Referência: array, object, function - Valores são atribuídos ao mesmo local de memória (=)

*/

const pessoa1 = {
    nome: 'Cassiano',
    sobrenome: 'Bender',

    fala(){
        console.log(`Oi ${this.nome}, como vai vc?`)
    }
}

pessoa1.fala();