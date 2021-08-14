import { repos } from "./dataArray.js";

// Render to DOM
const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

// Displays User Profile
const displayUserProfile = () => {
  const domString = `
  <div class="profile-card card" style="width: 18rem;">
    <img class="card-img-top" src="https://avatars.githubusercontent.com/u/6998954?v=4" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Monica Powell</h4>
      <h5 class="card-text">M0nica</h5>
      <p>Building tech to elevate people. Founder of React Ladies a community for React JS developers.</p>
      <button type="button" class="btn btn-secondary">Follow</button>
      <button type="button" class="btn btn-secondary">Sponsor</button>
      <button type="button" class="btn btn-secondary">...</button>
      <p><i class="fas fa-user-friends"></i> followers</p>
      <p>following</p>
    </div>
    <ul class="list-group list-group-flush">
      <li><i class="fas fa-map-marker-alt"></i> New York, New York</li>
      <li><i class="fas fa-envelope"></i> github@aboutmonica.com</li>
      <li><i class="fas fa-link"></i> https://www.aboutmonica.com</li>
      <li><i class="fab fa-twitter"></i> @indigitalcolor</li>
    </ul>
    <ul class="list-group list-group-flush">
      <h6>Highlights</h6>
      <li>Arctic Code Vault Contributor</li>
      <li><i class="fas fa-star"></i> GitHub Star</li>
      <li><i class="far fa-star"></i> PRO</li>
    </ul>
    <ul class="list-group list-group-flush">
      <h6>Organizations</h6>
    </ul>
    <ul class="list-group list-group-flush">
      <h6>Sponsors</h6>
    </ul>
  </div>
  `;

  renderToDom("#userProfile", domString);
};

// Creates checkboxes to select the repos to pin
const displayCheckBoxForm = (array) => {
  let domString = "";
  
  array.forEach((repo, i) => {
    domString += `
      <form class="form-check">
        <input class="form-check-input" type="checkbox" value="${repo.name}" id="flexCheckDefault" name="repo">
        <label class="form-check-label" for="flexCheckDefault">
          ${repo.name}
        </label>
      </form>
    `;
  });

  domString += `<br><br><input id="createBtn" type="submit" value="Pin Repos">`;

  renderToDom("#cbContainer", domString);
};

// Pushes desired repos into the pinnedRepos array
const handlePinRepoBtn = (event) => {
  event.preventDefault();

  if (event.target.id === "createBtn") {
    const checkedRepos = [];
    const pinnedRepos = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
      repos.forEach(repo => {
        if (repo.name === checkbox.value) {
          pinnedRepos.push(repo);
        }
      })
    });

    pinnedReposBuilder(pinnedRepos);
  }
};

// Builds the pinnedRepos array
const pinnedReposBuilder = (array) => {
  let domString = "";

  array.forEach((repo, i) => {
    domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${repo.name}</h5>
          <p class="card-text">${repo.description}</p>
        </div>
      </div>
    `;
  });

  renderToDom("#cardContainer", domString);
};

// Event listener for the button events
const buttonEvents = () => {
  document.querySelector("#createBtn").addEventListener("click", handlePinRepoBtn);
};

// Starts the app
const init = () => {
  displayUserProfile();
  displayCheckBoxForm(repos);
  buttonEvents();
};

init ();
