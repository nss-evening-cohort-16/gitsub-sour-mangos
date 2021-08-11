import { pinnedRepos} from "./main.js";

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

// Builds the pinnedRepos array
const pinnedReposBuilder = (array) => {
  let domString = "<h2>Pinned</h2>"

  pinnedRepos.forEach((repo, i) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${repo.name}</h5>
          <p class="card-text">${repo.description}</p>
          <p>${repo.programmingLanguage}</p>
          <p>${repo.favoriteCount}</p>
          <p>${repo.branchCount}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;
  });

  renderToDom("#cardContainer", domString);
};

export {pinnedReposBuilder};
