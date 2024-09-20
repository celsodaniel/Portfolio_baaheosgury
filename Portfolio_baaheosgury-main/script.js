document.getElementById('toggle-menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    
    if (menu.style.right === '-250px') {
        menu.style.right = '0';
    } else {
        menu.style.right = '-65px';
        
    }
    
});

document.getElementById('button').addEventListener('click', function() {
    const button = document.getElementById('button');

        button.addEventListener('click', function() {
            window.location.href = 'tarefas.html';

       
})});

document.getElementById('button-home').addEventListener('click', function() {
    const button = document.getElementById('button-home');

        button.addEventListener('click', function() {
            window.location.href = 'tarefas.html';

       
})});
