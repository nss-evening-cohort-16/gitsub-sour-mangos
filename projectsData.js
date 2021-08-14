const projectArray = [
    { name: "Example 1",
      id: 1, 
      visibility: "private",
      description: "No description" , 
      update: "🕔Updated 44 seconds ago",
      status: "Open"
    },
    { name: "my-goals",
      id: 2, 
      visibility: "",
      description: "No description",
      update: "🕔Updated 7 hours ago",
      status: "Open"
      },
    { name: "Sample My Goals",
      id: 3,
      visibility: "",
      description: "Goals for NSS Bootcamp",
      update: "🕔Updated 1 minute ago",
      status: "Open"
      }, 
    { name: "sorting-hat", 
      id: 4, 
      visibility: "",
      description: "Sort yourself into a hogwarts house!",
      update: "🕔Updated 3 days ago",
      status: "Open"
      },
    { name: "product-cards",
      id: 5,
      visibility: "",
      description: "Product cards for an online store",
      update:"🕔Updated 7 days ago",
      status: "Open"
      },
    { name: "calculator-app",
      id: 6,
      visibility: "", 
      description: "Basic calculator app for mobile device",
      update: "🕔 Updated 17 minutes ago",
      status:   "Closed"
      },
    
  ];
  const visibleArray = []
  
  const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  };

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
  
  const findNumofOpenProjects = (array, status) => {
    return array.filter((obj) => obj.status === status).length;
  };

  const findNumofClosedProjects = (array, status) => {
    return array.filter((obj) => obj.status === status).length;
  }; 
   

  const createProjectCard = (array) => {
    let domString =` <div class="card-header">
    ${findNumofOpenProjects(projectArray,"Open")} Open  ✔  ${findNumofClosedProjects(projectArray, "Closed")} Closed;
  </div>`;
    array.forEach((project) => {
    domString += `
    <div class="card" 
    <div class="card-body">
     <pre> ${project.name} ${project.visibility}           ${project.description}</pre> <br>
      ${project.update}
    </div>
  </div>`
 
});

renderToDom("#loopContainer", domString)
  };
  
  
  
  const submitButton= (event) => {
   event.preventDefault();
      const project = {
          name: document.querySelector("#nameInput").value,
          visibility:"",
          description: document.querySelector("#descriptionInput").value,
          update: "",
          status: "Open"
        };
        
    projectArray.push(project);
    createProjectCard(projectArray);
    document.querySelector("#projectFormContainer").reset();
   
};
  
const formEvents = () => {
     const formElement = document.querySelector("#projectFormContainer");
     formElement.addEventListener("submit", submitButton);
    };


    const init= () => {
        displayUserProfile();
        createProjectCard(projectArray);
        formEvents(); 
    }
    init();
    console.log(projectArray)
