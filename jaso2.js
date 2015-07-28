var nuevas="./img/imagen1.jpg";

function nueva(nur)
{
var image = nur.src;
nuevas=image;
}
function nuevaimagen(nur)
{
document.getElementById("principal").src=nur;
}
function volver()
{
document.getElementById("principal").src=nuevas;
}
function nuevaimgene(img)
{
var image = img.src;
nuevaimagen(image);
}

function imagen1(){
document.getElementById('principal').src="./img/imagen1.jpg";

}
function imagen2(){
document.getElementById('principal').src="./img/imagen2.jpg";
}
function imagen3(){
document.getElementById('principal').src="./img/imagen3.jpg";
}
function Imagen4(){
document.getElementById('principal').src="./img/imagen4.jpg";
}

function Imagen5(){
document.getElementById('principal').src="./img/imagen5.jpg";
}


function volver(){
document.getElementById('./img/imagen1.jpg"').src="./img/imagen1.jpg";
}