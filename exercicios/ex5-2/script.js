document.getElementById('button').addEventListener('click', function()  {


    data = new Date(),
        dia  = data.getDate().toString(),
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        anoF = data.getFullYear();
    data = ("dia: " + dia +
    "mês: " + mes +
    "ano: " +anoF
    )

cacau = document.getElementById('cacau')
cacau.innerHTML = data
});
