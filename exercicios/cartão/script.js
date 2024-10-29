document.getElementById('pleo').addEventListener('click', function() {
    leo = document.querySelector('#leonardo');

    leo.style.left = '35%';

});
document.getElementById('pcelso').addEventListener('click', function() {
    celso = document.querySelector('#celso');
    
    celso.style.left = '35%';
    
});
document.getElementById('tntl').addEventListener('click', function() {
    leo = document.querySelector('#leonardo');
    
    leo.style.left = '100%';
    
});
document.getElementById('tntc').addEventListener('click', function() {
    celso = document.querySelector('#celso');
    
    celso.style.left = '-40%';
    
});

document.getElementById('endereco2').addEventListener('click', function(){
    alert('PAIS: Brasil, ESTADO: Paraná, CIDADE: Curitiba')

});

document.getElementById('email2').addEventListener('click', function(){
    alert('leonardo.coutinho.campos@escola.pr.gov.br')
    
});

document.getElementById('contato2').addEventListener('click', function(){
    alert('(41) 99643-XXXX')
    
});

document.getElementById('endereco1').addEventListener('click', function(){
    alert('PAIS: Brasil, ESTADO: Paraná, CIDADE: Almirante-Tamandare')

});

document.getElementById('email1').addEventListener('click', function(){
    alert('celso.dubiella.costa@escola.pr.gov.br')
    
});

document.getElementById('contato1').addEventListener('click', function(){
    alert('(41) 99962-XXXX')
    
});