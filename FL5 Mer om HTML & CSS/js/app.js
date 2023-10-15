function hamburgermenuToogle() {
  const navs = document.querySelectorAll(".navigation");

  navs.forEach((nav) => nav.classList.toggle("nav-toggle"));
}
document
  .querySelector(".hamburger")
  .addEventListener("click", hamburgermenuToogle);

// search for a specific word in the text

const word = "Stra";

const flexContainer = document.querySelector(".flex-container");
const divs = flexContainer.querySelectorAll("div");

divs.forEach((div) => {
  let alltext = div.innerHTML;
  let replacedText = alltext.replace(
    new RegExp("\\b" + word + "\\b", "g"),
    "Star"
  );

  // Uppdatera texten i div-elementet
  div.innerHTML = replacedText;
});

const navigation = document.querySelector(".navigation");
const newListItem = document.createElement("li");
const newLink = document.createElement("a");
newLink.setAttribute("href", "contact.html");
newLink.innerText = "Erik";
newListItem.appendChild(newLink);
navigation.appendChild(newListItem);

function addParametersToUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set("name", "Erik");
  url.searchParams.set("age", "26");
  url.searchParams.set("country", "Sweden");
  window.history.pushState({}, "", url);
}

function createLink() {
  const navigation = document.querySelector(".navigation");
  const newListItem = document.createElement("li");
  const newLink = document.createElement("a");
  const searchParams = new URLSearchParams({
    imdbId: "tt0944947",
    category: "drama",
  });
  newLink.setAttribute("href", "contact.html?" + searchParams.toString());
  newLink.innerText = "Erik 2";
  newListItem.appendChild(newLink);
  navigation.appendChild(newListItem);
}
createLink();

// Store data in localStorage
localStorage.setItem("name", "John");

// https://rapidapi.com/blog/movie-api/
