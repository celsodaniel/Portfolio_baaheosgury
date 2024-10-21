peso = document.getElementById('peso')
idade = document.getElementById('idade')
altura = document.getElementById('altura')
genero = document.getElementById('genero')

imc = document.getElementById('imc')
taxaw = document.getElementById('taxa-water')

document.getElementById('comeca').addEventListener('click', function(){

    peson = parseInt(prompt("Digite seu peso:"))
    alturan = parseInt(prompt("Digite sua Altura:"))
    idaden = parseInt(prompt("Digite sua Idade:"))
    generon = prompt("Digite seu Gênero:")

    continuar = true;    
    while(continuar){
        if(generon == 'mulher'){
            taxawc = peson * 35
            continuar = false;
            mudar();
        }
        if(generon == 'homem'){
            taxawc = peson * 31
            continuar = false;
            mudar();
        }
        else{
            alert('Digite homem ou mulher')
            generon = prompt("Digite seu Gênero:")
    
        };
    }
    function mudar(){
        peso.innerHTML = ('Seu peso: ' + peson)
        idade.innerHTML = ('Sua altura: ' + alturan)
        altura.innerHTML = ('Sua idade: ' + idaden)
        genero.innerHTML = ('Seu gênero: ' + generon)
        taxaw.innerHTML = ('Taxa de água ideal: ' + taxawc)

        imcn = peson / (alturan * alturan)
        imcn = imcn * 10000

        imc.innerHTML = ("Seu imc: " + imcn.toFixed(2))



        if(imcn <= 18.4){
            "abaixo do peso"
        }
        if(imcn => 18.5 && imcn <= 24.9){
            "18,5 a 24,9: Peso normal"
        }
        if(imcn => 25 && imcn <= 29.9){
            "25 a 29,9: Sobrepeso"
        }
        if(imcn => 30 && imcn <= 34.9){
            "30 a 34,9: Obesidade grau I"
        }
        if(imcn => 35 && imcn <= 39,9){
            "35 a 39,9: Obesidade grau II"
        }
        if(imcn => 40){
            "Acima de 40: Obesidade grau III"
        }

    };
    


})