let botao = document.querySelector("#botao");
botao.addEventListener("click", function(event){
    event.preventDefault();
    
    // Adiciona o formulário
    let form = document.querySelector("#form")
    // Valida paciente
    let pacienteValido = validaPaciente(form);
    // Calcula IMC se paciente for válido
    imc = calculaImc(form, pacienteValido);
    // Analisa dados
    dados = analisaImc(imc, pacienteValido);
    // Escreve na tela
    setResultado(dados, imc);


})
function validaPaciente(form){
    let peso = Number(form.peso.value);
    let altura = Number(form.altura.value);
    if (peso >0 && peso < 500 && altura > 0 && altura < 3){
        return true
    }else{
        return false
    }
}
function calculaImc(form, pacienteValido){
    if (pacienteValido){
        let peso = Number(form.peso.value);
        let altura = Number(form.altura.value);
        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }
}

function analisaImc(imc, pacienteValido){
    /*
    < 18,5 -> Abaixo do peso
    18,5 - 24,9 -> Peso normal
    25 - 29,9 -> sobrepeso
    30 - 34,9 -> obesidade grau 1
    35 - 39,9 -> obesidade grau 2
    > 40 -> obesidade grau 3
    */
   if (pacienteValido){
       if (imc < 18.5){
           return `Seu IMC vale ${imc} (Abaixo do peso).`
       }else if (imc >= 18.5 && imc <= 24.99){
            return `Seu IMC vale ${imc} (Peso normal).`
       }else if (imc >= 25 && imc <= 29.9){
           return `Seu IMC vale ${imc} (Sobrepeso).`
       }else if(imc >=30 && imc <= 34.9){
           return `Seu IMC vale ${imc} (Obesidade grau 1).`
       }else if(imc >=35 && imc <= 39.9){
           return `Seu IMC vale ${imc} (Obesidade grau 2).`
       }else if(imc >=40){
           return `Seu imc vale ${imc} (Obesidade grau 3).`
       }
       }else{
           return `Dados inválidos!`
       }
   }

function setResultado(dados, imc){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `<p>${dados}</p>`;
}
