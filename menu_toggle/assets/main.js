const btstogglenav = document.querySelectorAll("button.toggle-nav")//Aqui pego o referencial de todos os botões com classe "toggle-nav" e coloco em uma constante "btstogglenav"
const nv = document.querySelector("nav")//E aqui eu pego o referencial do nav e coloco em uma constante "nv"

btstogglenav.forEach((bt) => {//Agora eu mando para cada "btstogglenav" criar uma função
    bt.addEventListener('click', function(){//Dentro da função criada eu determinei um ouvidor de eventos para o parametro "bt"
    nv.classList.toggle('open')//Para fechar, o call back do bt pega a constante nv e atribue o elemento toggle com a classe open que está lá no css.
} )
}) /* Resumindo, assim você está declarando que se clicar uma vez em algum botão com a classe toggle-nav,
    o nav vai ficar com a classe 'open', se clicar denovo vai tirar essa classe.*/
