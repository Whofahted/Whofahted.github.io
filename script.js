// Function to update a single clock
function updateClock(id, cityName, timezone, background, newsUrl) {
     // Get clock elements by ID
    const clockContainer = document.getElementById(id);
    const clockText = clockContainer.querySelector('.clock-text');
    const clock = clockContainer.querySelector('.clock');

    // Get current time in the specified timezone
    const now = new Date().toLocaleString("en-US", { timeZone: timezone });
    const time = now.split(", ")[1];

    // Update clock text and background image with news link
    clockText.textContent = cityName;
    clock.innerHTML = `<div class="clock" style="background-image: url('${background}');" onclick="window.location.href='${newsUrl}'">${time}</div>`;
}
// Function to update all clocks
function updateClocks() {

    // Update each clock with specific details
    updateClock("clock1", "Cairo", "Africa/Cairo", "images/cairo.jpg", "https://apnews.com/hub/cairo");
    updateClock("clock2", "Jeddah", "Asia/Riyadh", "images/jeddah.jpg", "https://www.arabnews.com/tags/jeddah");
    updateClock("clock3", "Dubai", "Asia/Dubai", "images/dubai.jpg", "https://www.arabnews.com/tags/dubai");
    updateClock("clock4", "Karachi", "Asia/Karachi", "images/karachi.jpg", "https://apnews.com/hub/karachi");

    updateClock("clock5", "Dhaka", "Asia/Dhaka", "images/dhaka.jpg", "https://www.independent.co.uk/topic/dhaka");
    updateClock("clock6", "Bangkok", "Asia/Bangkok", "images/bangkok.jpg", "https://www.independent.co.uk/topic/bangkok");
    updateClock("clock7", "Beijing", "Asia/Shanghai", "images/beijing.jpg", "https://www.independent.co.uk/topic/beijing");
    updateClock("clock8", "Tokyo", "Asia/Tokyo", "images/tokyo.jpg", "https://www.independent.co.uk/topic/tokyo");

    updateClock("clock9", "Sydney", "Australia/Sydney", "images/sydney.jpg", "https://www.independent.co.uk/topic/sydney");
    updateClock("clock10", "Noumea", "Pacific/Noumea", "images/noumea.jpg", "https://www.theguardian.com/world/new-caledonia");
    updateClock("clock11", "Tarawa", "Pacific/Tarawa", "images/tarawa.jpg", "https://www.independent.co.uk/topic/kiribati");
    updateClock("clock12", "Nuku'alofa", "Pacific/Tongatapu", "images/nukualofa.jpg", "https://apnews.com/hub/nukualofa");

    updateClock("clock13", "Midway", "Pacific/Midway", "images/midway.jpg", "https://example.com/midway-news");
    updateClock("clock14", "Honolulu", "Pacific/Honolulu", "images/honolulu.jpg", "https://apnews.com/hub/honolulu");
    updateClock("clock15", "Anchorage", "America/Anchorage", "images/anchorage.jpg", "https://apnews.com/hub/anchorage");
    updateClock("clock16", "Los Angeles", "America/Los_Angeles", "images/losangeles.jpg", "https://lacity.gov/");

    updateClock("clock17", "Denver", "America/Denver", "images/denver.jpg", "https://denvergazette.com/");
    updateClock("clock18", "Chicago", "America/Chicago", "images/chicago.jpg", "https://apnews.com/hub/chicago");
    updateClock("clock19", "New York", "America/New_York", "images/NYC.jpg", "https://apnews.com/hub/new-york");
    updateClock("clock20", "Santo Domingo", "America/Santo_Domingo", "images/santodomingo.jpg", "https://apnews.com/hub/santo-domingo");

    updateClock("clock21", "Sao Paulo", "America/Sao_Paulo", "images/riodejaneiro.jpg", "https://apnews.com/hub/rio-de-janeiro");
    updateClock("clock22", "Noronha", "America/Noronha", "images/noronha.jpg", "https://apnews.com/hub/sao-paulo");
    updateClock("clock23", "Azores", "Atlantic/Azores", "images/azores.jpg", "https://www.independent.co.uk/topic/azores");
    updateClock("clock24", "Faroe", "Atlantic/Faroe", "images/faroe.jpg", "https://www.independent.co.uk/topic/faroe-islands");
}
// Call updateClocks every second to keep clocks updated
setInterval(updateClocks, 1000);

// Initial call to updateClocks to set up the clocks when the page loads
updateClocks();