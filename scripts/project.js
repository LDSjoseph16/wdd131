document.querySelector("#year").textContent = new Date().getFullYear();

const modDisplay = document.querySelector("#lastModified");
if (modDisplay) {
    modDisplay.textContent = `Last Modified: ${document.lastModified}`;
}

const greeting = document.querySelector("#user-greeting");
if (greeting) {
    const userName = localStorage.getItem("visitorName");
    if (userName) {
        greeting.innerHTML = `<h2>Welcome back, ${userName}!</h2>`;
    }
}

const visitForm = document.querySelector("#visit-form");
if (visitForm) {
    visitForm.addEventListener("submit", () => {
        const name = document.querySelector("#full-name").value;
        localStorage.setItem("visitorName", name);
    });
}