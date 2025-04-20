const btnForm = document.getElementById('botao-form')

function enviarWhats(event) {
    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value
    const telefone = '5511974756779'
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    window.open(url, '_blank')
}

btnForm.addEventListener('click', (e) => {
    e.preventDefault
    enviarWhats(e)
})