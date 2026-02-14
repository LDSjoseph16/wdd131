let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
numReviews++;
document.getElementById("reviewCount").textContent = numReviews;
window.localStorage.setItem("numReviews-ls", numReviews);

document.getElementById("year").textContent = new Date().getFullYear();