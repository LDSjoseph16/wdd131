const waterfalls = [
    {
        name: "Maria Cristina Falls",
        height: 320,
        access: "Easy",
        img: "images/hero-maria-cristina.webp"
    },
    {
        name: "Tinago Falls",
        height: 240,
        access: "Moderate",
        img: "images/tinago-falls.webp"
    },
    {
        name: "Mimbalot Falls",
        height: 90,
        access: "Easy",
        img: "images/mimbalot-falls.webp"
    },
    {
        name: "Limunsudan Falls",
        height: 800,
        access: "Difficult",
        img: "images/limunsudan-falls.webp"
    },
    {
        name: "Dodiongan Falls",
        height: 65,
        access: "Easy",
        img: "images/dodiongan-falls.webp"
    },
    {
        name: "Hindang Falls",
        height: 40,
        access: "Moderate",
        img: "images/hindang-falls.webp"
    }
];

const displayWaterfalls = (list) => {
    const grid = document.querySelector("#attractions-grid");
    if (!grid) return;
    grid.innerHTML = "";

    list.forEach(fall => {
        const section = document.createElement("section");
        section.className = "card";
        section.innerHTML = `
            <img src="${fall.img}" alt="${fall.name}" loading="lazy">
            <h3>${fall.name}</h3>
            <p><strong>Height:</strong> ${fall.height} ft</p>
            <p><strong>Access:</strong> ${fall.access}</p>
        `;
        grid.appendChild(section);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    displayWaterfalls(waterfalls);

    document.querySelector("#all-btn").addEventListener("click", () => displayWaterfalls(waterfalls));
    document.querySelector("#high-btn").addEventListener("click", () => {
        displayWaterfalls(waterfalls.filter(f => f.height > 250));
    });
    document.querySelector("#easy-btn").addEventListener("click", () => {
        displayWaterfalls(waterfalls.filter(f => f.access === "Easy"));
    });
    
    document.querySelector("#year").textContent = new Date().getFullYear();
});