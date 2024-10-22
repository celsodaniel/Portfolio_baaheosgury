peso = document.getElementById('peso')
idade = document.getElementById('idade')
altura = document.getElementById('altura')
genero = document.getElementById('genero')

imc = document.getElementById('imc')
taxaw = document.getElementById('taxa-water')

document.getElementById('calcular').addEventListener('click', function(){

    peson = parseInt(prompt("Digite seu peso:"))
    alturan = parseInt(prompt("Digite sua Altura:"))
    idaden = parseInt(prompt("Digite sua Idade:"))

    continuar = true;    
        while(continuar){
            generon = prompt("Digite seu Gênero:   " + "    homem ou mulher")

            if(generon == "homem"){
                taxawc = peson * 35
                continuar = false;
                mudar();
            }
            if(generon == "mulher"){
                taxawc = peson * 31
                continuar = false;
                mudar();
            }
            else{      
            }
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

        text = document.getElementById('text-motivation')

        if(imcn <= 18.40){
            text.innerHTML = "seco"
        }
        if(imcn >= 18.41 && imcn <= 24.99){
                    text.innerHTML = "normal"
                }
        if(imcn >= 25.00 && imcn <= 29.99){
                    text.innerHTML = "gordinho"
                }
        if(imcn >= 30.00 && imcn <= 34.99){
                    text.innerHTML = "gordo"
                }
        if(imcn >= 35.00 && imcn <= 39.99){
                    text.innerHTML = "baleia"
                }
        if(imcn >= 40.00){
                    text.innerHTML = "planeta"
                }

    };
    


})

