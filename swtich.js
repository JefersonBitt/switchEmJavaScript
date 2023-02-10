
const resultado = prompt("Escolha uma alternativa: \n1 \n2 \n3")

const resultadoNumerico = parseFloat(resultado)

//Estrutura Condicional do Switch em JS

switch (resultadoNumerico) {
    case 1:
        alert("O resultado é 'A'")
        break
    case 2:
        alert("O resultado é 'B'")
        break
    case 3:
        alert("O resultado é 'C'")
        break
    default:
        alert("Opção não encontrada!")
}