window.onload = () => {
    let lives = 7;
    //DOM
    let arrWords = ["input", "programming", "java", "code", "google", "live", "true", "trust"];
    let guessShowWord = arrWords[Math.floor(Math.random() * 8)];
    //console.log(guessShowWord);
    let guessHiddenWord = new Array();
    let inputLetter = document.querySelector('#input-guess-letter');
    let reset = document.querySelector("#reset");
    let btnCheck = document.querySelector("#check");
    let answerCnt = 0;
    let isWinner = false;
    
    //generate word in mode hidden
    const generateGuessHiddenWord = () => {
        guessHiddenWord = [];
        for (let i = 0; i < guessShowWord.length; ++i){
            guessHiddenWord.push("_ ");
        }
        document.querySelector("#hidden-word").innerHTML = guessHiddenWord.join(" ");
    }
    generateGuessHiddenWord();
    
    //function reset game
    const resetGame = () => {
        aff = false;
        isWinner = false;
        answerCnt = 0;
        inputLetter.value = "";
        lives = 7;
        document.querySelector("#lives").innerHTML = "Lives: " + lives;
        guessShowWord = arrWords[Math.floor(Math.random() * 8)];
        
        generateGuessHiddenWord()
    }

    const gameOver = () => {
        isWinner = true;
        alert("Game Over! Answer correct was: " + guessShowWord);
    }
    //function check if you guessed the word
    const check = () => { 
    if (!isWinner){
     if (inputLetter.value !== ""){
            let aff = false;
            for (let i = 0; i < guessShowWord.length; ++i){
                if (guessShowWord[i] === inputLetter.value) {
                    aff = true;
                    ++answerCnt;
                    guessHiddenWord[i] = inputLetter.value;
                }
        }
        if (!aff) --lives;
        document.querySelector("#hidden-word").innerHTML = guessHiddenWord.join(" ");
        document.querySelector("#lives").innerHTML = "Lives: " +  lives;
        if (lives === 0) gameOver();
        if (answerCnt === guessHiddenWord.length){ 
            alert("You Won!");
            isWinner = true;
        }
    }
    else alert("You need to write a letter!"); 
    }
}
    
    inputLetter.onchange = check;
    btnCheck.onclick = check;
    reset.onclick = resetGame;
}