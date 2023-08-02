
//### PROGRAMA LADOS DE UM TRIÂNGULO ###
 
const sideA = Number(prompt('Lado A:'))
const sideB = Number(prompt('Lado B:'))
const sideC = Number(prompt('Lado C:'))

const som1 = sideA + sideB
const som2 = sideA + sideC 
const som3 = sideB + sideC

if(sideA > som3 || sideB > som2 || sideC > som1){
    alert(`Não pode formar um triangulo`)
}
else if(sideA == sideB && sideA == sideC){
    alert(`Tipo: Equilátero (3 lados iguais)`)
}
else if(sideA == sideB || sideA == sideC || sideB == sideC){
    alert(`Tipo: Isósceles (2 lados iguais)`)
}
else if(sideA != sideB && sideA != sideC){
    alert(`Tipo: Escaleno (3 lados diferentes)`)
}
