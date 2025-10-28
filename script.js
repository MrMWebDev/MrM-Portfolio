const webProjects = [
    { title: "Portfolio Website", desc: "Built with HTML, CSS, JS", link:"#" },
    { title: "Etsy Product Viewer", desc: "Loads Etsy listings automatically", link:"#" },
];

const prints = [
    { title: "Bookend Planter", img: "images/bookend planter.jpeg" },
    { title: "Custom Keychain", img: "images/keychain.jpg" },
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

// Animate cards on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    }); 
});

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

const searchInput = document.getElementById('search');
searchInput.addElementListener('input', e => {
    const term = e.target.value.toLowerCase();
    document.querySelectoerAll('.projects .card').forEach(card => {
        const match = card.textContent.toLowerCase().includes(term);
        card.style.display = match ? 'block' : 'none';
    });
});
