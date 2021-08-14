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

// Displays About Area
const displayAboutArea = () => {
  const domString = `
    <h1>Hi, I'm Monica 👋🏾 👩🏾‍💻</h1>
    <img src="https://raw.githubusercontent.com/M0nica/M0nica/master/gh-header-image-cropped.png" alt="banner that says Monica Powell - software engineer, content creator and community organizer alongside a cartoon illustration of Monica">
    I'm a software engineer who is passionate about making open-source more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include ReactJS, Jamstack (JavaScript, APIs + Markup) and GraphQL. I recently was selected to be an inaugural <a href="https://stars.github.com/">GitHub Star 🌟</a> based on my involvement in the tech community.  My interest in the React ecosystem led me to launch <a href="https://www.meetup.com/React-Ladies/">React Ladies</a>, a community for women and non-binary ReactJS developers.
    
    
    <h2>Find me around the web 🌎:</h2> <a href="https://github.com/sponsors/M0nica"><img align="left" width="150" height="150" src="https://github.com/M0nica/M0nica/blob/main/octomonica/m0nica-octocat-rotating.gif?raw=true"></a>
    <ul>
    <li>Learning in public on <a href="https://www.twitch.tv/blacktechdiva">Twitch</a> or <a href="https://www.monica.dev">monica.dev</a> 📹 ✍🏾</li>
    <li>Tinkering with interactions on <a href="https://codepen.io/m0nica"> Codepen</a> 🏓</li>
    <li>Sharing updates on <a href="https://www.linkedin.com/in/monicampowell/">LinkedIn</a> 💼</li>
    </ul>
  `;

  renderToDom("#aboutArea", domString);
}

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
      <div class="card" id="pinnedRepo" style="width: 27rem;">
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
  displayAboutArea();
  displayCheckBoxForm(repos);
  buttonEvents();
};

init ();
