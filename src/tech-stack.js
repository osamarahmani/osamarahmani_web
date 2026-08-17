const TECH_ICON_CDN = "https://cdn.simpleicons.org";

// Frontend → Backend → Cloud/AWS — ordered professionally, no labels shown
const technologies = [
  ["React.js",     "react/61DAFB"],
  ["TypeScript",   "typescript/3178C6"],
  ["JavaScript",   "javascript/F7DF1E"],
  ["Tailwind CSS", "tailwindcss/06B6D4"],
  ["Next.js",      "nextdotjs/FFFFFF"],
  ["HTML5",        "html5/E34F26"],
  ["Node.js",      "nodedotjs/5FA04E"],
  ["Express.js",   "express/FFFFFF"],
  ["Python",       "python/3776AB"],
  ["Django",       "django/44B78B"],
  ["Flask",        "flask/FFFFFF"],
  ["PostgreSQL",   "postgresql/4169E1"],
  ["MongoDB",      "mongodb/47A248"],
  ["Odoo",         "odoo/714B67"],
  ["TensorFlow",   "tensorflow/FF6F00"],
  ["LangChain",    "langchain/1C3C3C"],
  ["n8n",          "n8n/EA4B71"],
  ["AWS",          "amazonaws/FF9900"],
  ["Docker",       "docker/2496ED"],
  ["Git",          "git/F05032"],
  ["Linux",        "linux/FCC624"],
];

const techStack = document.getElementById("techStack");

if (techStack) {
  techStack.className = "ts-flat-grid";

  technologies.forEach(([name, icon]) => {
    const card = document.createElement("article");
    card.className = "ts-card";
    card.title = name;

    const logo = document.createElement("div");
    logo.className = "ts-logo";

    const img = document.createElement("img");
    img.src = `${TECH_ICON_CDN}/${icon}.svg`;
    img.alt = `${name} logo`;
    img.width = 28;
    img.height = 28;
    img.loading = "lazy";

    const fallback = document.createElement("span");
    fallback.className = "ts-fallback";
    fallback.textContent = name.slice(0, 2).toUpperCase();
    fallback.hidden = true;

    img.onerror = () => {
      img.hidden = true;
      fallback.hidden = false;
    };

    logo.append(img, fallback);

    const label = document.createElement("span");
    label.className = "ts-name";
    label.textContent = name;

    card.append(logo, label);
    techStack.appendChild(card);
  });
}
