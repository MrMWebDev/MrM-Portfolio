const webProjects = [
    { title: "Portfolio Website", desc: "Built with HTML, CSS, JS", link:"#" },
    { title: "Etsy Product Viewer", desc: "Loads Etsy listings automatically", link:"#" },
];

const prints = [
    { title: "Bookend Planter", img: "images/bookend planter.png" },
    { title: "Custom Keychain", desc: "images/keychain.png" },
];

function displayProjects(section, items) {
    const container = document.querySelector(section);
    container.innerHTML = items.map(item => `
        <div class="card">
            ${item.img ? `<img src="${item.img}" alt="${item.title}" style="width:100%;border-radius:8px;">` : ""}
            <h3>${item.title}</h3>
            <p>${item.desc || ""}</p>
            ${item.link ? `<a href="${item.link}" target="_blank">View</a>` : ""}
        </div>
    `).join("");
}

displayProjects(".projects", webProjects);
displayProjects(".prints", prints);