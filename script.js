// Function to fetch JSON data
async function loadTables() {
    const response = await fetch("tables.json");
    if (!response.ok) throw new Error("Failed to load tables.json");
    const data = await response.json();
    return data.tables;
}

// Function to roll a dice (returns a number between 1 and 6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Declare the dice emojis array globally at the top of the script
const diceEmojis = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

async function generateMazeDetails() {
    const tables = await loadTables();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    // Roll for Table 1 (Room Type)
    const roll1 = rollDice();
    const roomType = tables.table1.results[roll1];
    let resultText = `${diceEmojis[roll1 - 1]} ${roomType}`;
    resultsDiv.innerHTML += resultText + "<br>";

    if (roll1 >= 1 && roll1 <= 3) {
        const roll2 = rollDice();
        const corridorLength = tables.table2.results[roll2];
        resultText = `${diceEmojis[roll2 - 1]} ${corridorLength}`;
        resultsDiv.innerHTML += resultText + "<br>";

        const roll3 = rollDice();
        const hallwayEnd = tables.table3.results[roll3];
        resultText = `${diceEmojis[roll3 - 1]} ${hallwayEnd}`;
        resultsDiv.innerHTML += resultText + "<br>";

        const roll4 = rollDice();
        const corridorContents = tables.table4.results[roll4];
        resultText = `${diceEmojis[roll4 - 1]} ${corridorContents}`;
        resultsDiv.innerHTML += resultText + "<br>";

        if (roll4 === 2 || roll4 === 5 || roll4 === 6) {
            const roll7 = rollDice();
            const monsterPoints = tables.table7.results[roll7];
            resultText = `${diceEmojis[roll7 - 1]} ${monsterPoints}`;
            resultsDiv.innerHTML += resultText + "<br>";
        }
    } else if (roll1 >= 4 && roll1 <= 6) {
        const roll5 = rollDice();
        const roomDetail = tables.table5.results[roll5];
        resultText = `${diceEmojis[roll5 - 1]} ${roomDetail}`;
        resultsDiv.innerHTML += resultText + "<br>";

        const roll6 = rollDice();
        const numberOfDoors = tables.table6.results[roll6];
        resultText = `${diceEmojis[roll6 - 1]} ${numberOfDoors}`;
        resultsDiv.innerHTML += resultText + "<br>";

        if (roll5 === 1 || roll5 === 2 || roll5 === 3) {
            const roll7 = rollDice();
            const monsterPoints = tables.table7.results[roll7];
            resultText = `${diceEmojis[roll7 - 1]} ${monsterPoints}`;
            resultsDiv.innerHTML += resultText + "<br>";
        } else {
            const roll8 = rollDice();
            const monsterLeaderPoints = tables.table8.results[roll8];
            resultText = `${diceEmojis[roll8 - 1]} ${monsterLeaderPoints}`;
            resultsDiv.innerHTML += resultText + "<br>";
        }
    }
}

async function generateTreasure() {
    const tables = await loadTables();
    const treasureDiv = document.getElementById("treasureResults");
    treasureDiv.innerHTML = ""; // Clear previous results

    const roll9 = rollDice();
    const treasureResult = tables.table9.results[roll9];
    let resultText = `${diceEmojis[roll9 - 1]} ${treasureResult}`;
    treasureDiv.innerHTML += resultText + "<br>";

    if (roll9 === 6) {
        const roll10 = rollDice();
        const greatFortuneResult = tables.table10.results[roll10];
        resultText = `${diceEmojis[roll10 - 1]} ${greatFortuneResult}`;
        treasureDiv.innerHTML += resultText + "<br>";
    }
}

// Event listeners for both buttons
document.getElementById("generateButton").addEventListener("click", generateMazeDetails);
document.getElementById("generateTreasureButton").addEventListener("click", generateTreasure);
