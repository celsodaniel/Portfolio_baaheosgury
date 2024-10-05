document.getElementById('button').addEventListener('click', function() {

n = prompt("Digite um numero");
total=n/2;
if(n%2==0){
    alert("Par");
}
if(n%2==1){
    alert("Impar");
}
alert(total);
});