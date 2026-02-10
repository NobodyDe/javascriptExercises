const div = document.querySelector(".teste");

function createCard({ name, status, species, image }) {
  return `<div>
  <img src=${image}/>
  <h1>${name}</h1>
  <p>${status}</p>
  <p>${species}</p>
  </div>`;
}

const card = createCard({
  name: "Rick",
  status: "Dead",
  species: "human",
  image: "url",
});
div.innerHTML += card;
