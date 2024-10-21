const API_KEY = "b7522d165bf04e2ca15bbb1720942d7d";  // Your RAWG API Key
const proxyURL = "http://localhost:8080/";  // Your local CORS Anywhere instance
const RatingURL = "https://api.rawg.io/api/games?dates=2024-01-01,2024-12-31&ordering=-rating";
const Upurl = "https://api.rawg.io/api/games?dates=2024-01-01,2024-12-31&ordering=-added";
var Ubiurl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&developers=405"

var Tname = document.querySelectorAll(".Tname");
var Trating = document.querySelectorAll(".Trating");
var Tcover = document.querySelectorAll(".Tcover");

var Uname = document.querySelectorAll(".Uname");
var Urating = document.querySelectorAll(".Urating");
var Ucover = document.querySelectorAll(".Ucover");

var Ubiname = document.querySelectorAll(".Ubiname");
var Ubidate = document.querySelectorAll(".Ubidate");
var Ubicover = document.querySelectorAll(".Ubicover");

async function TopGames2024() {
    try {
        const response = await fetch(
            proxyURL + RatingURL + `&key=${API_KEY}&page_size=10`,
            { 
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              }
            }
        );

        const data = await response.json();
        // console.log("Game Data: ", data); // Log entire response to debug
        const topgames = data.results;

        // Update the UI with game details
        for (let i = 0; i < topgames.length; i++) {
            const game = topgames[i];
            if (i < Tname.length) {
                Tname[i].textContent = game.name;  // Update name element
                Trating[i].textContent = `Rating: ${game.rating || 'No rating available'}`;// Update rating element
                Tcover[i].src = game.background_image || '';  // Update cover image
            }
        }

    } catch (error) {
        console.error("Error fetching game info: ", error);
    }
}

async function Upcoming2024() {
    try {
        const response = await fetch(
            proxyURL + Upurl + `&key=${API_KEY}&page_size=10`,
            { 
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              }
            }
        );

        const data2 = await response.json();
        // console.log("Game Data: ", data2); // Log entire response to debug
        const Upgames = data2.results;

        // Update the UI with game details
        for (let i = 0; i < Upgames.length; i++) {
            const game = Upgames[i];
            if (i < Uname.length) {
                Uname[i].textContent = game.name;  // Update name element
                Urating[i].textContent = `Rating: ${game.rating || 'No rating available'}`;  // Update rating element
                Ucover[i].src = game.background_image || '';  // Update cover image
            }
        }

    } catch (error) {
        console.error("Error fetching game info: ", error);
    }
}

//UbiSoft
async function Ubisoft2024() {
    try {
        const response = await fetch(
            proxyURL + Ubiurl + `&key=${API_KEY}&page_size=10`,
            { 
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              }
            }
        );

        const data3 = await response.json();
        // console.log("Game Data: ", data2); // Log entire response to debug
        const Ubigames = data3.results;

        // Update the UI with game details
        for (let i = 0; i < Ubigames.length; i++) {
            const game = Ubigames[i];
            if (i < Ubiname.length) {
                Ubiname[i].textContent = game.name;  // Update name element
                Ubidate[i].textContent = game.released || 'Not available';  // Update rating element
                Ubicover[i].src = game.background_image || '';  // Update cover image
            }
        }

    } catch (error) {
        console.error("Error fetching game info: ", error);
    }
}


// Call the function to fetch game data
TopGames2024();
Upcoming2024();
Ubisoft2024();