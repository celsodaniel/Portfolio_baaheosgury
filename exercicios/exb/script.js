qt = 0

document.getElementById('button').addEventListener('click', function(){
<<<<<<< Updated upstream
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
    




=======
    
    qt += 1
    d = 3
    tm = qt / d
    r = qt % d
    
    cacau = document.getElementById('cacau')
    if(r == 0){
        cacau.style.color = 'green'
        cacau.innerHTML = ("Pessoas interessadas " + qt 
        + "<p> Pessoas sem time: "+ r + "</p>"
        + "<p>Times: "  + Math.floor(tm) + "</p>"
        )
    }else{
        cacau.style.color = 'red'
        cacau.innerHTML = ("Pessoas interessadas " + qt 
        + "<p> Pessoas sem time: "+ r + "</p>"
        + "<p>Times: "  + Math.floor(tm) + "</p>"
        )
    };
    

    
>>>>>>> Stashed changes
});