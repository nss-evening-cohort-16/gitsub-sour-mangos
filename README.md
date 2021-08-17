# GitSub  [![Netlify Status](https://api.netlify.com/api/v1/badges/4906406a-a6f6-4ea6-a51c-fccd461fd8bb/deploy-status)](https://app.netlify.com/sites/sour-mangos-gitsub/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

In the world of programming, most know the name "Github". The well-respected site offers an intuitively designed experience for users to store, manage, and track Git repositories. The Gitsub web app is designed by a collaborative team of students to replicate some of the form and functions of Github.

[View App](https://sour-mangos-gitsub.netlify.app/)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
```
$ git clone git@github.com:nss-evening-cohort-16/gitsub-sour-mangos.git
$ cd gitsub-sour-mangos
```
## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is any current or hopeful software engineers looking to house and display their projects and applications for potential collaboration and deployment.
- They want to be able to display their overview page where they can pin created repositories.
- They also want to have a dedicated repositories page which will house current repos, while also allowing the user to utilize a form to create new repositories.  
- They also want to have a dedicated projects page which will house current projects, while also allowing the user to utilize a form to create new projects.
- They also want to have a dedicated packages page which will house current packages, while also allowing the user to utilize a form to create new packages.
- The problem that this app solves is it houses user's applications, finished or in-progress, in one location that is easily accessible and shareable to co-workers, teammates, and future employers.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Created 4 HTML pages (Overview, Repositories, Projects, and Packages) to replicate the GitHub website
- Overview: Includes an About Me section and a checkbox form that allows a user to add a pinned repo. You can also delete a pinned repo by unchecking the checkbox.
- Repositories: Includes a form that allows a user to create a new repo or favorite an existing repo.
- Projects: Includes a form that allows a user to add a new project. Allows users to search through the projects with a search bar. Users can also sort using the sort tool.
- Packages: Includes a form that allows a user to add a new package. Users can delete and search through packages.

## Video Walkthrough of GitSub <!-- A loom link is sufficient -->
<!-- REPLACE THIS https://www.loom.com/share/c8d85532094a4b48b69199ee2a240804 -->

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](https://sour-mangos-gitsub.netlify.app/)
- [Wireframes](https://www.figma.com/file/8vIX1yEXd2UxdWARbWqAje/GitSub?node-id=0%3A1)
- [Project Board](https://github.com/nss-evening-cohort-16/gitsub-sour-mangos/projects/1)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
This function allows users to search through packages.
```
const search = (e) => {
    const searchString = e.target.value;
    const filteredPackages = packages.filter((box) => {
        return (box.name.includes(searchString));
    });
    cardBuilder(filteredPackages);
    console.log(searchString)
};
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
![GitSub_Overview](https://user-images.githubusercontent.com/83558122/129643854-c4c30b7a-de88-4a39-a8a5-e9cabca1b5fb.PNG)
![RepositoriesScreenshot](https://user-images.githubusercontent.com/83558122/129643970-18ddead5-5c56-4630-a8c3-46b0fe728993.png)
![GitsubScreenShot](https://user-images.githubusercontent.com/78558344/129642202-e5862aee-49bb-48e1-825e-112839bab957.png)
![PackagesScreenshot](https://user-images.githubusercontent.com/83558122/129643917-9ec6aa30-11b8-4df8-94a4-55ccd2ff64f1.png)

## Contributors
- [Albert Chittaphong](https://github.com/albertchitta)
- [Meredith Marcum](https://github.com/butterbeerbeginner)
- [Grace Sutherland](https://github.com/rgs1690)
- [Halie Dyer](https://github.com/DyerHL)
