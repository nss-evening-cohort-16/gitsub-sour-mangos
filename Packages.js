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
    cardBuilder(packages);
    buttonEvents();
};

loadPage();
