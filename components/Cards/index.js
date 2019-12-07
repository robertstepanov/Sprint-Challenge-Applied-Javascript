// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleCreator(arg) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(img);
  author.appendChild(name);

  headline.textContent = arg[0];
  img.src = arg[0];
  name.textContent = arg[0];
  // headline.textContent = arg;
  // img.src = "./assets/fido.jpg";
  // name.textContent = "What is going on?";

  return card;
}

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    let info = Object.entries(response.data.articles);
    let infoKeys = Object.keys(response.data.articles);
    let infoValues = Object.values(response.data.articles);
    let articleOne = infoValues[0];
    let artOne = Object.entries(articleOne);
    // let articleTwo = infoValues[1];
    // let articleThree = infoValues[2];
    // let articleFour = infoValues[3];
    // let articleFive = infoValues[4];
    console.log(info);
    console.log(infoKeys);
    console.log(infoValues);
    console.log(artOne);
    console.log(articleOne);
    // console.log(articleTwo);
    // console.log(articleThree);
    // console.log(articleFour);
    // console.log(articleFive);
    // console.log(infoValues);
    // console.log(info);

    infoValues.forEach(res => {
      axios
        .get(`https://lambda-times-backend.herokuapp.com/articles`)
        .then(res => {
          // console.log(res.data.articles);
          const card = articleCreator(info[0]); //const card = articleCreator(info[0]);  Closer
          const cards = document.querySelector(".cards-container");
          cards.appendChild(card);
        });
    });
    // .catch(error => {
    //   console.log("Error:", error);
    // });
  });
