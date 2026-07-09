const container = document.getElementById("team-container");

TEAM.forEach(member => {

    const card = document.createElement("div");
    card.className = "member";

    card.innerHTML = `
        <img src="https://github.com/${member.github}.png" alt="${member.name}">
        <h2>${member.name}</h2>
        <div class="role">${member.role}</div>
        <p>${member.description}</p>

        <a class="github"
           href="https://github.com/${member.github}"
           target="_blank">
            GitHub
        </a>
    `;

    container.appendChild(card);

});