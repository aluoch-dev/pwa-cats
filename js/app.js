const container = document.querySelector(".container")
const cats = [
  { name: "Ricko", image: "images/cat1.jpg" },
  { name: "Dawn", image: "images/cat2.jpg" },
  { name: "Ponto", image: "images/cat3.jpeg" },
  { name: "Que", image: "images/cat4.jfif" },
  { name: "Mimi", image: "images/cat5.jpeg" },
  { name: "Vimali", image: "images/cat6.jpg" },
  { name: "Ikea", image: "images/cat7.jpg" },
  { name: "Vema", image: "images/cat8.jpg" },
  { name: "Ahadi", image: "images/cat9.jpg" },
]

const showCats = () => {
    let output = ""
    cats.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Rescue</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCats)