let projectsList = [
    {"title": "Map Game", "repoLink":"https://github.com/JakeBrowning90/map-game-front", "liveLink":"https://jakebrowningmapgame.netlify.app/", "thumbnail":"img/mapGameThumbnail.png", "desc":"A fullstack quiz app built with MERN (MongoDB, Express, React, Node.js). Correctly identify U.S. state capitals and reveal interesting trivia on each play session."},
    // {"title": "Blog API", "repoLink":"https://github.com/JakeBrowning90/blog-frontend-2", "liveLink":"https://jakebrowning-blog-frontend.fly.dev/", "thumbnail":"", "desc":""},
    // {"title": "Message Board", "repoLink":"https://github.com/JakeBrowning90/members-only", "liveLink":"https://members-only-jb2024.fly.dev/", "thumbnail":"", "desc":""},    
    {"title": "Art Gallery", "repoLink":"https://github.com/JakeBrowning90/inventory-application", "liveLink":"https://virtual-gallery-morning-fire-4767.fly.dev/", "thumbnail":"img/artMuseumThumbnail.jpg", "desc":"An inventory management app built using Node.js, Express, and MongoDB. Authenticated users can create, update, and delete artists and paintings from the database."},
    {"title": "I Spy", "repoLink":"https://github.com/JakeBrowning90/i-spy", "liveLink":"https://jakebrowning90.github.io/i-spy/", "thumbnail":"img/ispyThumbnail.jpg", "desc":"A hidden-object game built with JavaScript and online scorekeeping in Cloud Firestore. Locate every item as fast as possible to join the scoreboard."},
    {"title": "Memory", "repoLink":"https://github.com/JakeBrowning90/memory-cards-2", "liveLink":"https://jake-browning-memory-cards-2.netlify.app/", "thumbnail":"img/memory2Thumbnail.jpg", "desc":"A React card game using a NASA image API. Click each card only once, but watch out: the cards move after every turn and no two games are the same."},
    // {"title": "Memory (Mario version)", "repoLink":"https://github.com/JakeBrowning90/memory-cards", "liveLink":"https://jakebrowning90.github.io/memory-cards/", "thumbnail":"img/memoryThumbnail.jpg", "desc":"A React card game. Select all 25 cards without repeating yourself. Be careful: the cards move to new locations after each selection."},
    {"title": "CV Builder", "repoLink":"https://github.com/JakeBrowning90/cv-application", "liveLink":"https://jakebrowning-cv-builder.netlify.app/", "thumbnail":"img/cvBuilderThumbnail.jpg", "desc":"A React app for building and editing a CV. Collapsable forms allow input for a header, summary, education, and work experience components."},
    {"title": "Battleship", "repoLink":"https://github.com/JakeBrowning90/battleship", "liveLink":"https://jakebrowning90.github.io/battleship/", "thumbnail":"img/battleshipThumbnail.jpg", "desc":"The classic board game in JavaScript, playable by 1 or 2 players. Place ships manually or automatically, and be the first to sink the opposing fleet."},
    {"title": "Weather", "repoLink":"https://github.com/JakeBrowning90/weather-app", "liveLink":"https://jakebrowning90.github.io/weather-app/", "thumbnail":"img/weatherThumbnail.jpg", "desc":"Check the weather in more than 200,000 cities using the OpenWeather API. You can also toggle between metric and imperial measurements."},
    {"title": "To-Do List", "repoLink":"https://github.com/JakeBrowning90/to-do-list", "liveLink":"https://jakebrowning90.github.io/to-do-list/", "thumbnail":"img/todoThumbnail.jpg", "desc":"Add, categorize, edit, and delete tasks on a personal list. The list also persists on a user’s machine using the localStorage property."},
    {"title": "Tic-Tac-Toe", "repoLink":"https://github.com/JakeBrowning90/tic-tac-toe", "liveLink":"https://jakebrowning90.github.io/tic-tac-toe/", "thumbnail":"img/tictactoeThumbnail.jpg", "desc":"Play a JavaScript version of the old-fashioned game against your friend."},
];

const  showProjects = () => {
    const projectsDisplay = document.querySelector(".projectsDisplay");
    for (const project in projectsList) {
        let projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");

        let projectThumbnail = document.createElement("img");
        projectThumbnail.setAttribute("src", projectsList[project].thumbnail);
        projectThumbnail.setAttribute("alt", projectsList[project].title + " link");
        projectThumbnail.classList.add("projectThumbnail");

        let projectText = document.createElement("div");
        projectText.classList.add("projectText");

        let projectHeading = document.createElement("div");
        projectHeading.classList.add("projectHeading");

        let projectTitle = document.createElement("h2");
        projectTitle.classList.add("projectTitle");
        projectTitle.textContent = projectsList[project].title;

        let projectDesc = document.createElement("p");
        projectDesc.classList.add("projectDesc");
        projectDesc.textContent = projectsList[project].desc;

        let repoLink = document.createElement("a");
        repoLink.classList.add("projectLinkIcon");
        repoLink.setAttribute("href", projectsList[project].repoLink)
        repoLink.setAttribute("target", "_blank")
        repoLink.setAttribute("rel", "noopener noreferrer");

        let githubLogo = document.createElement("i");
        githubLogo.classList.add("devicon-github-original");
       
        let titleLink = document.createElement("a");
        titleLink.classList.add("titleLink");
        titleLink.setAttribute("href", projectsList[project].liveLink)
        titleLink.setAttribute("target", "_blank")
        titleLink.setAttribute("rel", "noopener noreferrer")
  
        projectCard.appendChild(projectThumbnail);

        projectCard.appendChild(projectText);
        projectText.appendChild(projectHeading);

        projectHeading.appendChild(titleLink);
        titleLink.appendChild(projectTitle);

        projectHeading.appendChild(repoLink);
        repoLink.appendChild(githubLogo);

        projectText.appendChild(projectDesc);

        projectsDisplay.appendChild(projectCard);
    }
}

const swapStyles = () => {
    const body = document.getElementById("body");
    body.classList.toggle("darkTheme");
}

const extendStripes = () => {
    const mainContent = document.querySelector(".mainContent");
    const aboutEnd = document.querySelector(".aboutEnd");
    const projectsEnd = document.querySelector(".projectsEnd");
    const educationEnd = document.querySelector(".educationEnd");
    const purpleStripe = document.querySelector(".vert4");
    const greenStripe = document.querySelector(".vert3");
    const orangeStripe = document.querySelector(".vert2");
   
    purpleStripe.style.height = (aboutEnd.offsetTop - mainContent.offsetTop + 10) + "px";
    greenStripe.style.height = (projectsEnd.offsetTop - mainContent.offsetTop + 20) + "px";
    orangeStripe.style.height = (educationEnd.offsetTop - mainContent.offsetTop + 30) + "px";
}

const styleToggle = document.querySelector(".styleToggle")
styleToggle.addEventListener("click", swapStyles);
showProjects();

setTimeout(extendStripes, 20);
window.onresize = extendStripes;