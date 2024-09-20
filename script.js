document.getElementById('toggle-menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    
    if (menu.style.right === '-250px') {
        menu.style.right = '0';
    } else {
        menu.style.right = '-65px';
        
    }
    
});


const button = document.getElementById('button');

        button.addEventListener('click', function() {
            window.location.href = 'tarefas.html';

       
});


const button_home = document.getElementById('button-home');

    button_home.addEventListener('click', function() {
        window.location.href = 'tarefas.html';
    });




const volta = document.getElementById('volta');

    volta.addEventListener('click', function() {
        window.location.href = 'index.html';

       
});
//---------------------------------------------------------------------------------------------------------------------


const trabalho1 = document.getElementById('trabalho1');

    trabalho1.addEventListener('click', function() {
        window.location.href = 'trabalho.html'; //mudar o destino

       
});
