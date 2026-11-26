
function checkAnswer() {
    const answer = document.querySelector(
        'input[name="answer"]:checked'
    );

    const result = document.getElementById("quizResult");

    if (!answer) {
        result.innerHTML = "Please select an answer!";
        return;
    }

    if (answer.value === "JavaScript") {
        result.innerHTML = "Correct Answer!";
        result.style.color = "green";
    } else {
        result.innerHTML = "Wrong Answer. Try again!";
        result.style.color = "red";
    }
}


const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1020/600/300"
];

let currentImage = 0;

function showImage() {
    document.getElementById("carouselImage").src =
        images[currentImage];
}

function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage();
}

function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage();
}

/* Fetch Weather Data from API */
async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "Please enter a city name.";
        return;
    }

    result.innerHTML = "Loading weather data...";

    try {
        
        const geoResponse = await fetch(
            "https://geocoding-api.open-meteo.com/v1/search?name="
            + encodeURIComponent(city)
            + "&count=1&language=en&format=json"
        );

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            result.innerHTML = "City not found!";
            return;
        }

        const location = geoData.results[0];

       
        const weatherResponse = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude="
            + location.latitude
            + "&longitude="
            + location.longitude
            + "&current=temperature_2m,relative_humidity_2m"
        );

        const weatherData = await weatherResponse.json();
        const current = weatherData.current;

       
        result.innerHTML =
            "<strong>City:</strong> " + location.name + "<br>" +
            "<strong>Temperature:</strong> " +
            current.temperature_2m + " °C<br>" +
            "<strong>Humidity:</strong> " +
            current.relative_humidity_2m + "%";

    } catch (error) {
        result.innerHTML =
            "Unable to fetch data. Please try again.";
    }
}
