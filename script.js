const container = document.getElementById('cards-container');

niggas.forEach((nigga) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${boy.photo}" alt="${boy.name}" 
    <h2>${boy.name} (${boy.nickname})<h2>
    <p>${boy.bio}</p>
    <h4>Skills: </h4>
    <ul>
        ${boy.skills.map(skill => `<li>${skill} </li>`).join('')}
        </ul>`

    container.appendChild(card);
})