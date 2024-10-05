document.getElementById('button').addEventListener('click', function()  {
  n1 = parseInt(prompt("digite o primeiro numero: "))
  n2 = parseInt(prompt('digite o segundo numero: '))
    cacau = document.getElementById('cacau')
if( n1 < n2){
    cacau.innerHTML ="o " + n1 + " é menor que " + n2;
}

if(n1 > n2){
    cacau.innerHTML ="o " + n1 + " é maior que " + n2;
} else{

};  

});
