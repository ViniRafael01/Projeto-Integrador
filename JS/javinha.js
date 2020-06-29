const formularios = document.getElementById('formularios')
const produtos = document.getElementById('produtos')
const quantidades = document.getElementById('quantidades')
const endereços = document.getElementById('endereços')
const numeros = document.getElementById('numeros')
const pagamentos = document.getElementById('pagamentos')
const encomendas = document.getElementById('encomendas')
const respostas = document.getElementById('respostas')

let produto = []
let pagamento = []

carregarProduto()
carregarPagamentos()

formulario.onsubmit = event => {
    event.preventDefault()

    if (!validarProdutos() | !validarQuantidades() | !validarEndereços() | !validarNumeros() |
        !validarPagamentos() | !validarEncomendas()) return

    const jeito = {
        produtos: produtos.value,
        quantidades: quantidades.value.trim(),
        endereços: endereços.value.trim(),
        numeros: numeros.value.trim(),
        pagamentos: pagamentos.value
    }

    produto.push(jeito)
    localStorage.setItem('venda', JSON.stringify(produto))

    produtos.value = ''
    quantidades.value = ''
    endereços.value = ''
    numeros.value = ''
    pagamentos.value = ''

    exibirProduto()
}
function carregarProduto() {
    produto = [
        { codigo: '1', texto: 'Galão de água 20 litros -BONAFONT' },
        { codigo: '2', texto: 'Galão de água 20 litros - MINAURA' },
        { codigo: '3', texto: 'Galão de água 10 litros - MINAURA' },
        { codigo: '4', texto: 'Galão de água 10 litros - BONAFONT' },
        { codiga: '6', texto: 'Dilute - Frutas Vermelhas' },
        { codigo: '7', texto: 'Dilute - Limão Siciliano' },
        { codigo: '8', texto: 'Dilute - Morango' },
        { codigo: '9', texto: 'Dilute - Tangerina' },
        { codigo: '10', texto: 'Dilute - Maça Verde' },
        { codigo: '11', texto: 'Dilute - Gengibre' },
        { codigo: '12', texto: 'Dilute - Guaraná' },
        { codigo: '13', texto: 'Dilute - Uva' },
        { codigo: '15', texto: 'Dilute - Melancia' },
        { codigo: '5', texto: 'Botijão de gás' },
        { codigo: '14', texto: 'Água com gás - ACQUAMIX' },
    ]

    for (let item of produto) {
        const option = document.createElement('option')
        option.value = item.codigo
        option.textContent = item.texto
        produtos.append(option)
    }

}



formulario.onsubmit = event => {
    event.preventDefault()


    if (!validarProdutos() | !validarQuantidades() | !validarEndereços() | !validarNumeros() |
        !validarPagamento() | !validarEncomendas()) return

    const caminho = {
        produtos: produtos.value,
        quantidades: quantidades.value.trim(),
        endereços: endereços.value.trim(),
        numeros: numeros.value.trim(),
        pagamentos: pagamentos.value
    }

    pagamento.push(caminho)
    localStorage.setItem('hehe', JSON.stringify(pagamento))

    produtos.value = ''
    quantidades.value = ''
    endereços.value = ''
    numeros.value = ''
    pagamentos.value = ''

    exibirPagamentos()
}
function carregarPagamentos() {
    pagamento = [
        { codigo: '1', texto: 'Pagamento a vista' },
        { codigo: '2', texto: 'Pagamento com o cartão' }
    ]

    for (let item of pagamento) {
        const option = document.createElement('option')
        option.value = item.codigo
        option.textContent = item.texto
        pagamentos.append(option)
    }

}

function carregarProdutos() {
    registros = JSON.parse(localStorage.getItem('venda')) || []
    exibirProduto()
}

function validarProdutos() {
    produtos.value = produtos.value.trim()

    if (!produtos.value) {
        respostas.textContent = 'O campo é obrigatório'
        respostas.className = 'error'
        produtos.classList.add('error')
        produtos.focus()
        return false
    }
    produtos.classList.remove('error')
    return true

}



function validarQuantidades() {
    quantidades.value = quantidades.value.trim()

    if (!quantidades.value) {
        respostas.textContent = 'Campo é obrigatório!'
        respostas.className = 'error'
        quantidades.classList.add('error')
        quantidades.focus()
        return false
    }
    quantidades.classList.remove('error')
    return true
}