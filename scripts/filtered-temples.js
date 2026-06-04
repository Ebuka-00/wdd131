const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: 2005,
        area: 11500,
        imageUrl: "images/temple1.jpeg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: 2004,
        area: 17500,
        imageUrl: "images/temple2.jpeg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: 2019,
        area: 41010,
        imageUrl: "images/temple3.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: 1893,
        area: 253000,
        imageUrl: "images/temple4.jpeg"
    },
    {
        templeName: "Kinshasa Temple",
        location: "Kinshasa, DR Congo",
        dedicated: 2019,
        area: 12000,
        imageUrl: "images/temple5.jpeg"
    },
    {
        templeName: "Paris France Temple",
        location: "Paris, France",
        dedicated: 2017,
        area: 44000,
        imageUrl: "images/temple6.jpg"
    },
    {
        templeName: "Mexico City Temple",
        location: "Mexico City, Mexico",
        dedicated: 1983,
        area: 116642,
        imageUrl: "images/temple7.jpeg"
    },
    {
        templeName: "Sydney Australia Temple",
        location: "Sydney, Australia",
        dedicated: 1984,
        area: 30000,
        imageUrl: "images/temple8.jpeg"
    },
    {
        templeName: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: 1980,
        area: 53997,
        imageUrl: "images/temple9.jpeg"
    }
];

const templeContainer = document.querySelector(".temple-container");
const pageTitle = document.querySelector("#page-title");

function displayTemples(templesList) {

    templeContainer.innerHTML = "";

    templesList.forEach(temple => {

        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName}"
                 loading="lazy">
        `;

        templeContainer.appendChild(card);
    });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
    pageTitle.textContent = "All Temples";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {

    pageTitle.textContent = "Old Temples";

    const oldTemples = temples.filter(
        temple => temple.dedicated < 1900
    );

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {

    pageTitle.textContent = "New Temples";

    const newTemples = temples.filter(
        temple => temple.dedicated > 2000
    );

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {

    pageTitle.textContent = "Large Temples";

    const largeTemples = temples.filter(
        temple => temple.area > 90000
    );

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {

    pageTitle.textContent = "Small Temples";

    const smallTemples = temples.filter(
        temple => temple.area < 10000
    );

    displayTemples(smallTemples);
});

document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;