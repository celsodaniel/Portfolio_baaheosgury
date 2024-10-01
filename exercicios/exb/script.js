qt = 0

document.getElementById('button').addEventListener('click', function(){
    qt += 1
    tm = qt / 3
    if (tm < 3){
        cacau = document.getElementById('cacau')
        cacau.innerHTML = ("Pessoas interessadas " + qt 
        + "<p>Times: "  + Math.floor(tm) + "</p>"
    
    )
    }else{
        cacau = document.getElementById('cacau')
        cacau.innerHTML = ("Pessoas interessadas " + qt 
        + "<p color=>Times: "  + Math.floor(tm) + "</p>"
    
    )
    }
    




});