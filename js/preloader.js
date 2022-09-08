const preloader = document.getElementById('preloader');

function fadeEffect(){
    window.scrollTo(0, 0);
    setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 484);
    }, 484);
    

}

window.addEventListener('load', fadeEffect);