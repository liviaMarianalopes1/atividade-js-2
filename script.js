addEventListener("DOMContentLoaded", ()=>{
    const titulo = document.getElementById('titulo');
    const lista = document.querySelector('ul');
    const link = document.querySelector('a');
    const listaOrdenada = document.getElementById('lista-ordenada');
    titulo.innerText = "Atividade Proz";
    link.innerText = "Acesse aqui Proz";
    lista.innerHTML = `
    <li>Atividade 1</li>
    <li>Atividade 2</li>
    <li>Atividade 3</li>
    `;
    listaOrdenada.innerHTML = `
    <li><a href= "https://www.w3schools.com/html/default.asp">HTML</a></li>
    <li><a href= "https://www.w3schools.com/css/default.asp">CSS</a></li>
    <li><a href= "https://www.w3schools.com/js/default.asp">\JS</a></li>
    `;
});
