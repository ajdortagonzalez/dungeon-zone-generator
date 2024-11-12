function rollDice() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";  // Clear previous results

    // Generate 7 random dice rolls
    for (let i = 0; i < 7; i++) {
        const roll = Math.floor(Math.random() * 6) + 1; // Random number from 1 to 6
        
        // Create a container for each roll result
        const dieDiv = document.createElement("div");
        dieDiv.classList.add("die");

        // Create the result text
        const resultText = document.createElement("p");
        resultText.textContent = `Roll ${i + 1}: ${roll}`;

        // Create the image element
        const dieImage = document.createElement("img");
        dieImage.src = `images/dice${roll}.png`; // Assumes dice images are named dice1.png, dice2.png, etc.
        dieImage.alt = `Dice showing ${roll}`;

        // Add text and image to the die container
        dieDiv.appendChild(resultText);
        dieDiv.appendChild(dieImage);

        // Add the die container to the results div
        resultsDiv.appendChild(dieDiv);
    }
}
