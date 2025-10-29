// --- Projects Data ---
const webProjects = [
  { title: "Portfolio Website", desc: "Built with HTML, CSS, JS", link: "#" },
  {
    title: "Etsy Product Viewer",
    desc: "Loads Etsy listings dynamically",
    link: "#",
  },
  {
    title: "3D Print Showcase",
    desc: "Integration of 3D projects in web",
    link: "#",
  },
  {
    title: "JS Animation Demo",
    desc: "Fun animations and scroll effects",
    link: "#",
  },
  { title: "Responsive Layout", desc: "Clean adaptive grid system", link: "#" },
];

// --- 3D Prints (Simulated Etsy) ---
const etsyProducts = [
  {
    title: "Bookend Planter",
    img: "images/bookend planter.jpeg",
    link: "https://mrm3dprints.etsy.com",
  },
  {
    title: "Custom Keychain",
    img: "images/custom keychain.jpg",
    link: "https://mrm3dprints.etsy.com",
  },
  {
    title: "Pumpkin Lantern",
    img: "images/pumpkin1.jpg",
    link: "https://mrm3dprints.etsy.com",
  },
];

// --- Display Projects ---
function displayProjects() {
  const container = document.querySelector(".projects");
  container.innerHTML = webProjects
    .map(
      (p) => `
    <div class="card">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a href="${p.link}" target="_blank">View</a>
    </div>
  `
    )
    .join("");
}

// --- Display Etsy Prints ---
function displayProducts() {
  const container = document.querySelector(".prints");
  container.innerHTML = etsyProducts
    .map(
      (p) => `
    <div class="card">
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <a href="${p.link}" target="_blank">View on Etsy</a>
    </div>
  `
    )
    .join("");
}

// --- Search Filter ---
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll(".projects .card").forEach((card) => {
    const match = card.textContent.toLowerCase().includes(term);
    card.style.display = match ? "block" : "none";
  });
});

// --- Load More Toggle ---
const toggleBtn = document.getElementById("toggleProjects");
toggleBtn.addEventListener("click", () => {
  const container = document.querySelector(".projects");
  container.classList.toggle("limited");
  toggleBtn.textContent =
    toggleBtn.textContent === "Load More" ? "Show Less" : "Load More";
});

// --- Scroll Animation ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
function observeCards() {
  document.querySelectorAll(".card").forEach((card) => observer.observe(card));
}

// --- Initialize ---
displayProjects();
displayProducts();
observeCards();
