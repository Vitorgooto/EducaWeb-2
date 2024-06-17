function criarArtigo(event) {
    event.preventDefault()

    const titulo = document.getElementById('titulo-artigo').value
    const introducao = document.getElementById('introducao-artigo').value
    const tipo = document.getElementById('tipo-artigo').value
    const editorias = document.getElementById('editorias-artigo').value
    const dataPublicacao = document.getElementById('data-publicacao-artigo').value
    const link = document.getElementById('link-artigo').value

    const artigo = {
        titulo,
        introducao,
        tipo,
        editorias,
        dataPublicacao,
        link
    }

    // Obter os artigos existentes do localStorage
    const artigosExistentes = JSON.parse(localStorage.getItem('artigos')) || []
    // Adicionar o novo artigo
    artigosExistentes.push(artigo)
    // Salvar de volta no localStorage
    localStorage.setItem('artigos', JSON.stringify(artigosExistentes))

    alert('Artigo criado com sucesso!')
    document.getElementById('form-artigo').reset()
}
