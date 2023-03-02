"use strict";

const linksCompra = document.querySelectorAll(".links");

let listas = document.getElementsByTagName("li");

	for (let lis of listas) {
		lis.style.listStyle ="none";
	}

linksCompra.forEach(element => {
	element.style.display="flex";
	element.style.justifyContent="space-around";
	element.style.paddingBottom="30px";
})

let secciones = document.querySelector(".select");

const roaCollection = document.querySelector(".roaCollection");
const closetCollection = document.querySelector(".myClosetCollection");
const deminCollection = document.querySelector(".deminCollection");
const kiniCollection = document.querySelector(".kiniCollection");

const tituloRoa = document.querySelector(".tituloRoa");
const tituloCloset = document.querySelector(".tituloCloset");
const tituloDemin = document.querySelector(".tituloDemin");
const tituloKini = document.querySelector(".tituloKini");

secciones.addEventListener("change", ()=> {

	if (secciones.value == "todos") {
		roaCollection.classList.remove("ocultar");
		closetCollection.classList.remove("ocultar");
		deminCollection.classList.remove("ocultar");
		kiniCollection.classList.remove("ocultar");

		tituloRoa.classList.remove("ocultar");
		tituloCloset.classList.remove("ocultar");
		tituloDemin.classList.remove("ocultar");
		tituloKini.classList.remove("ocultar");

	} else if(secciones.value == "roa") {
		roaCollection.classList.remove("ocultar");
		closetCollection.classList.add("ocultar");
		deminCollection.classList.add("ocultar");
		kiniCollection.classList.add("ocultar");

		tituloRoa.classList.remove("ocultar");
		tituloCloset.classList.add("ocultar");
		tituloDemin.classList.add("ocultar");
		tituloKini.classList.add("ocultar");

	} else if(secciones.value == "closet") {

		closetCollection.classList.remove("ocultar");
		roaCollection.classList.add("ocultar");
		deminCollection.classList.add("ocultar");
		kiniCollection.classList.add("ocultar");

		tituloCloset.classList.remove("ocultar");
		tituloRoa.classList.add("ocultar");
		tituloDemin.classList.add("ocultar");
		tituloKini.classList.add("ocultar");

	} else if(secciones.value == "demin") {
		
		deminCollection.classList.remove("ocultar");
		closetCollection.classList.add("ocultar");
		roaCollection.classList.add("ocultar");
		kiniCollection.classList.add("ocultar");

		tituloDemin.classList.remove("ocultar");
		tituloCloset.classList.add("ocultar");
		tituloRoa.classList.add("ocultar");
		tituloKini.classList.add("ocultar");

	} else if(secciones.value == "kini") {
		
		kiniCollection.classList.remove("ocultar");
		deminCollection.classList.add("ocultar");
		closetCollection.classList.add("ocultar");
		roaCollection.classList.add("ocultar");

		tituloKini.classList.remove("ocultar");
		tituloDemin.classList.add("ocultar");
		tituloCloset.classList.add("ocultar");
		tituloRoa.classList.add("ocultar");

	}
})

const inputBusqueda = document.querySelector(".buscador");
const contenedor = document.querySelector(".contenedor");

inputBusqueda.addEventListener("keyup", ()=> {

	let filtro = inputBusqueda.value.toUpperCase();
	let divs = contenedor.getElementsByTagName("div");

	for (let i = 0; i < divs.length; i++) {

		let productos = divs[i].getElementsByTagName("h4")[0];
		let textoABuscar = productos.textContent;
		textoABuscar = textoABuscar.toUpperCase();

			tituloKini.classList.add("ocultar");
			tituloDemin.classList.add("ocultar");
			tituloCloset.classList.add("ocultar");
			tituloRoa.classList.add("ocultar");

		if (textoABuscar.indexOf(filtro) > -1) {

			divs[i].style.display="";

		} else {
			divs[i].style.display="none";
		}

	}

})