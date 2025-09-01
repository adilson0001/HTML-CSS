// Função para alterar entre as páginas
function exibirPagina(paginaId) {
    // Esconde todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => pagina.classList.remove('ativo'));
    // Mostrar a página selecionada
    const paginaParaExibir = document.getElementById(paginaId);
    paginaParaExibir.classList.add('ativo');
}   

// Adicionar os ouvintes de eventos para os botões
document.getElementById('irParaPagina2').addEventListener('click',
    function() {
        exibirPagina('pagina2');
});

document.getElementById('irParaPagina1').addEventListener('click',
    function() {
        exibirPagina('pagina1');
});


