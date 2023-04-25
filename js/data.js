const getDatos = async (enlace) => {
    return fetch(enlace) 
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
}


const getRegion = (data) => {
    let regions = data.map(elem => elem.region);
    // usando el ejemplo de FakeStore sacamos un valor no duplicado dentro del array
    regions = new Set(regions);
    // convertimos el resultado del set en un array
    regions = [...regions];
    
    return regions
}


const filtrar = (arr, filtro) => {
let filtered =arr.filter(elem => elem.region == filtro)

return filtered
}


const filterByName = (arr, filtro) => {
let runFiltered = arr.filter(elem => elem.name.common.toLowerCase().includes(filtro.toLowerCase()));

return runFiltered
}





export default {
    getDatos,
    getRegion,
    filterByName,
    filtrar
}