const repos = [
  {
    name: "Pies",
    view: "Public",
    description: "Added"
  },
  {
    name: "Sorting Hat",
    view: "Public",
    description:"Added"
  },
  {
    name: "Space Travel",
    view: "Public",
    description:"Added"
  },
  {
    name: "Pet Adoption",
    view: "Public",
    description:"Added"
  },
  {
    name: "Good Vibes Only",
    view: "Public",
    description:"Added"
  }
];

// Displays User Profile
const displayUserProfile = () => {
  const domString = `
  <div class="profile-card card" style="width: 18rem;">
    <img class="card-img-top" src="https://avatars.githubusercontent.com/u/6998954?v=4" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">firstName lastName</h4>
      <h5 class="card-text">username</h5>
      <p>Building tech to elevate people. Founder of React Ladies a community for React JS developers.</p>
      <button type="button" class="btn btn-secondary">Follow</button>
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

const repoFunction = (array) => {
  let domString = ""
  array.forEach((repo) => {
    domString += 
    `<div class="card">
    <h5 class="card-header">Repository</h5>
    <div class="card-body">
      <h5 class="card-title">${repo.name}</h5>
      <p class="card-text">${repo.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
  })

  renderToDom("#repoContainer", domString);

};

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const repoCallback = (event) => {
  event.preventDefault();
  const newRepo = {
    name: document.querySelector("#infoInput").value,
    description: document.querySelector("#descriptionInput").value
  }
  repos.push(newRepo);

  repoFunction(repos);

};

  const repoBtn = () => {
    const repoBtns = document.querySelector("#formContainer");
    repoBtns.addEventListener("submit", repoCallback);
  };

  const init = () => {
    displayUserProfile();
    repoFunction(repos);
    repoBtn();
  };

  init();
