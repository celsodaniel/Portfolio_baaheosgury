document.getElementById('toggle-menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    
    if (menu.style.right === '-250px') {
        menu.style.right = '0';
    } else {
        menu.style.right = '-65px';
        
    }
    
});