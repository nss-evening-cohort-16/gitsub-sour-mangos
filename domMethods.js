import { pinnedRepos} from "./main.js";

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

// Builds the pinnedRepos array
const pinnedReposBuilder = (array) => {
  let domString = ""

  pinnedRepos.forEach((repo, i) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${repo.name}</h5>
          <p class="card-text">${repo.description}</p>
          <p>${repo.programmingLanguage}</p>
          <p>${repo.favoriteCount}</p>
          <p>${repo.branchCount}</p>
        </div>
      </div>
    `;
  });

  renderToDom("#cardContainer", domString);
};

// Displays User Profile
const displayUserProfile = () => {
  const domString = `
    <div id="profile" class="card" style="width: 18rem;">
      <img class="card-img-top" src="https://avatars.githubusercontent.com/u/6998954?v=4" alt="user profile image">
      <div class="card-body">
        <h4 class="card-title">Monica Powell</h4>
        <h5 class="card-text">M0nica</h5>
        <p>Building tech to elevate people. Founder of React Ladies a community for React JS developers.</p>
        <button type="button" class="btn btn-secondary" id="followBtn">Follow</button>
        <button type="button" class="btn btn-secondary">Sponsor</button>
        <button type="button" class="btn btn-secondary">...</button>
        <p>followers</p>
        <p>following</p>
      </div>
      <ul class="list-group list-group-flush">
        <li>New York, New York</li>
        <li>github@aboutmonica.com</li>
        <li>https://www.aboutmonica.com</li>
        <li>@indigitalcolor</li>
      </ul>
      <ul class="list-group list-group-flush">
        <h6>Highlights</h6>
        <li>Arctic Code Vault Contributor</li>
        <li>GitHub Star</li>
        <li>PRO</li>
      </ul>
      <ul class="list-group list-group-flush">
        <h6>Oragnizations</h6>
      </ul>
      <ul class="list-group list-group-flush">
        <h6>Sponsors</h6>
      </ul>
    </div>
  `;

  renderToDom("#userProfile", domString);
};

export {pinnedReposBuilder, displayUserProfile};
