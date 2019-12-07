// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function newTabCreator(arg) {
  const newTab = document.createElement("div");

  newTab.classList.add("tab");

  newTab.textContent = arg.topics;
  

  return newTab;
}

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics/`)

  .then(response => {
    // let newTabList = Array.from(response.data.topics);
    // console.log(newTabList);

    // -----------------  Empty Tabs ------------------>
    // for (let i = 0; i < newTabList.length; i++) {
    //   const newTab = newTabCreator(newTabList[i]);
    //   const newTabs = document.querySelector(".topics");
    //   newTabs.appendChild(newTab);
    // }
    response.data.topics.forEach(item => {
      const newTab = newTabCreator(response.data); //  const newTab = newTabCreator(item); displays empty tabs
      console.log(newTab);
      const newTabs = document.querySelector(".topics");
      newTabs.appendChild(newTab);
    });
  })
  .catch(error => {
    console.log("Error:", error);
  });
