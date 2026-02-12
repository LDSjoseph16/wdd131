document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temp = 8;
const windSpeed = 10;

const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const displayWindChill = () => {
    const wcElement = document.getElementById("windchill");
    if (temp <= 10 && windSpeed > 4.8) {
        wcElement.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
    } else {
        wcElement.textContent = "N/A";
    }
};

window.addEventListener("load", displayWindChill);