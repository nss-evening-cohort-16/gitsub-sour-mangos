import {pinnedReposBuilder, displayUserProfile} from "./domMethods.js";

export const pinnedRepos = [];

// Pushes desired repos into the pinnedRepos array
const handlePinRepoBtn = (event) => {
  event.preventDefault();

  if (event.target.id === "createBtn") {
    const enteredRepo = {
      name: document.querySelector("#repoName").value,
      description: document.querySelector("#repoDescription").value,
      programmingLanguage: "",
      favoriteCount: "",
      branchCount: ""
    }

    pinnedRepos.push(enteredRepo);
    pinnedReposBuilder(pinnedRepos);
    document.querySelector("#formContainer").reset();
  }
};

// Event listener for the button events
const buttonEvents = () => {
  document.querySelector("#formContainer").addEventListener("click", handlePinRepoBtn);
};

// Starts the app
const init = () => {
  displayUserProfile();
  buttonEvents("#formContainer");
};

init ();
