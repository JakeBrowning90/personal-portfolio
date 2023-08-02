let projectsList = [
    {"title": "I Spy", "repoLink":"https://github.com/JakeBrowning90/wheres-wally", "liveLink":"https://jakebrowning90.github.io/wheres-wally/", "thumbnail":"img/kiwi.jpg", "desc":"A hidden object game built with JavaScript and an online scoreboard in Cloud Firestore."},
    {"title": "Memory Card Game", "repoLink":"", "liveLink":"", "thumbnail":"", "desc":""},
    {"title": "CV Builder", "repoLink":"", "liveLink":"", "thumbnail":"", "desc":""},
    {"title": "Battleship", "repoLink":"", "liveLink":"", "thumbnail":"", "desc":""},
    {"title": "Weather App", "repoLink":"", "liveLink":"", "thumbnail":"", "desc":""},
    {"title": "To-Do List", "repoLink":"", "liveLink":"", "thumbnail":"", "desc":""},
    {"title": "Tic-Tac-Toe", "repoLink":"", "liveLink":"", "thumbnail":"", "desc":""},
];

function showProjects() {
    const projectsDisplay = document.querySelector(".projectsDisplay");
    for (const project in projectsList) {
        let projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");

        let projectTitle = document.createElement("h2");
        projectTitle.textContent = projectsList[project].title;

        let projectDesc = document.createElement("p");
        projectDesc.textContent = projectsList[project].desc;

        let repoLink = document.createElement("a");
        repoLink.setAttribute("href", projectsList[project].repoLink)
        repoLink.setAttribute("target", "_blank")
        repoLink.setAttribute("rel", "noopener noreferrer")
        repoLink.textContent = "View repo";

        let liveLink = document.createElement("a");
        liveLink.setAttribute("href", projectsList[project].liveLink)
        liveLink.setAttribute("target", "_blank")
        liveLink.setAttribute("rel", "noopener noreferrer")
        liveLink.textContent = "View live";

        let projectThumbnail = document.createElement("img");
        projectThumbnail.setAttribute("src", projectsList[project].thumbnail);
        projectThumbnail.setAttribute("alt", projectsList[project].title + " preview");
        projectThumbnail.classList.add("projectThumbnail");

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDesc);
        projectCard.appendChild(repoLink);
        projectCard.appendChild(liveLink);
        projectCard.appendChild(projectThumbnail);

        projectsDisplay.appendChild(projectCard);
    }
}

showProjects();