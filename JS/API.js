const API_KEY = "b7522d165bf04e2ca15bbb1720942d7d";  // Your RAWG API Key
const proxyURL = "http://localhost:8080/";  // Your local CORS Anywhere instance
const RatingURL = "https://api.rawg.io/api/games?dates=2024-01-01,2024-12-31&ordering=-rating";
const Upurl = "https://api.rawg.io/api/games?dates=2024-01-01,2024-12-31&ordering=-added";
const Ubiurl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&developers=405";

var UbiNames = document.querySelectorAll(".Ubiname");
var UbiDates = document.querySelectorAll(".Ubidate");
var UbiCovers = document.querySelectorAll(".Ubicover");

var TopNames = document.querySelectorAll(".Tname");
var TopRatings = document.querySelectorAll(".Trating");
var TopCovers = document.querySelectorAll(".Tcover");

var UpNames = document.querySelectorAll(".Uname");
var UpRatings = document.querySelectorAll(".Urating");
var UpCovers = document.querySelectorAll(".Ucover");

// Create and append the modal structure
const modal = document.createElement('div');
modal.id = 'modal';
modal.innerHTML = `<div class="modal-content"></div>`;
document.body.appendChild(modal);

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

// Function to show modal with game details
async function showGameDetails(gameId) {
    try {
        const response = await fetch(`${proxyURL}https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`);
        const gameDetails = await response.json();

        // Populate modal with game details
        const modalContent = modal.querySelector('.modal-content');
        modalContent.innerHTML = `
            <h2>${gameDetails.name}</h2>
            <img src="${gameDetails.background_image}" alt="${gameDetails.name}">
            <p>Released: ${gameDetails.released || 'Not available'}</p>
            <p>Rating: ${gameDetails.rating || 'No rating available'}</p>
            <p>${gameDetails.description_raw || 'No description available.'}</p>
            <button onclick="closeModal()">Close</button>
            <a href="https://rawg.io/games/${gameDetails.slug}" target="_blank">
                <button>Website</button>
            </a>
            <a href="https://www.youtube.com" target="_blank">
                <button>BUY NOW!</button>
            </a>
        `;

        modal.style.display = 'block'; // Show modal
        document.body.classList.add('modal-open'); // Prevent body from scrolling

    } catch (error) {
        console.error("Error fetching game details: ", error);
    }
}

// Add click event listeners to each game item
function addClickEvents() {
    const gameItems = document.querySelectorAll('.slider-item');
    gameItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const gameId = item.getAttribute('data-game-id'); // Assuming you will add this attribute
            showGameDetails(gameId);
        });
    });
}

// Fetch Top Games
async function TopGames2024() {
    try {
        const response = await fetch(proxyURL + RatingURL + `&key=${API_KEY}&page_size=10`);
        const data = await response.json();
        const topGames = data.results;

        topGames.forEach((game, index) => {
            if (index < TopNames.length) {
                TopNames[index].textContent = game.name;
                TopRatings[index].textContent = `Rating: ${game.rating || 'No rating available'}`;
                TopCovers[index].src = game.background_image || '';
                TopCovers[index].parentNode.setAttribute('data-game-id', game.id); // Set game ID
            }
        });

    } catch (error) {
        console.error("Error fetching game info: ", error);
    }
}

// Fetch Upcoming Games
async function Upcoming2024() {
    try {
        const response = await fetch(proxyURL + Upurl + `&key=${API_KEY}&page_size=10`);
        const data2 = await response.json();
        const upGames = data2.results;

        upGames.forEach((game, index) => {
            if (index < UpNames.length) {
                UpNames[index].textContent = game.name;
                UpRatings[index].textContent = `Rating: ${game.rating || 'No rating available'}`;
                UpCovers[index].src = game.background_image || '';
                UpCovers[index].parentNode.setAttribute('data-game-id', game.id); // Set game ID
            }
        });

    } catch (error) {
        console.error("Error fetching game info: ", error);
    }
}

// Fetch Ubisoft Games
async function Ubisoft2024() {
    try {
        const response = await fetch(proxyURL + Ubiurl + `&key=${API_KEY}&page_size=10`);
        const data3 = await response.json();
        const ubiGames = data3.results;

        ubiGames.forEach((game, index) => {
            if (index < UbiNames.length) {
                UbiNames[index].textContent = game.name;
                UbiDates[index].textContent = game.released || 'Not available';
                UbiCovers[index].src = game.background_image || '';
                UbiCovers[index].parentNode.setAttribute('data-game-id', game.id); // Set game ID
            }
        });

    } catch (error) {
        console.error("Error fetching game info: ", error);
    }
}

// Call the functions to fetch game data and add click events
TopGames2024();
Upcoming2024();
Ubisoft2024();
addClickEvents();
