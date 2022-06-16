const valHtml = document.getElementById('idHtml');
const valCss = document.getElementById('idCss') ;
const valJs = document.getElementById('idJs');
const valResult = document.getElementById('idResult');
const valTextHtmlCssJs = document.getElementById('idTextHtmlCssJs');
const valTextCss = document.getElementById('idTextCss');


valHtml.addEventListener('keyup', function(){
    valResult.innerHTML = valHtml.value;
});

valCss.addEventListener('keyup', function(){
    valTextHtmlCssJs.innerHTML += '<style>' + valCss.value +'</style>';
});

valJs.addEventListener('keyup', function(){
    valTextHtmlCssJs.innerHTML += '<script>' + valJs.value +'</script>';
    console.log(valTextHtmlCssJs);
});

// const textAll= `${valHtml.value} <style>${valCss.value}</style> <script ${valJs.value} </script>`;
// console.log(textAll);