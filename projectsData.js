const projectArray = [
    { name: "Example 1",
      id: 1, 
      visibility: "private",
      description: "No description" , 
      update: "5 days ago",
      status: "Open"
    },
    { name: "my-goals",
      id: 2, 
      visibility: "",
      description: "No description",
      update: "7 days ago",
      status: "Open"
      },
    { name: "Sample My Goals",
      id: 3,
      visibility: "",
      description: "Goals for NSS Bootcamp",
      update: "1 day ago",
      status: "Open"
      }, 
    { name: "sorting-hat", 
      id: 4, 
      visibility: "",
      description: "Sort yourself into a hogwarts house!",
      update: "3 days ago",
      status: "Closed"
      },
    { name: "product-cards",
      id: 5,
      visibility: "private",
      description: "Product cards for an online store",
      update:"7 days ago",
      status: "Open"
      },
    { name: "calculator-app",
      id: 6,
      visibility: "", 
      description: "Basic calculator app for mobile device",
      update:"17 days ago",
      status:   "Closed"
      },
    
  ];
  
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
  
  const findNumofOpenProjects = (array, status) => {
    return array.filter((obj) => obj.status === status).length;
  };

  const findNumofClosedProjects = (array, status) => {
    return array.filter((obj) => obj.status === status).length;
  }; 
 

  const createProjectCard = (array) => {
    let icon= `
    <div id="sortIcon" class="sortBtnContainer">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Sort
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a id="sortName" class="dropdown-item" href="#">Name</a>
        <a id="sortUpdate" class="dropdown-item" href="#">Recently Updated</a>
        <a id="sortReverseUp" class="dropdown-item" href="#">Least Recently Updated</a>
      </div>
    </div>
  </div>`
    let domString = icon + ` <div id="cardHeader" class="card-header"> 
    ${findNumofOpenProjects(projectArray,"Open")} Open  ✔  ${findNumofClosedProjects(projectArray, "Closed")} Closed
  </div> `;
    array.forEach((project) => {
    domString += `
    <div class="card" 
    <div class="card-body">
     <pre> ${project.name} ${project.visibility}           ${project.description}</pre> <br>
     🕔 Updated ${project.update}
    </div>
  </div>`
 
});
  
        renderToDom("#loopContainer", domString)
        const dropName = document.querySelector("#sortName");
        dropName.addEventListener("click", sortBtn);
        const dropUpdate = document.querySelector("#sortUpdate");
        dropUpdate.addEventListener("click", sortBtn);
        const dropVisibility = document.querySelector("#sortReverseUp");
        dropVisibility.addEventListener("click", sortBtn);
};
  
const searchProjects = (event) =>{
    const searchString = event.target.value.toLowerCase();
    const filteredProjects = projectArray.filter((project) =>
   { 
    return (
        project.name.toLowerCase().includes(searchString) 
        || 
        project.description.toLowerCase().includes(searchString)
        );
    });
    createProjectCard(filteredProjects);
  };
  
  const orderByName = (array) => {        
    return array.sort(function (a,b){
      const projOne= a.name.toUpperCase(); 
      const projTwo= b.name.toUpperCase();
      if (projOne < projTwo){
        return -1;
      };
      if (projTwo > projOne){
        return 1;
      }
        return 0;
      });
   };
 
 const orderByUpdate = (array) => {
   return array.sort(function (a,b) {
     const projOne = parseInt(a.update);
     const projTwo = parseInt(b.update);
     return projOne - projTwo; 
    });
  };
 
   const sortBtn= (event) => {
      const targetId = event.target.id;
      const targetType = event.target.type;
      if (targetId === "sortName") {
     orderByName(projectArray);
     createProjectCard(projectArray);
      };
      if (targetId === "sortUpdate"){
        orderByUpdate(projectArray);
        createProjectCard(projectArray);
      };
      if (targetId === "sortReverseUp"){
        orderByUpdate(projectArray).reverse();
        createProjectCard(projectArray);
      };
    };
  
    const submitButton= (event) => {
   event.preventDefault();
      const project = {
          name: document.querySelector("#nameInput").value,
          visibility:"",
          description: document.querySelector("#descriptionInput").value,
          update: "1 second ago",
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
    
const searchEvents = () => {
      const searchBar = document.querySelector("#searchBar");
      searchBar.addEventListener('keyup',searchProjects);
     };



const init= () => {
  displayUserProfile();
  createProjectCard(projectArray);
  formEvents(); 
  searchEvents();
  
 };
 
 init();
 
