let projectsList = [
    {"title": "I Spy", "repoLink":"https://github.com/JakeBrowning90/i-spy", "liveLink":"https://jakebrowning90.github.io/i-spy/", "thumbnail":"img/ispyThumbnail.jpg", "desc":"A hidden-object game built with JavaScript and an online scoreboard in Cloud Firestore. Locate every item as fast as possible to join the scoreboard."},
    {"title": "Memory", "repoLink":"", "liveLink":"", "thumbnail":"img/memoryThumbnail.jpg", "desc":"A React card game. Select all 25 cards without repeating yourself. Be careful: the cards move to new locations after each selection."},
    {"title": "CV Builder", "repoLink":"", "liveLink":"", "thumbnail":"img/cvBuilderThumbnail.jpg", "desc":"A React app for building and editing a CV. Collapsable forms allow input for a header, education, and work experience components. "},
    {"title": "Battleship", "repoLink":"", "liveLink":"", "thumbnail":"img/battleshipThumbnail.jpg", "desc":"The classic board game in JavaScript, playable by 1 or 2 players. Place ships manually or automatically, and be the first to sink the opposing fleet."},
    {"title": "Weather", "repoLink":"", "liveLink":"", "thumbnail":"img/weatherThumbnail.jpg", "desc":"Check the weather in more than 200,000 cities using the OpenWeather API. You can also toggle between metric imperial measurements."},
    {"title": "To-Do List", "repoLink":"", "liveLink":"", "thumbnail":"img/kiwi.jpg", "desc":"Add, categorize, edit, and delete tasks on a personal list. The list also persists on a user’s machine using the localStorage property."},
    {"title": "Tic-Tac-Toe", "repoLink":"", "liveLink":"", "thumbnail":"img/tictactoeThumbnail.jpg", "desc":"Play a JavaScript version of the old-fashioned game against your friend."},
];

function showProjects() {
    const projectsDisplay = document.querySelector(".projectsDisplay");
    for (const project in projectsList) {
        let projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");

        let projectHeading = document.createElement("div");
        projectHeading.classList.add("projectHeading");

        let projectTitle = document.createElement("h2");
        projectTitle.classList.add("projectTitle");
        projectTitle.textContent = projectsList[project].title;

        let projectDesc = document.createElement("p");
        projectDesc.classList.add("projectDesc");
        projectDesc.textContent = projectsList[project].desc;

        let repoLink = document.createElement("a");
        repoLink.setAttribute("href", projectsList[project].repoLink)
        repoLink.setAttribute("target", "_blank")
        repoLink.setAttribute("rel", "noopener noreferrer")
        // repoLink.textContent = "View repo";
        let githubLogo = document.createElement("img");
        githubLogo.classList.add("githubLogo");
        githubLogo.setAttribute("src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg");



        // let liveLink = document.createElement("a");
        // liveLink.setAttribute("href", projectsList[project].liveLink)
        // liveLink.setAttribute("target", "_blank")
        // liveLink.setAttribute("rel", "noopener noreferrer")
        // liveLink.textContent = "View live";

        let projectThumbnail = document.createElement("img");
        projectThumbnail.setAttribute("src", projectsList[project].thumbnail);
        projectThumbnail.setAttribute("alt", projectsList[project].title + " preview");
        projectThumbnail.classList.add("projectThumbnail");

        projectCard.appendChild(projectThumbnail);
        projectCard.appendChild(projectHeading);
        projectHeading.appendChild(projectTitle);
        projectHeading.appendChild(repoLink);
        repoLink.appendChild(githubLogo);
        // projectHeading.appendChild(liveLink);
        // projectCard.appendChild(projectTitle);
        // projectCard.appendChild(repoLink);
        // projectCard.appendChild(liveLink);
        projectCard.appendChild(projectDesc);
       
        
        projectsDisplay.appendChild(projectCard);
    }
}

function writeBio() {
    const bioText = document.querySelector(".bioText");
    bioText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet sagittis id consectetur purus ut faucibus. Diam ut venenatis tellus in metus. Quam vulputate dignissim suspendisse in est. Ac orci phasellus egestas tellus rutrum. Quis risus sed vulputate odio ut. Nisi est sit amet facilisis. Felis eget nunc lobortis mattis aliquam faucibus purus in. Cursus euismod quis viverra nibh cras pulvinar. In nibh mauris cursus mattis molestie a iaculis at erat. Semper viverra nam libero justo.";
}

writeBio()
showProjects();