// create functin for getting querystring values
function getQueryStringValue(key) {
  // get the querystring from the URL
  const query = window.location.search;
  const imdbId = new URLSearchParams(query).get("imdbId");
  const category = new URLSearchParams(query).get("category");

  // return params

  return {
    imdbId: imdbId,
    category: category,
  };
}

// get the querystring values
const params = getQueryStringValue();

const fname = document.querySelector("#fname");
console.log(params);

fname.value = params.imdbId;

getLocalStorage();
function getLocalStorage() {
  const name = localStorage.getItem("name");
  console.log(name);
}

// Spara data i Session Storage
sessionStorage.setItem("nyckel", "värde");

// Hämta data från Session Storage på en annan sida
var sparadData = sessionStorage.getItem("nyckel");
