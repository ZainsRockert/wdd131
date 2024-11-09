// select the DOM elements for output
const year = document.querySelector("#currentyear");
// use the date object
const today = new Date();
year.innerHTML = `©️ ${today.getFullYear()} | Marcos Jared Macho | Idaho`;
const lastModified = document.querySelector("#lastModified");
let modification = new Date(document.lastModified);
lastModified.innerHTML = `Last Modification: ${modification.toLocaleString()}`;