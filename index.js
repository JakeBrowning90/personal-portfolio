let projectsList = [
    {"title": "I Spy", "repoLink":"https://github.com/JakeBrowning90/i-spy", "liveLink":"https://jakebrowning90.github.io/i-spy/", "thumbnail":"img/ispyThumbnail.jpg", "desc":"A hidden-object game built with JavaScript and an online scoreboard in Cloud Firestore. Locate every item as fast as possible to join the scoreboard."},
    {"title": "Memory", "repoLink":"https://github.com/JakeBrowning90/memory-cards", "liveLink":"https://jakebrowning90.github.io/memory-cards/", "thumbnail":"img/memoryThumbnail.jpg", "desc":"A React card game. Select all 25 cards without repeating yourself. Be careful: the cards move to new locations after each selection."},
    {"title": "CV Builder", "repoLink":"https://github.com/JakeBrowning90/cv-project", "liveLink":"https://jakebrowning90.github.io/cv-project/", "thumbnail":"img/cvBuilderThumbnail.jpg", "desc":"A React app for building and editing a CV. Collapsable forms allow input for a header, education, and work experience components. "},
    {"title": "Battleship", "repoLink":"https://github.com/JakeBrowning90/battleship", "liveLink":"https://jakebrowning90.github.io/battleship/", "thumbnail":"img/battleshipThumbnail.jpg", "desc":"The classic board game in JavaScript, playable by 1 or 2 players. Place ships manually or automatically, and be the first to sink the opposing fleet."},
    {"title": "Weather", "repoLink":"https://github.com/JakeBrowning90/weather-app", "liveLink":"https://jakebrowning90.github.io/weather-app/", "thumbnail":"img/weatherThumbnail.jpg", "desc":"Check the weather in more than 200,000 cities using the OpenWeather API. You can also toggle between metric imperial measurements."},
    {"title": "To-Do List", "repoLink":"https://github.com/JakeBrowning90/to-do-list", "liveLink":"https://jakebrowning90.github.io/to-do-list/", "thumbnail":"img/kiwi.jpg", "desc":"Add, categorize, edit, and delete tasks on a personal list. The list also persists on a user’s machine using the localStorage property."},
    {"title": "Tic-Tac-Toe", "repoLink":"https://github.com/JakeBrowning90/tic-tac-toe", "liveLink":"https://jakebrowning90.github.io/tic-tac-toe/", "thumbnail":"img/tictactoeThumbnail.jpg", "desc":"Play a JavaScript version of the old-fashioned game against your friend."},
];

const  showProjects = () => {
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
        repoLink.setAttribute("rel", "noopener noreferrer");

        let githubLogo = document.createElement("img");
        githubLogo.classList.add("githubLogo");
        githubLogo.setAttribute("src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg");

        let titleLink = document.createElement("a");
        titleLink.classList.add("titleLink");
        titleLink.setAttribute("href", projectsList[project].liveLink)
        titleLink.setAttribute("target", "_blank")
        titleLink.setAttribute("rel", "noopener noreferrer")
  
        let projectThumbnail = document.createElement("img");
        projectThumbnail.setAttribute("src", projectsList[project].thumbnail);
        projectThumbnail.setAttribute("alt", projectsList[project].title + " link");
        projectThumbnail.classList.add("projectThumbnail");

        projectCard.appendChild(projectThumbnail);
        projectCard.appendChild(projectHeading);
        projectHeading.appendChild(titleLink);
        titleLink.appendChild(projectTitle);

        projectHeading.appendChild(repoLink);
        repoLink.appendChild(githubLogo);
  
        projectCard.appendChild(projectDesc);
       
        projectsDisplay.appendChild(projectCard);
    }
}

const swapStyles = () => {
    const body = document.getElementById("body");
    const links = document.getElementsByTagName("a:link");
    body.classList.toggle("darkTheme");
    links.classList.toggle("darkTheme");
}

const extendStripes = () => {
    const mainContent = document.querySelector(".mainContent");
    const aboutEnd = document.querySelector(".aboutEnd");
    const projectsEnd = document.querySelector(".projectsEnd");
    const educationEnd = document.querySelector(".educationEnd");
    const purpleStripe = document.querySelector(".vert4")
    const greenStripe = document.querySelector(".vert3")
    const orangeStripe = document.querySelector(".vert2")
   
    purpleStripe.style.height = (aboutEnd.offsetTop - mainContent.offsetTop + 10) + "px";
    greenStripe.style.height = (projectsEnd.offsetTop - mainContent.offsetTop + 20) + "px";
    orangeStripe.style.height = (educationEnd.offsetTop - mainContent.offsetTop + 30) + "px";
}


const styleToggle = document.querySelector(".styleToggle")
styleToggle.addEventListener("click", swapStyles);
showProjects();

extendStripes();
window.onresize = extendStripes;