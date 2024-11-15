// Predefined lists of plot components
const characters = [
    "a brave warrior",
    "a shy student",
    "an alien prince",
    "a vampire",
    "a magical girl",
    "a rogue ninja"
];

const settings = [
    "a dystopian future",
    "a magical academy",
    "a small village",
    "the vast galaxy",
    "an alternate dimension",
    "a haunted city"
];

const conflicts = [
    "must save the world",
    "must find the hidden treasure",
    "must defeat an evil organization",
    "must uncover a dark secret",
    "must reunite with a lost loved one",
    "must win a deadly tournament"
];

// Function to generate a random element from a list
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate the anime plot
function generatePlot(genre) {
    const character = getRandomElement(characters);
    const setting = getRandomElement(settings);
    const conflict = getRandomElement(conflicts);

    return `In ${setting}, ${character} ${conflict}.`;
}

// Event listener for the 'Generate Plot' button
document.getElementById('generate-btn').addEventListener('click', function() {
    const selectedGenre = document.getElementById('genre').value;
    const plot = generatePlot(selectedGenre);

    // Display the generated plot
    const resultDiv = document.getElementById('plot-result');
    resultDiv.textContent = `Your ${selectedGenre} Anime Plot: ${plot}`;
});
