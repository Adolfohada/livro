var resultado = document.getElementById('resultado')
function calcular(){

    var livros = document.getElementById('numBooks').value;
    var preco = ""

    if(livros < 7){
        preco = livros * 22
    }
    else{
        preco = livros * 15
    }

    


resultado.innerText = `O preço dos livros é ${preco}`


}