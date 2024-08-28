
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome.value !== '' && altura !== '' && peso !== '' ) {

const valorimc = (peso / (altura * altura  )).toFixed(2);
    
let classificacao = "";
if (valorimc < 18.50 ){
classificacao = 'abaixo do peso.';}
else if (valorimc < 25) {
classificacao = 'com peso ideal'; 
}else if (valorimc < 30){
     classificacao = 'levemente acima do peso';
}else if (valorimc < 35 ){
    classificacao = 'com obesidade grau I'
}else if (valorimc < 40 ){
    classificacao = 'com obesidade grau II'
}else { classificacao = 'obesidade grau III'}




resultado.textContent = `${nome} seu IMC é ${valorimc} e você esta ${classificacao}`; 

     }else { 
    resultado.textContent = 'preencha todos os campos!!!'

    }

}

calcular.addEventListener('click', imc);