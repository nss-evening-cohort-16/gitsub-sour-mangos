const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  };

let packages = [
    {/*icon: <i class="fab fa-docker fa-xs"></i>,*/
    name: "Docker",
    description: "A software platform used for building applications based on containers — small and lightweight execution environments."},
    {/*icon: <i class="fas fa-feather-alt fa-xs"></i>,*/
    name: "Apache Maven",
    description: "A default package manager used for the Java programming language and the Java runtime environment."},
    {/*icon: <i class="fas fa-globe-americas fa-xs"></i>,*/
    name: "NuGet",
    description: "A free and open source package manager used for the Microsoft development platforms including .NET."},
    {/*icon: <i class="far fa-gem fa-xs"></i>,*/
    name: "RubyGems",
    description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."},
    {/*icon: <i class="fab fa-npm fa-xs"></i>,*/
    name: "npm",
    description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code."},
    {/*icon: <i class="fas fa-toolbox fa-xs"></i>,*/
    name: "Containers",
    description: "A single place for your team to manage Docker images and decide who can see and access your images."}
];

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

const cardBuilder = (array) => {
    let domString = "";
    array.forEach((taco, i) => {
        domString += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title" id="n">${taco.name}</h5>
                <p class="card-text" id="d">${taco.description}</p>
                <button type="button" class="btn btn-light" id="${i}">Delete</button>
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

const remove = (event) => {
    const targetID = event.target.id;
    const targetType = event.target.type;
    if (targetType === "button") {
        let deleted = packages.splice(targetID, 1);
        cardBuilder(packages);
    }
};

const buttonEvents = () => {
    document
    .querySelector('#formContainer')
    .addEventListener("submit", handleFormSubmit);
    document
    .querySelector("#cardsContainer")
    .addEventListener("click", remove);
};

const loadPage = () => {
    displayUserProfile();
    cardBuilder(packages);
    buttonEvents();
};

loadPage();
