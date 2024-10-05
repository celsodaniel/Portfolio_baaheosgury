const tb1 = document.getElementById('trabalhos1');
const tb2 = document.getElementById('trabalhos2');
const tb3 = document.getElementById('trabalhos3');
const tb4 = document.getElementById('trabalhos4');
const tela = document.getElementById('info');

document.getElementById('tarefas1').addEventListener('click', function(){
    tela.style.zIndex = '1';
    tb1.style.zIndex = '2';
    tb2.style.zIndex = '0';
    tb3.style.zIndex = '0';
    tb4.style.zIndex = '0';

});
document.getElementById('tarefas2').addEventListener('click', function(){
    tela.style.zIndex = '1';
    tb1.style.zIndex = '0';
    tb2.style.zIndex = '2';
    tb3.style.zIndex = '0';
    tb4.style.zIndex = '0';

});
document.getElementById('tarefas3').addEventListener('click', function(){
    tela.style.zIndex = '1';
    tb1.style.zIndex = '0';
    tb2.style.zIndex = '0';
    tb3.style.zIndex = '2';
    tb4.style.zIndex = '0';

});
document.getElementById('tarefas4').addEventListener('click', function(){
    tela.style.zIndex = '1';
    tb1.style.zIndex = '0';
    tb2.style.zIndex = '0';
    tb3.style.zIndex = '0';
    tb4.style.zIndex = '2';

});