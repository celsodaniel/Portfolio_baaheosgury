document.getElementById('pleo').addEventListener('click', function() {
    leo = document.querySelector('#leonardo');
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (mediaQuery.matches) {
        leo.style.left = '35%';
    } else {
        leo.style.left = '3%';
    }
    

});
document.getElementById('pcelso').addEventListener('click', function() {
    celso = document.querySelector('#celso');
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (mediaQuery.matches) {
        celso.style.left = '35%';
    } else {
        celso.style.left = '3%';
    }
    
});
document.getElementById('tntl').addEventListener('click', function() {
    leo = document.querySelector('#leonardo');
    
    leo.style.left = '160%';
    
});
document.getElementById('tntc').addEventListener('click', function() {
    celso = document.querySelector('#celso');
    
    celso.style.left = '-90%';
    
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