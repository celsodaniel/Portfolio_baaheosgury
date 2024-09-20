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

const css = document.getElementById('css');

        css.addEventListener('click', function() {
            window.location.href = 'codcss.html';

       
});

const js = document.getElementById('js');

        js.addEventListener('click', function() {
            window.location.href = 'codjs.html';

       
});
