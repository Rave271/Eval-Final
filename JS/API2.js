const API_KEY = "b7522d165bf04e2ca15bbb1720942d7d";  // Your RAWG API Key
const proxyURL = "http://localhost:8080/";  // Your local CORS Anywhere instance
const targetURL = "https://api.rawg.io/api/games";  // RAWG games API endpoint

var nameElements = document.querySelectorAll(".name");
var descriptionElements = document.querySelectorAll(".description");
var releaseDateElements = document.querySelectorAll(".releaseDate");
var gameCoverElements = document.querySelectorAll(".gameCover");
var moreInfoElements = document.querySelectorAll(".moreInfo");
var genreElements = document.querySelectorAll(".genre"); // For displaying genre info

// Fetch game info from RAWG API
async function getGameInfo() {
    try {
        const response = await fetch(
            proxyURL + targetURL + `?key=${API_KEY}&page_size=10`,
            { 
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              }
            }
        );

        const data = await response.json();
        console.log("Game Data: ", data); // Log entire response to debug
        const games = data.results;

        // Update the UI with game details
        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            if (i < nameElements.length) {
                nameElements[i].textContent = game.name;  // Update name element
                descriptionElements[i].textContent = game.description_raw || 'No description available';  // Update description element
                releaseDateElements[i].textContent = game.released || 'Unknown';  // Update release date element
                gameCoverElements[i].src = game.background_image || '';  // Update game cover image
                moreInfoElements[i].href = game.website || '#';  // Update more info link
                moreInfoElements[i].textContent = "More Info"; // Add text to the link
                console.log("Game Genres: ", game.genres); // Log genres to debug

                // Fetch and display genre information
                if (game.genres && game.genres.length > 0) {
                    const genreName = game.genres[0].name;  // Get the first genre's name
                    genreElements[i].textContent = `Genre: ${genreName}`;  // Update genre element
                } else {
                    genreElements[i].textContent = "No genre information available."; // Handle no genres
                }
            }
        }

    } catch (error) {
        console.error("Error fetching game info: ", error);
    }
}

// Call function to fetch game data
getGameInfo();
