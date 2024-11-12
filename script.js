// Function to fetch JSON data
async function loadTables() {
    const response = await fetch("tables.json");
    const data = await response.json();
    return data.tables;
}

// Function to roll a dice (returns a number between 1 and 6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to handle rolling and chaining logic
async function generateMazeDetails() {
    const tables = await loadTables();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results

    // Roll for Table 1 (Room Type)
    const roll1 = rollDice();
    const roomType = tables.table1.results[roll1];
    
    // Display the result for Room Type
    let resultText = `Table 1: Room Type - Roll ${roll1}: ${roomType}`;
    let resultDiv = document.createElement("p");
    resultDiv.textContent = resultText;
    resultsDiv.appendChild(resultDiv);

    // Chain additional rolls based on the result of Table 1
    if (roll1 >= 1 && roll1 <= 3) {
        // Room Type is "Corridor" -> Roll for Corridor Length (Table 2) and End of Hallway (Table 3)
        const roll2 = rollDice();
        const corridorLength = tables.table2.results[roll2];
        
        resultText = `Table 2: Corridor Length - Roll ${roll2}: ${corridorLength}`;
        resultDiv = document.createElement("p");
        resultDiv.textContent = resultText;
        resultsDiv.appendChild(resultDiv);

        const roll3 = rollDice();
        const hallwayEnd = tables.table3.results[roll3];
        
        resultText = `Table 3: End of Hallway - Roll ${roll3}: ${hallwayEnd}`;
        resultDiv = document.createElement("p");
        resultDiv.textContent = resultText;
        resultsDiv.appendChild(resultDiv);

    } else if (roll1 >= 4 && roll1 <= 6) {
        // Room Type is "Room" -> Roll for Room Detail (Table 4)
        const roll4 = rollDice();
        const roomDetail = tables.table4.results[roll4];
        
        resultText = `Table 4: Room Detail - Roll ${roll4}: ${roomDetail}`;
        resultDiv = document.createElement("p");
        resultDiv.textContent = resultText;
        resultsDiv.appendChild(resultDiv);
    }
}

// Event listener for button click
document.getElementById("generateButton").addEventListener("click", generateMazeDetails);
