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
document.getElementById('Pag1irParaPagina2').addEventListener('click',
    function() {
        exibirPagina('pagina2');
});

document.getElementById('Pag2irParaPagina1').addEventListener('click',
    function() {
        exibirPagina('pagina1');
});

document.getElementById('Pag1irParaPagina3').addEventListener('click',
    function() {
        exibirPagina('pagina3');
});

document.getElementById('Pag3irParaPagina2').addEventListener('click',
    function() {
        exibirPagina('pagina2');
});

document.getElementById('Pag3irParaPagina1').addEventListener('click',
    function() {
        exibirPagina('pagina1');
});

document.getElementById('Pag2irParaPagina3').addEventListener('click',
    function() {
        exibirPagina('pagina3');
});

