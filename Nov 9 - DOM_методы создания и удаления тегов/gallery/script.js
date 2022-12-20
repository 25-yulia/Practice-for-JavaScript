let slides = document.querySelectorAll(".slide");
for(let i=0; i<slides.length; i++){
    slides[i].addEventListener('click', () => { 
        // slides[i].classList.toggle('active'); // НО работает только по двойнуму щелчку 

        clearActiveClasses()
        slides[i].classList.add('active');

    });
}

function clearActiveClasses(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('active');
    }
}