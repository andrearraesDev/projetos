// Definição dos projetos que serão exibidos no portfólio
const projects = [
  {
    title: "Gerador de Imagens com IA",
    description:
      "Projeto que cria imagens com IA usando HTML, CSS e JavaScript.",
    image: "img/1.png",
    link: "https://andrearraesdev.github.io/-ai-image-generator/",
    github: "#",
    date: "2025-01-11",
  },
  {
    title: "Burger.IO",
    description: "Plataforma para pedidos de hambúrgueres com tecnologia PWA.",
    image: "img/2.png",
    link: "https://andrearraesdev.github.io/burger-delivery/",
    github: "#",
    date: "2025-01-07",
  },
  {
    title: "Netflix com Tailwind CSS",
    description: "Layout inspirado no Netflix, usando HTML e Tailwind CSS.",
    image: "img/3.png",
    link: "https://andrearraesdev.github.io/netflix-UI-tailwind/home.html",
    github: "#",
    date: "2025-01-03",
  },
  {
    title: "Blog de Tecnologia",
    description: "Blog responsivo feito com HTML e Tailwind CSS.",
    image: "img/4.png",
    link: "https://andrearraesdev.github.io/tech-blog-tailwind/",
    github: "#",
    date: "2024-12-28",
  },
  {
    title: "Loja de Roupas",
    description: "Loja online desenvolvida com Bootstrap.",
    image: "img/5.png",
    link: "https://andrearraesdev.github.io/fashion-store-bootstrap/",
    github: "#",
    date: "2024-12-18",
  },
  {
    title: "Portfólio Clean",
    description: "Portfólio clean destacando habilidades e projetos.",
    image: "img/6.png",
    link: "https://andrearraesdev.github.io/portfolio-clean/",
    github: "#",
    date: "2024-12-10",
  },
];

// Seleção do contêiner onde os cards dos projetos serão adicionados
const portfolioContainer = document.getElementById("portfolio");

// Loop para gerar e adicionar os cards de projeto dinamicamente
projects.forEach((project) => {
  const card = document.createElement("div");

  card.classList.add("col"); // Adiciona a classe de coluna para o layout responsivo
  card.innerHTML = `
      <div class="card h-100">
        <a href="${
          project.link
        }" target="_blank" class="text-decoration-none text-white">
          <img src="${project.image}" class="card-img-top" alt="${
    project.title
  }">
          <div class="card-body">
            <h3 class="card-title">${project.title}</h3>
            <p class="card-text">${project.description}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-primary">Ver Projeto</button>
              <button class="btn btn-outline-light">GitHub</button>
            </div>
          </div>
        </a>
        <div class="card-footer">
          <time datetime="${project.date}" class="project-date">${new Date(
    project.date
  ).toLocaleDateString()}</time>
        </div>
      </div>`;

  portfolioContainer.appendChild(card); // Adiciona o card ao contêiner do portfólio
});
