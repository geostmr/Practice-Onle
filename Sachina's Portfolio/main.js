function revealFunction(){

    window.sr = ScrollReveal({duration:1350, distance:'100px', easing: 'ease-out'});

    sr.reveal('.reveal-left', {origin:'left', reset:false})
    sr.reveal('.reveal-right', {origin:'right', reset:false})
    sr.reveal('.reveal-top', {origin:'top', reset:false})
    sr.reveal('.reveal-bottom', {origin:'bottom', reset:false})

}


window.addEventListener('load', () =>{

revealFunction();

})