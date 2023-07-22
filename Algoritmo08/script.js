
const patients = [

    {
        name: 'João',
        age: 11,
        weight: 34,
        height: 141,
    },
    {
        name: 'Marina',
        age: 8,
        weight: 40,
        height: 145,
    },
    {
        name: 'Sophia',
        age: 14,
        weight: 55,
        height: 160,
    }

]


function calcIMC(peso, altura){ //função calcular o IMC

    return (peso / ((altura/100) ** 2)).toFixed(2)
    
}

function printIMCpatients(patient){ // função para imprimir os dados dos paciente
    return `Paciente ${patient.name} possui o IMC de: ${calcIMC(patient.weight, patient.height)}`
}

for(let patient of patients){ //uma estrutura de repetição para pegar todos os dados do vetor

    alert (printIMCpatients(patient))
}

