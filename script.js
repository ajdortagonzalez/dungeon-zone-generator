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

async function generateMazeDetails() {
    const tables = await loadTables();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    // Roll for Table 1 (Room Type)
    const roll1 = rollDice();
    const roomType = tables.table1.results[roll1];
    let resultText = `Table 1: Room Type - Roll ${roll1}: ${roomType}`;
    let resultDiv = document.createElement("p");
    resultDiv.textContent = resultText;
    resultsDiv.appendChild(resultDiv);

    // If room type is Corridor (1-3)
    if (roll1 >= 1 && roll1 <= 3) {
        // Roll for Corridor Length (Table 2)
        const roll2 = rollDice();
        const corridorLength = tables.table2.results[roll2];
        resultText = `Table 2: Corridor Length - Roll ${roll2}: ${corridorLength}`;
        resultDiv = document.createElement("p");
        resultDiv.textContent = resultText;
        resultsDiv.appendChild(resultDiv);

        // Roll for End of Hallway (Table 3)
        const roll3 = rollDice();
        const hallwayEnd = tables.table3.results[roll3];
        resultText = `Table 3: End of Hallway - Roll ${roll3}: ${hallwayEnd}`;
        resultDiv = document.createElement("p");
        resultDiv.textContent = resultText;
        resultsDiv.appendChild(resultDiv);

        // Roll for Corridor Contents (Table 4)
        const roll4 = rollDice();
        const corridorContents = tables.table4.results[roll4];
        resultText = `Table 4: Corridor Contents - Roll ${roll4}: ${corridorContents}`;
        resultDiv = document.createElement("p");
        resultDiv.textContent = resultText;
        resultsDiv.appendChild(resultDiv);

        // If Table 4 result is Monster (rolls 2, 5, or 6), roll for Monster Threat Points (Table 7)
        if (roll4 === 2 || roll4 === 5 || roll4 === 6) {
            const roll7 = rollDice();
            const monsterPoints = tables.table7.results[roll7];
            resultText = `Table 7: Monster Threat Points - Roll ${roll7}: ${monsterPoints}`;
            resultDiv = document.createElement("p");
            resultDiv.textContent = resultText;
            resultsDiv.appendChild(resultDiv);
        }
    }
    // If room type is Room (4-6)
    else if (roll1 >= 4 && roll1 <= 6) {
        // Roll for Room Detail (Table 5)
        const roll5 = rollDice();
        const roomDetail = tables.table5.results[roll5];
        resultText = `Table 5: Room Detail - Roll ${roll5}: ${roomDetail}`;
        resultDiv = document.createElement("p");
        resultDiv.textContent = resultText;
        resultsDiv.appendChild(resultDiv);

        // Roll for Number of Doors (Table 6)
        const roll6 = rollDice();
        const numberOfDoors = tables.table6.results[roll6];
        resultText = `Table 6: Number of Doors - Roll ${roll6}: ${numberOfDoors}`;
        resultDiv = document.createElement("p");
        resultDiv.textContent = resultText;
        resultsDiv.appendChild(resultDiv);

        // If Table 5 result is 1, 2, or 3, roll for Monster Threat Points (Table 7)
        // Otherwise, roll for Monster Threat Points with Leader (Table 8)
        if (roll5 === 1 || roll5 === 2 || roll5 === 3) {
            const roll7 = rollDice();
            const monsterPoints = tables.table7.results[roll7];
            resultText = `Table 7: Monster Threat Points - Roll ${roll7}: ${monsterPoints}`;
            resultDiv = document.createElement("p");
            resultDiv.textContent = resultText;
            resultsDiv.appendChild(resultDiv);
        } else {
            const roll8 = rollDice();
            const monsterLeaderPoints = tables.table8.results[roll8];
            resultText = `Table 8: Monster Threat Points with Leader - Roll ${roll8}: ${monsterLeaderPoints}`;
            resultDiv = document.createElement("p");
            resultDiv.textContent = resultText;
            resultsDiv.appendChild(resultDiv);
        }
    }
}


// Function to handle treasure generation
async function generateTreasure() {
    const tables = await loadTables();
    const treasureResultsDiv = document.getElementById("treasureResults");
    treasureResultsDiv.innerHTML = ""; // Clear previous treasure results

    // Roll for Hidden Treasures (Table 9)
    const roll9 = rollDice();
    const hiddenTreasure = tables.table9.results[roll9];
    let resultText = `Table 9: Hidden Treasures - Roll ${roll9}: ${hiddenTreasure}`;
    let resultDiv = document.createElement("p");
    resultDiv.textContent = resultText;
    treasureResultsDiv.appendChild(resultDiv);

    // If result from Table 9 is "6", roll Table 10 (Great Fortune)
    if (roll9 === 6) {
        const roll10 = rollDice();
        const greatFortune = tables.table10.results[roll10];
        resultText = `Table 10: Great Fortune! - Roll ${roll10}: ${greatFortune}`;
        resultDiv = document.createElement("p");
        resultDiv.textContent = resultText;
        treasureResultsDiv.appendChild(resultDiv);
    }
}

// Event listeners for both buttons
document.getElementById("generateButton").addEventListener("click", generateMazeDetails);
document.getElementById("generateTreasureButton").addEventListener("click", generateTreasure);
