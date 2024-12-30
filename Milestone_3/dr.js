const itemsContainer = document.getElementById("items-container");

function renderItems() {
    items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;

        itemsContainer.appendChild(itemDiv);
    });
}

document.addEventListener("DOMContentLoaded", renderItems);
