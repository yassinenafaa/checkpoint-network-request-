document.getElementById("getWeatherButton").addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;
    const apiKey = '1e3e8f230b6064d27976e41163a82b77'; // Remplacez par votre clé API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = `<p>${error.message}</p>`;
    }
});

function displayWeather(data) {
    const { main, weather, name } = data;
    const weatherInfo = `
        <h2>Météo à ${name}</h2>
        <p>Température : ${main.temp} °C</p>
        <p>Description : ${weather[0].description}</p>
    `;
    document.getElementById("weatherInfo").innerHTML = weatherInfo;
}
