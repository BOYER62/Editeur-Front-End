const valHtml = document.getElementById('idHtml');
const valCss = document.getElementById('idCss') ;
const valJs = document.getElementById('idJs');
const valResult = document.getElementById('idResult');
const valTextJs = document.getElementById('idTextJs');
const valTextCss = document.getElementById('idTextCss');
const valCarractereMax = document.getElementById('idCarractereMax');
const valValeurMax = document.getElementById('idValeurMax');
const valBoutonProgresseBar = document.getElementById('idBoutonProgresseBar');
const valLogo = document.getElementById('idLogo');

let nombreCarractere = 0;
let carractereMax = 250;
let valBalise = '';

valCarractereMax.innerHTML = nombreCarractere + '/' + carractereMax;

valHtml.addEventListener('keyup', function(){
    logo('logoHtml');
    if(nombreCarractere < carractereMax){
    valResult.innerHTML = valHtml.value;
    valBalise = valResult.textContent;
    nombreCarractere = valBalise.length;
    const valWidth = (nombreCarractere / carractereMax) * 100 ;
    if(valWidth <= 50){
        valBoutonProgresseBar.style.backgroundColor = 'green';
    }
    if(valWidth > 50 && valWidth < 80){
        valBoutonProgresseBar.style.backgroundColor = 'orange';
    }
    if(valWidth >=80){
        valBoutonProgresseBar.style.backgroundColor = 'red';
    }
    valBoutonProgresseBar.style.width = valWidth + '%';
    valCarractereMax.innerHTML = nombreCarractere + '/' + carractereMax;
}});
valCss.addEventListener('keyup', function(){
    logo('logoCss');
    valTextCss.innerHTML = '<style>' + valCss.value +'</style>';
});

valJs.addEventListener('keyup', function(){
    logo('logoJs');
    valTextJs.innerHTML = '<script defer>' + valJs.value +'</script>';
});

valValeurMax.addEventListener('mousemove', function(e){
    valValeurMax.style.left = e.x / window.innerWidth * 100 + '%';
    carractereMax = e.x / window.innerWidth * 500;
    carractereMax = Math.trunc(carractereMax);
    valCarractereMax.innerHTML = nombreCarractere + '/' + carractereMax;
});

function logo(image){
    switch(image){
        case 'logoHtml':
            valLogo.classList.remove('logoCss');
            valLogo.classList.remove('logoJs');
            valLogo.classList.add('logoHtml');
            valLogo.classList.add('rotate-vert-center');
            break;
        case 'logoCss':
            valLogo.classList.remove('logoHtml');
            valLogo.classList.remove('logoJs');
            valLogo.classList.add('logoCss');
            valLogo.classList.add('rotate-vert-center');
            break;
        case 'logoJs':
            valLogo.classList.remove('logoHtml');
            valLogo.classList.remove('logoCss');
            valLogo.classList.add('logoJs');
            valLogo.classList.add('rotate-vert-center');
            break;
        default :
            valLogo.classList.remove('logoHtml');
            valLogo.classList.remove('logoCss');
            valLogo.classList.remove('logoJs');
            valLogo.classList.remove('rotate-vert-center');
            break;
    }
}
