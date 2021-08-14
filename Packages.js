const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  };

let packages = [
    {name: "Docker",
    description: "A software platform used for building applications based on containers — small and lightweight execution environments."},
    {name: "Apache Maven",
    description: "A default package manager used for the Java programming language and the Java runtime environment."},
    {name: "NuGet",
    description: "A free and open source package manager used for the Microsoft development platforms including .NET."},
    {name: "RubyGems",
    description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."},
    {name: "npm",
    description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code."},
    {name: "Containers",
    description: "A single place for your team to manage Docker images and decide who can see and access your images."}
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

const cardBuilder = (array) => {
    let domString = "";
    array.forEach((taco) => {
        domString += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title" id="n">${taco.name}</h5>
                <p class="card-text" id="d">${taco.description}</p>
                <a href="#" class="btn btn-primary">Delete</a>
            </div>
        </div>`
    });
    renderToDom("#cardsContainer", domString);
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    const newPackage = {
        name: document.querySelector('#packageName').value,
        description: document.querySelector('#packageDescription').value
    };
    packages.push(newPackage);
    cardBuilder(packages);
    document.querySelector('#formContainer').reset();
};

const buttonEvents = () => {
    document
    .querySelector('#formContainer')
    .addEventListener("submit", handleFormSubmit);
};

const loadPage = () => {
    displayUserProfile();
    cardBuilder(packages);
    buttonEvents();
};

loadPage();
