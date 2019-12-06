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

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(response => {
  let info = Object.entries(response.data.articles);
  let infoKeys = Object.values(response.data.articles);
  let articleOne = infoKeys[0];
  let articleTwo = infoKeys[1];
  let articleThree = infoKeys[2];
  let articleFour = infoKeys[3];
  let articleFive = infoKeys[4];
  
  console.log(articleOne)
  console.log(articleTwo)
  console.log(articleThree)
  console.log(articleFour)
  console.log(articleFive)
  console.log(infoKeys)
  console.log(info);
})

function articleCreator(obj) {
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

  headline.textContent = obj.headline;
  img.src = obj.authorPhoto;
  name.textContent = obj.authorName;


  console.log(headline)

  return card;
}

// let cardsContainer = document.querySelector(".cards-container");
// cardsContainer.appendChild(card);