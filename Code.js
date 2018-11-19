/**
 *   @author Cogswell, Kaz
 *   @version 0.0.1
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let currentRating;
let counterB, counterH, counterV;
let ratingB, ratingH, ratingV;
let movieNum;
let ratings = [];

const MIN_RATING = 1 , MAX_RATING = 5;

function main() {
    setZeroes();
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    while (continueResponse === 1) {
        setMovie();
        setContinueResponse();
    }
    printResults();
    bubbleSort();
}
    main();
function setZeroes() {
    ratingB = 0;
    ratingH = 0;
    ratingV = 0;
    ratings[0] = 0;
    ratings[1] = 0;
    ratings[2] = 0;
}
    function setContinueResponse() {
        if (continueResponse === 1 || continueResponse === 0) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue rating movies? [0=no, 1=yes]: `));
            while (continueResponse !== 0 && continueResponse !== 1) {
                console.log(`${continueResponse} is an incorrect value. Please try again.`);
                continueResponse = Number(PROMPT.question(`\nDo you want to continue rating movies? [0=no, 1=yes]: `));
            }
        } else {
            continueResponse = 1;
        }
    }

    function setMovie() {
        movieNum = parseInt(PROMPT.question('Which movie would you like to chose? 1.)Bohemian Rhapsody 2.)Venom 3.)Halloween: '));
        if(movieNum === 1) {
            bohemianMenu();
        } else if(movieNum === 2) {
            venomMenu();
        } else if(movieNum === 3) {
            halloweenMenu();
        } else {
            console.log('Please select a correct value.');
            setMovie();
        }
    }

function bohemianMenu() {
    currentRating = parseInt(PROMPT.question('How would you rate this movie on a scale from 1-5?: '));
    if (currentRating >= MIN_RATING || currentRating <= MAX_RATING ) {
        ratingB += currentRating;
    } else {
        console.log('Invalid answer, please try again.');
        bohemianMenu();
    }
    if (counterB != null) {
        counterB++;
    } else {
        counterB = 1;
    }

    console.log( 'The total amount of reviews for this movie are ' + counterB + '.');
    console.log('The average rating for this movie is ' , ratingB / counterB , '.');
    ratings[0] = ratingB / counterB;
}
function halloweenMenu() {
    currentRating = parseInt(PROMPT.question('How would you rate this movie on a scale from 1-5?: '));
    if (currentRating >= MIN_RATING || currentRating <= MAX_RATING ) {
        ratingH += currentRating;
    } else {
        console.log('Invalid answer, please try again.');
        halloweenMenu();
    }
    if (counterH != null) {
        counterH++;
    } else {
        counterH = 1;
    }

    console.log( 'The total amount of reviews for this movie are ' + counterH + '.');
    console.log('The average rating for this movie is ' , ratingH / counterH , '.');
    ratings[1] = ratingH / counterH;
}

function venomMenu() {
    currentRating = parseInt(PROMPT.question('How would you rate this movie on a scale from 1-5?: '));
    if (currentRating >= MIN_RATING || currentRating <= MAX_RATING ) {
        ratingV += currentRating;
    } else {
        console.log('Invalid answer, please try again.');
        venomMenu();
    }
    if (counterV != null) {
        counterV++;
    } else {
        counterV = 1;
    }

    console.log( 'The total amount of reviews for this movie are ' + counterV + '.');
    console.log('The average rating for this movie is ' , ratingV / counterV , '.');
    ratings[2] = ratingV / counterV;
}

function printResults() {
    console.log('Bohemian Rhapsody was rated at ', ratings[1], ' a total of ' + counterB + ' times.');
    console.log('Halloween was rated at ', ratings[2], ' a total of ' + counterH + ' times.');
    console.log('Venom was rated at ', ratings[3], ' a total of ' + counterV + ' times.');
}
function bubbleSort() {
    let didSwap = 1;
    let temp;
    while (didSwap) {
        didSwap = 0;
        for (let i = 0; i < ratings.length; i++) {
            if (ratings[i + 1] > ratings[i]) {
                temp = ratings[i];
                ratings[i] = ratings[i + 1];
                ratings[i + 1] = temp;
                didSwap = 1;
            }
        }
    }
    console.log('In order from greatest to least: '+ ratings[0] +', '+ ratings[1] +', '+ ratings[2] +'.');
}