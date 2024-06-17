function pesquisarArtigos() {
    const tituloPesquisa = document.getElementById('pesquisa-titulo').value.toLowerCase()
    const tipoFiltro = document.getElementById('filtro-tipo').value

    // Obter os artigos do localStorage
    const artigos = JSON.parse(localStorage.getItem('artigos')) || []

    // Filtrar os artigos
    const artigosFiltrados = artigos.filter(artigo => {
        const tituloMatch = artigo.titulo.toLowerCase().includes(tituloPesquisa)
        const tipoMatch = tipoFiltro ? artigo.tipo === tipoFiltro : true
        return tituloMatch && tipoMatch
    })

    // Exibir os artigos filtrados
    const resultadoPesquisa = document.getElementById('resultado-pesquisa')
    resultadoPesquisa.innerHTML = ''

    if (artigosFiltrados.length > 0) {
        artigosFiltrados.forEach(artigo => {
            const artigoElement = document.createElement('div')
            artigoElement.className = 'artigo'
            artigoElement.innerHTML = `
                <h2>${artigo.titulo}</h2>
                <p><strong>Introdução:</strong> ${artigo.introducao}</p>
                <p><strong>Tipo:</strong> ${artigo.tipo}</p>
                <p><strong>Editorias:</strong> ${artigo.editorias}</p>
                <p><strong>Data de Publicação:</strong> ${artigo.dataPublicacao}</p>
                <p><strong>Link:</strong> <a href="${artigo.link}" target="_blank">${artigo.link}</a></p>
            `
            resultadoPesquisa.appendChild(artigoElement)
        })
    } else {
        resultadoPesquisa.innerHTML = '<p>Nenhum artigo encontrado.</p>'
    }
}
