const valHtml = document.getElementById('idHtml');
const valCss = document.getElementById('idCss') ;
const valJs = document.getElementById('idJs');
const valResult = document.getElementById('idResult');
const valTextJs = document.getElementById('idTextJs');
const valTextCss = document.getElementById('idTextCss');
const valCarractereMax = document.getElementById('idCarractereMax');
const valValeurMax = document.getElementById('idValeurMax');
let nombreCarractere = 0;
let carractereMax = 250;
let valBalise = '';
valCarractereMax.innerHTML = nombreCarractere + '/' + carractereMax;

valHtml.addEventListener('keyup', function(){
    if(nombreCarractere <= carractereMax){
    valResult.innerHTML = valHtml.value;
    valBalise = valResult.textContent;
    nombreCarractere = valBalise.length;
    valCarractereMax.innerHTML = nombreCarractere + '/' + carractereMax;
}});

valCss.addEventListener('keyup', function(){
    valTextCss.innerHTML = '<style>' + valCss.value +'</style>';
});

valJs.addEventListener('keyup', function(){
    valTextJs.innerHTML = '<script>' + valJs.value +'</script>';
});

valValeurMax.addEventListener('mousemove', function(e){
    valValeurMax.style.left = e.x / window.innerWidth * 100 + '%';
});