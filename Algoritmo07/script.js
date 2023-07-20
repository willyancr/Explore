
let options
let items = []

while(options != 3){ // controle de fluxo, executa repetidamente enquando uma condição específica for verdadeira

    options = Number(prompt(`Olá usuário! Digite a número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
    `))

    switch(options){

        case 1:
            let item = prompt('Cadastre um item:')
            items.push(item)
            break
        case 2:
            if(items == 0){
                alert('Nenhum item cadastrado')
            }else{

                alert(items)
            }
            break
        case 3:
            alert('Você saiu do programa')
            break
        default:
            alert('Opção invalida')
    }

}