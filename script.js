
const projects = [
    {
        title: "Prime Number Finder",
        description: "This project deals with finding prime numbers.",
        link: "Prime_Number_Finder/index.html",
        image: "image1.jpg" 
    },
    {
        title: "Events",
        description: "This project deals with events.",
        link: "Events_javascript/index.html",
        image: "image2.jpg"
    },
    {
        title: "Guess Game",
        description: "This project is basically a guess game.",
        link: "Guess Game/index.html",
        image: "image3.jpg"
    }
];

const projectContainer = document.getElementById('projectContainer');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = "col-md-4 mb-4"; 
    card.innerHTML = `
        <div class="card">
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-primary">View Project</a>
            </div>
        </div>
    `;
    projectContainer.appendChild(card);
});
