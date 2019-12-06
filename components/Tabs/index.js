// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const topic = response.data.topics;
// const entryPoint = document.querySelector(".tab");
// const tab = newTab(topic);
// entryPoint.appendChild(tab);

// .then(response => {
//   console.log(response.data);
//   response.data.forEach(item => {
//     const entryPoint = document.querySelector(".tab");
//     const tab = newTab(item);
//     entryPoint.appendChild(newTopic);
//   });
// });

// const newTabCreator = topic => {
//   const newTab = document.createElement("div");

//   newTab.classList.add("tab");

//   newTab.textContent = "topic here";

//   return newTab;
// };

// entryPoint = document.querySelector(".tab");

// axios
//   .get("https://lambda-times-backend.herokuapp.com/topics")

//   .then(response => {
//     console.log(response.data.topics);
//     response.data.topics.forEach(item => {
//       const newTab = newTabCreator(item);
//       entryPoint.appendChild(newTab);
//     });
//   });
