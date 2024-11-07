document.getElementById('button').addEventListener('click', function(){
    num1 = parseInt(prompt("Digite o ano que voce nasceu :"))
    num2 = parseInt(prompt("Digite o ano atual"))
    idade = num2 - num1

    cacau = document.getElementById('cacau')
    cacau.innerHTML = "Quem nasceu em  "+ num1 + " vai completar " + idade +" anos " +"em " + num2 + " !"
});