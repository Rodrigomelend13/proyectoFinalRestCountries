import data from "./data.js";
import dom from "./dom.js";

// aqui estoy escribiendo para cambiar el tema de html
const html = document.querySelector("html");
const btnChange = document.querySelector("#changeTheme");
const btnChange2 = document.querySelector("#changeTheme2");

btnChange.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "light" ? "dark" : "light"
})


const enlace = 'https://restcountries.com/v3.1/all'

const datosCountries = await data.getDatos(enlace);
console.log(datosCountries);
// .slice() es una funcion para clonar el array original esto me servira para hacer el filtro 
let cloneDatos = datosCountries.slice();

dom.showAllCards(cloneDatos);


// filtro de acuerdo a lo que este en el input
const inputSearch = dom.$('#inputSearch');
inputSearch.addEventListener('keyup', () => {
    let pruebaFiltro = inputSearch.value;
    
    const filteredByInput = pruebaFiltro == '' ? cloneDatos : data.filterByName(cloneDatos, pruebaFiltro);
    dom.showAllCards(filteredByInput);
    
    clickEachCard()
       

})






// aqui escribire para el dropdown :
const botonDropdown = document.getElementById("dropdownTextContent");
// Seleccione todas las opciones del dropdown
const opcionesDropdown = document.querySelectorAll(".dropdown-item");
// Agrego addEvent a  cada opción
opcionesDropdown.forEach((opcion) => {
  opcion.addEventListener("click", () => {
    botonDropdown.textContent = opcion.textContent;
    let filtroByRegion = botonDropdown.textContent;
    if (!inputSearch.value == "") {
        inputSearch.value = inputSearch.value = '';
    }

    const filteredByRegion = filtroByRegion =='Show All' ? datosCountries : data.filtrar(datosCountries, filtroByRegion);

    cloneDatos= filteredByRegion

    dom.showAllCards(filteredByRegion);
    
    clickEachCard()

  });
});



// FUntion para hacer click en cada bandera y abrir una ventana con la informacion del Pais
 function clickEachCard() {
    const flagList = dom.addCountries.querySelectorAll('.flags');
    flagList.forEach(elem => {
      elem.addEventListener('click', () => {
        const readyCountry = cloneDatos.find((c) => c.name.common === elem.id);
            console.log(readyCountry);

        dom.showModal(readyCountry);    

      });
    });
}
 

clickEachCard();


