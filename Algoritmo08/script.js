
const patients = [

    {
        name: 'João',
        age: 11,
        width: 34,
        height: 141,
    },
    {
        name: 'Marina',
        age: 8,
        width: 40,
        height: 145,
    },
    {
        name: 'Sophia',
        age: 14,
        width: 55,
        height: 160,
    }

]
let patientsDados = []

for(let patient of patients){
    patientsDados.push(patient.name)
    patientsDados.push(patient.age)
    patientsDados.push(patient.width)
    patientsDados.push(patient.height)
}

console.log(`Nome: ${patients[0].name}
Idade: ${patients[0].age}
Peso: ${patients[0].width}
Altura: ${patients[0].height}
Nome: ${patients[1].name}
Idade: ${patients[1].age}
Peso: ${patients[1].width}
Altura: ${patients[1].height}
`)