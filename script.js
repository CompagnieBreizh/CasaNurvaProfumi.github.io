const grid = document.getElementById('perfumeGrid');

perfumes.forEach((perfume) => {
  const card = document.createElement('div');
  card.className = `card ${perfume.class}`;
  card.innerHTML = `
    <h2>${perfume.name}</h2>
    <p>${perfume.description}</p>
  `;
  grid.appendChild(card);
});

function changeImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = thumbnail.src;
  mainImage.alt = thumbnail.alt;
}