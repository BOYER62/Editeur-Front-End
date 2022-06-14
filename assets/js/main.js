const ValHtml = document.getElementById('IdHtml');
const ValCss = document.getElementById('IdCss');
const ValJs = document.getElementById('IdJs');
const ValResult = document.getElementById('IdResult');

document.getElementsByClassName('ClassHtml')[0].focus();
document.getElementsByClassName('ClassCss')[0].focus();
ValHtml.addEventListener('keyup', function() {
// function render(){
    html = document.getElementsByClassName('ClassHtml')[0].value;
    document.getElementsByClassName('ClassResult')[0].innerHTML = html;
});

ValCss.addEventListener('keyup', function() {
        html = document.getElementsByClassName('ClassCss')[0].value;
        document.getElementsByClassName('ClassResult')[0].innerHTML = html;
    });

//document.getElementsByClassName('ClassResult')[0].innerHTML = html + "<script>" + htmlCss + "</script>"