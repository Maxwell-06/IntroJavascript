
function clicou(){
    document.getElementById("agradecimento"). innerHTML = "obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://web.digitalinnovation.one/home");
    window.location.href = "https://web.digitalinnovation.one/home";

}

function trocar(elemento){
    elemento.innerHTML = "obrigado por passar o mouse ";
    //document.getElementById("mousemove"). innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui";
    //document.getElementById("mousemove"). innerHTML = "passe o mouse aqui";
}

function load(){
    alert("pagina carregada");

}

function funcaochange(elemento){
    console.log(elemento.value)
}

//----------------------------DESELVOLVA PAG COM JAVASCRIPT-------------//

/*
function soma(n1, n2){
    return n1 + n2;
}

function validaidade(idade){
    var validar;
    if (idade >=18){
        var validar = true
    }else{
        var validar = false
    }   
    return validar;

}
var idade = prompt("qual sua idade")
console.log(validaidade(idade));
*/


//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome)
//}

//alert(soma(5, 10));
//alert(setReplace("vai japão", "japão", "brasil"));


//---------------------------DATAS E HORAS---------------------------// 

//var d = new Date();
//alert(d); ou (d.getDate());


//---------------------------Estrutura de repetiçãO------------------//

//var count = 0
//while (count <= 5){
//    console.log(count);
//    count = count+1
//};


//-----------------------------Restrições de conteúdo do site -------//

//var idade = prompt("qual a sua idade ?"); 
//if (idade >=18){
  //  alert("maior de idade");   
//} else{ 
  //  alert("menor de idade");
//};

//------------------------------LISTA DE DICIONARIO------------------//
//var frutas = [{nome :"maça" , cor:"vermelha"} , {nome :"uva" , cor:"roxa"}] (CRIAR DICIONARIO COM 2 ITENS)
//console.log(frutas);
//alert(frutas[1].nome);


//------------------------------DICIONARIO----------------------------//

//var fruta = {nome :"maça" , cor:"vermelha"}
//console.log(fruta); ou console.log(fruta.nome);
//alert(fruta.cor)

//--------------------------------ARRAY--------------------------------//

//var lista = ["maça", "pera" , "laranja"];
//console.log(lista.join(" - ")); (SEPARA A LISTA EM TRAÇOS, PIPILINE, SOMENTE ESPAÇO)
//console.log(lista.toString()); (TRANSFORMA AS ARRAYS EM STRINGS)
//console.log(lista.reverse()); (MOSTRAR O ULTIMO ITEM ADICIONADO, E COLOCAR NA FRENTE DA LISTA)
//console.log(lista.length); (QUANTIDADE DE ITENS DA LISTA)
//lista.pop(); (RETIRAR ITENS DA LISTA)
//lista.push("uva"); (ADICIONAR ITEM A LISTA)
//console.log(lista[1]); (SELECIONAR UM ITEM DA LISTA)


//----------------------------STRINGS-----------------------------------//

//var nome = "Maxwell Sanches";

//var idade = 25; (Quando quiser numeros colocar a letra N)
//var idade2 = 2;
//var n1 = 10; 
//var n2 = 5;
//var frase = "França é o melhor time do mundo";

//alert(nome + " tem " + idade + " anos ");(TEXTOS SEMPRE ENTRE ASPAS E STRINGS FORA DAS ASPAS)
//alert(idade + idade2);

//console.log(nome);
//console.log(n1 * n2);

//console.log(frase.replacelo("França" , "Brasil")); ( TROCAR UM NOME POR OUTRO)
//console.log(frase.toUpperCase()); (LETRAS MAIUSCULAS)
//console.log(frase.toLowerCase()); (LETRA MINUSCULAS)  
