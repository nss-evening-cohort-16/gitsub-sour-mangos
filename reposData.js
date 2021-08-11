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
    repoFunction(repos);
    repoBtn();
  };

  init();
