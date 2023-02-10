// Programa conversor de Medidas

const valorMetros = parseFloat(prompt("Digite um valor para ser convertido em Metros:"))
const unidadeMedida = prompt("Escolha a opção de unidade há ser convertido:\n\nmilímetro(mm)\ncentímetro(cm)\ndecímetro(dm)\ndecâmetro(dam)\nhectômetro(hm)\nquilômetro(km)")
let resultado = 0

switch (unidadeMedida) {
    case 'mm':
        resultado = valorMetros * 1000
        alert("Resultado: " + resultado + " milímetros")
        break
    case 'cm':
        resultado = valorMetros * 100
        alert("Resultado: " + resultado + " centímetros")
        break
    case 'dm':
        resultado = valorMetros * 10
        alert("Resultado: " + resultado + " decímetros")
        break
    case 'dam':
        resultado = valorMetros / 10
        alert("Resultado: " + resultado + " decâmetros")
        break
    case 'hm':
        resultado = valorMetros / 100
        alert("Resultado: " + resultado + " hectômetros")
        break
    case 'km':
        resultado = valorMetros / 1000
        alert("Resultado: " + resultado + " quilômetros")
        break
    default:
        alert("Opção Inválida!")
}