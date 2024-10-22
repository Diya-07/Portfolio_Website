const projects = [
    {
        title: "JavaScript Project 1: Prime Number Finder",
        description: "A brief description of project 1, showcasing what it does.",
        url: "Prime_Number_Finder/index.html",
    },
    {
        title: "JavaScript Project 2: Deals with Events",
        description: "A brief description of project 2, showcasing what it does.",
        url: "Events_javascript/index.html",
    },
    {
        title: "JavaScript Project 3: Guess Game",
        description: "A brief description of project 3, showcasing what it does.",
        url: "Guess Game/index.html",
    },
];

// Function to display projects
function displayProjects() {
    const projectList = document.getElementById("project-list");
    projects.forEach((project) => {
        const projectItem = document.createElement("div");
        projectItem.innerHTML = `
            <h3 style="color: #4a90e2;">${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" style="color: #4a90e2;">View Project</a>
            <hr /> <!-- Adds a horizontal line for separation -->
        `;
        projectList.appendChild(projectItem);
    });
}

// Call the function to display projects when the page loads
window.onload = displayProjects;
