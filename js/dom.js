


const $ = (selector) => document.querySelector(selector);



const createCardCountry = (obj) => {
    const div = document.createElement('div')
    div.className ='flags card col rounded bg-body-tertiary border-0 shadow-sm';
    div.style = 'width:15rem; height:21rem;';
    div.id = obj.name.common; 

    div.innerHTML = `
    <div class="row no-gutters h-100" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvasExample">
      <div class="col-6 w-100  px-0 object-fit-cover h-50">
        <img src="${obj.flags.png}" class="card-img h-100 w-100 rounded-bottom-0" alt="Imagen">
        </div>
          <div class="col mb-3">
          <div class="card-body fw-semibold text-start py-2 px-1 mx-2">
           <span class="card-title fw-bolder fs-6">${obj.name.common}</span>
            </div>
            <div class="mb-1 px-2 text-start">
             <p class="card-text px-0"><span class="fw-semibold fs-6 px-1">Population:</span>${obj.population}<br>
             <span class="fw-semibold fs-6 px-1">Region:</span>${obj.region}<br><span class="fw-semibold fs-6 px-1">Capital:</span><span>${obj.capital}</span></p>
          </div>
        </div>
       </div>
     </div>
    `
    return div
}


const createModal = (obj) => {
  const div2 = document.createElement('div')
  div2.className = 'fixed-top shadow-sm pt-1 bg-body-tertiary d-flex justify-content-between'
  div2.innerHTML= ` 
  <div class="col-lg-10 my-2 px-2 px-lg-4"><h3 class="fw-bold">Where in the world?</h3></div>
       <div class="col-lg-2 d-flex align-items-center px-lg-5 mx-lg-5 px-0"><span class="material-symbols-outlined">
                  dark_mode
                </span> <a id="changeTheme2" class="navbar-brand" href="#">Dark Mode</a></div>
                </div>
              </div>
          <button type="button" class="btn border bg-body-tertiary shadow position-absolute d-flex align-items-center"  id="closeCanvas" data-bs-dismiss="offcanvas" aria-label="Close"><span class="material-symbols-outlined">
                keyboard_backspace</span><span class="mx-2">Back</span></button>         
          <div>
                <div class="canvasImg">
                  <img class="h-100 w-100" src="${obj.flags.png}" alt="${obj.name.common}">
                </div>
                <div class="containerInfo d-flex flex-lg-row flex-column position-absolute"> 
                  <div class="position-absolute mx-3"><h5 class="w-100 h-100 fs-4 fw-bolder">${obj.name.common} </h5></div>
                  <div class="d-flex flex-column my-5 mb-1 mx-3 pt-3 mb-lg-0">
                  <span class="my-1 fw-bold">Native Name: <span class="fw-normal">${obj.name.common} </span></span>
                  <span class="my-1 fw-bold">Population: <span class="fw-normal">${obj.population}</span></span>
                  <span class="my-1 fw-bold">Region: <span class="fw-normal">${obj.region} </span></span>
                  <span class="my-1 fw-bold">Sub Region: <span class="fw-normal">${obj.subregion} </span></span>
                  <span class="my-1 fw-bold">Capital: <span class="fw-normal">${obj.capital}</span></span>  
                  </div>
                  <div class="d-flex flex-column my-lg-5 pt-lg-3 mx-3 ">              
                  <span class="my-1 fw-bold" >Top Level Domain: <span class="fw-normal">${obj.tld[0]} </span></span>
                  <span class="my-1 fw-bold" >Currencies: <span class="fw-normal">Euro</span></span>                
                  <span class="my-1 fw-bold">Languages: <span class="fw-normal">${obj.languages} </span></span>                
                  </div>

                </div>
                </div>
  
  `
  
  return div2
}


const addCountries = $('#addCountries');


        const showAllCards = (arr) => {
        addCountries.innerHTML = ''; 

        arr.forEach(element => {
        const card = createCardCountry(element); 
        addCountries.appendChild(card);
        })
}

const addFlags = $('#innerFlags');

const showModal = (object) => {
  addFlags.innerHTML = ''; 
  const card = createModal(object); 
  addFlags.appendChild(card);

  // aqui tambien se puede cambiar el Tema de la pagina
  const html = document.querySelector("html");
  const btnChange2 = document.querySelector("#changeTheme2");
  btnChange2.addEventListener("click", () => {
    html.dataset.bsTheme = html.dataset.bsTheme == "light" ? "dark" : "light"
  })
  
}




export default {
    createCardCountry,
    showAllCards,
    addCountries,
    createModal,
    showModal,
    $
}