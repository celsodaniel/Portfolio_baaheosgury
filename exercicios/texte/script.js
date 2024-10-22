text = document.getElementById("texte")

imcn = 35

if(imcn <= 18.40){
            text.innerHTML = "abaixo do peso"
        }
if(imcn >= 18.41 && imcn <= 24.99){
            text.innerHTML = "18,5 a 24,9: Peso normal"
        }
if(imcn >= 25.00 && imcn <= 29.99){
            text.innerHTML = "25 a 29,9: Sobrepeso"
        }
if(imcn >= 30.00 && imcn <= 34.99){
            text.innerHTML = "30 a 34,9: Obesidade grau I"
        }
if(imcn >= 35.00 && imcn <= 39.99){
            text.innerHTML = "35 a 39,9: Obesidade grau II"
        }
if(imcn >= 40.00){
            text.innerHTML = "Acima de 40: Obesidade grau III"
        }