function inserir(num){
    var numero = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = numero + num;
}

function limpar(){
    document.querySelector(".tela").innerHTML = ""
    
}

function apagar(){
    var apagando = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = apagando.substring(0, apagando.length -1);
}

function calculo(){
    var resultado = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = eval(resultado);
}
function audio(){
    var click = document.querySelector("#sound");
    click.play();
}
