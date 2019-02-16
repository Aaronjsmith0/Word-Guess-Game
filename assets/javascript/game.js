var doubleWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var nflTeam = ['cardinals', 'falcons', 'ravens', 'bills', 'panthers', 'bears', 'bengals', 'browns', 'cowboys', 'broncos', 'lions', 'packers', 'texans', 'colts', 'jaguars', 'chiefs', 'dolphins', 'vikings', 'patriots', 'saints', 'giants', 'jets', 'raiders', 'eagles', 'steelers', 'rams', 'chargers', 'niners', 'seahawks', 'buccaneers', 'titans', 'redskins'];
var teamChosen = "";
var numberOfLetters = [];
var blanks = 0;
var successes = [];
var badLetters = [];
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var rightGuesses = 0;

function reset() {
    teamChosen = nflTeam[Math.floor(Math.random() * nflTeam.length)];
    numberOfLetters = teamChosen.split('');
    blanks = numberOfLetters.length;
    letterGuessed = 0;
    rightGuesses = 0;
    remainingGuesses = 10;
    badLetters = [];
    successes = [];
    doubleWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    test = false;
    startGame();
}

function startGame() {
    teamChosen = nflTeam[Math.floor(Math.random() * nflTeam.length)];
    numberOfLetters = teamChosen.split('');
    blanks = numberOfLetters.length;
    rightGuesses = 0;
    remainingGuesses = 10;
    badLetters = [];
    successes = [];
    doubleWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i = 0; i < blanks; i++) {
        successes.push('_');
        document.getElementById('wordToGuess').innerHTML = successes;
    }
    document.getElementById('wordToGuess').innerHTML = successes.join(' ');
    document.getElementById('numGuesses').innerHTML = remainingGuesses;
    document.getElementById('winCounter').innerHTML = wins;
    document.getElementById('lossCounter').innerHTML = losses;
    document.getElementById('wrongGuesses').innerHTML = badLetters;
}

function compareLetters(userKey) {
    if (teamChosen.indexOf(userKey) > -1) {
        for (var i = 0; i < blanks; i++) {
            if (numberOfLetters[i] === userKey) {
                rightGuesses++;
                successes[i] = userKey;
                document.getElementById('wordToGuess').innerHTML = successes.join(' ');
            }
        }
    } else {
        badLetters.push(userKey);
        remainingGuesses--;
        document.getElementById('numGuesses').innerHTML = remainingGuesses;
        document.getElementById('wrongGuesses').innerHTML = badLetters;
    }
}

function winLose() {
    if (rightGuesses === blanks) {
        wins++;
        document.getElementById('winCounter').innerHTML = wins;
        alert('You Win! The team was The ' + teamChosen);
        reset();
    } else if (remainingGuesses === 0) {
        losses++;
        document.getElementById('lossCounter').innerHTML = losses;
        alert('You Lose! The team was The ' + teamChosen);
        reset();
    }
}

startGame();

document.onkeyup = function (event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < doubleWord.length; i++) {
        if (letterGuessed === doubleWord[i] && test === true) {
            var spliceDword = doubleWord.splice(i, 1);
            compareLetters(letterGuessed);
            winLose();
        }
    }
}