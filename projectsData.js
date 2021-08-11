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
        createProjectCard(projectArray);
        formEvents(); 
    }
    init();
    console.log(projectArray)