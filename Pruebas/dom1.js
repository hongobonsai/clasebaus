/*

console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.documentElement);
console.log(document.title);
console.log(document);
console.log(document);
const $parrafo = document.getElementById("parrafo1");
console.log($parrafo);

console.log(document.getElementsByClassName("tarjeta"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementsByTagName("a"));

//selector = primeraocurrencia. selectorAll = todas las ocurrencias
console.log(document.querySelector("#parrafo1")); // # = id
console.log(document.querySelectorAll("#parrafo1")); // # = id
console.log(document.querySelector(".tarjeta")); // . = clase
console.log(document.querySelectorAll(".tarjeta")); // . = clase
console.log(document.querySelectorAll("ul")); // etiquetas
console.log(document.querySelectorAll("ul a")); // etiquetas a dentro de etiqueta ul
console.log(document.querySelectorAll("li")); // etiquetas

//PARA ELEGIR UN ID, LO MEJOR ES GET ELEMENT, MEJOR QUE QUERY SELECTOR...
//PARA EL RESTO, QUERY SELECTOR ES MEJOR

*/

//ATRIBUTOS: getter y setter o notacion de punto
//setAtributte getAttribute removeAttribute toggleAttribute hasAttribute
const $parrafo = document.getElementById("parrafo1");
console.log($parrafo);
const $txtNombre = document.getElementsByName("nombre")[0];
console.log($txtNombre.placeholder);
console.log($txtNombre.hasAttribute("placeholder"));
$txtNombre.setAttribute("placeholder", "Write Your Name");
console.log($txtNombre.getAttribute("placeholder"));



const $tarjeta1 = document.querySelector(".tarjeta");
//$tarjeta1.style.backgroundColor = "red";

$tarjeta1.setAttribute("style", "background-color:yellow");
$tarjeta1.style.setProperty("background-color", "green");
console.log($tarjeta1.style.getPropertyValue("color"));

console.log($tarjeta1.className);
//classlist .add .remove .replace .toggle .contains
//$tarjeta1.classList.add("rotar-45");
console.log($tarjeta1.classList.contains("rotar-45"));
console.log($tarjeta1.classList.toggle("rotar-45"));//si false, cambia a true. si true, cambia a false
console.log($tarjeta1.classList.toggle("rotar-45", "rotar-120"));

//TEXTO:

//innerText -> textContent... innerHTML outerHTML

$parrafo.textContent = "Esto lo rellene desde js";

//ESTO DE ADELANTE NO ESTA BUENO
$parrafo.innerHTML = `<p><mark>Esto lo rellene desde js<mark><p><p><mark>Esto lo rellene desde js<mark><p>`

$parrafo.outerHTML = `<p><mark>Esto lo rellene desde js<mark><p><p><mark>Esto lo rellene desde js<mark><p>`
console.log($parrafo);

const $newTarjeta = document.createElement("figure"),
$imagen = document.createElement("img"),
$figCap = document.createElement("figcaption"),
texto = document.createTextNode("Any"); // igual a  $fig.textContent = "Any";



$newTarjeta.classList.add("tarjeta");
$imagen.setAttribute("src", "https://placeimg.com/200/200/any");
$imagen.setAttribute("alt", "cualquiera");

$newTarjeta.appendChild($imagen);
$newTarjeta.appendChild($figCap);
$figCap.appendChild(texto);

const $seccionImagenes = document.querySelector(".Imagenes");

$seccionImagenes.appendChild($newTarjeta);
const listaFrutas = ["Banana", "Manzana", "Pera", "Melon", "Sandia"];
$listaFrutas = document.getElementById("frutas")
const fragmento = document.createDocumentFragment();
listaFrutas.forEach((el)=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $listaFrutas.appendChild($li);
})

$listaFrutas.appendChild(fragmento);
const imagenes = document.querySelector(".Imagenes");
let tarjeta = imagenes.firstElementChild;
do {
    console.log(tarjeta);
    tarjeta = tarjeta.nextElementSibling;
    if(tarjeta == null){
        break;
    }
}while(tarjeta.nextElementSibling);
