
/**
 * Part 1
 */

// Function to calculate BMI
function calculateBMI(mass, height) {
    return mass / (height ** 2);
}

function P1_Challenge_1_BMI() {
    console.log('Challenge 01');
    // Test Data 1
    let markMass1 = 78;
    let markHeight1 = 1.69;
    let johnMass1 = 92;
    let johnHeight1 = 1.95;

    // Test Data 2
    let markMass2 = 95;
    let markHeight2 = 1.88;
    let johnMass2 = 85;
    let johnHeight2 = 1.76;

    // Calculate BMI for Test Data 1
    let markBMI1 = calculateBMI(markMass1, markHeight1);
    let johnBMI1 = calculateBMI(johnMass1, johnHeight1);
    let markHigherBMI1 = markBMI1 > johnBMI1;

    // Calculate BMI for Test Data 2
    let markBMI2 = calculateBMI(markMass2, markHeight2);
    let johnBMI2 = calculateBMI(johnMass2, johnHeight2);
    let markHigherBMI2 = markBMI2 > johnBMI2;

    console.log("\t-Test 01:");
    console.log(`\tMark's BMI: ${markBMI1.toFixed(2)}, John's BMI: ${johnBMI1.toFixed(2)}`);
    console.log(`\tDoes Mark have a higher BMI than John? ${markHigherBMI1}`);

    console.log("\n\t-Test 02:");
    console.log(`\tMark's BMI: ${markBMI2.toFixed(2)}, John's BMI: ${johnBMI2.toFixed(2)}`);
    console.log(`\tDoes Mark have a higher BMI than John? ${markHigherBMI2}`);
}

function P1_Challenge_2_BMI() {
    console.log('Challenge 02');
    // Test Data 1
    let markMass1 = 78;
    let markHeight1 = 1.69;
    let johnMass1 = 92;
    let johnHeight1 = 1.95;

    // Test Data 2
    let markMass2 = 95;
    let markHeight2 = 1.88;
    let johnMass2 = 85;
    let johnHeight2 = 1.76;

    // Calculate BMI for Test Data 1
    let markBMI1 = calculateBMI(markMass1, markHeight1);
    let johnBMI1 = calculateBMI(johnMass1, johnHeight1);
    console.log('\t-Test 01');
    if (markBMI1 > johnBMI1) {
        console.log("\tMark's BMI " + markBMI1 + " is higher than John's!");
    }
    else {
        console.log("\tJohn's BMI " + johnBMI1 + " is higher than Mark's!");
    }


    // Calculate BMI for Test Data 2
    let markBMI2 = calculateBMI(markMass2, markHeight2);
    let johnBMI2 = calculateBMI(johnMass2, johnHeight2);
    console.log('\t-Test 02');
    if (johnBMI2 > markBMI2) {
        console.log("\tMark's BMI " + markBMI2 + " is higher than John's!");
    }
    else {
        console.log("\tJohn's BMI " + johnBMI2 + " is higher than Mark's!");
    }
}

function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function P1_Challenge_3_Gymnastics() {
    console.log('Challenge 03');


    const dolphinsScores1 = [96, 108, 89];
    const koalasScores1 = [88, 91, 110];

    const dolphinsScoresBonus1 = [97, 112, 101];
    const koalasScoresBonus1 = [109, 95, 123];

    const dolphinsScoresBonus2 = [97, 112, 101];
    const koalasScoresBonus2 = [109, 95, 106];

    function determineWinner(dolphinsScores, koalasScores, dataLabel) {
        const dolphinsAverage = calculateAverage(...dolphinsScores);
        const koalasAverage = calculateAverage(...koalasScores);
        const minimumScore = 100;

        console.log(`\t-${dataLabel}`);
        console.log(`\tDolphins Average: ${dolphinsAverage.toFixed(2)}, Koalas Average: ${koalasAverage.toFixed(2)}`);

        if (dolphinsAverage >= minimumScore && dolphinsAverage > koalasAverage) {
            console.log("\tDolphins win!");
        } else if (koalasAverage >= minimumScore && koalasAverage > dolphinsAverage) {
            console.log("\tKoalas win!");
        } else if (
            dolphinsAverage >= minimumScore &&
            koalasAverage >= minimumScore &&
            dolphinsAverage === koalasAverage
        ) {
            console.log("\tIt's a draw!");
        } else {
            console.log("\tNo team wins.");
        }
    }

    // Test Data 1
    determineWinner(dolphinsScores1, koalasScores1, "Test Data 1");

    // Test Data Bonus 1
    determineWinner(dolphinsScoresBonus1, koalasScoresBonus1, "Test Data Bonus 1");

    // Test Data Bonus 2
    determineWinner(dolphinsScoresBonus2, koalasScoresBonus2, "Test Data Bonus 2");
}

function P1_Challenge_4_TipCalculator() {
    console.log('Challenge 04');

    const bills = [275, 40, 430];

    for (let i = 0; i < bills.length; i++) {
        const bill = bills[i];

        const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

        const total = bill + tip;

        console.log(`\tThe bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
    }
}


/**
 * Part 02
 */

function P2_Challenge_1_Gymnastics() {
    console.log('Challenge 01');

    const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

    const checkWinner = (avgDolphins, avgKoalas) => {
        if (avgDolphins >= 2 * avgKoalas) {
            console.log(`\tDolphins win (${avgDolphins} vs. ${avgKoalas})`);
        } else if (avgKoalas >= 2 * avgDolphins) {
            console.log(`\tKoalas win (${avgKoalas} vs. ${avgDolphins})`);
        } else {
            console.log("\tNo team wins!");
        }
    };

    // Test Data 1
    const dolphinsAvg1 = calcAverage(44, 23, 71);
    const koalasAvg1 = calcAverage(65, 54, 49);

    // Test Data 2
    const dolphinsAvg2 = calcAverage(85, 54, 41);
    const koalasAvg2 = calcAverage(23, 34, 27);

    console.log("\t- Test Data 1");
    checkWinner(dolphinsAvg1, koalasAvg1);

    console.log("\t- Test Data 2");
    checkWinner(dolphinsAvg2, koalasAvg2);
}

function P2_Challenge_2_TipCalculator() {
    console.log('Challenge 02');
    const calcTip = (bill) => {
        return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    }

    console.log(`Tip for a $100 bill: ${calcTip(100).toFixed(2)}`);

    const bills = [125, 555, 44];

    const tips = bills.map(calcTip);
    const total = bills.map((bill, index) => {
        return bill + tips[index];
    })

    console.log(`\tBills: ${bills}`);
    console.log(`\tTips: ${tips.map(tip => tip.toFixed(2))}`);
    console.log(`\tTotal: ${total.map(amount => amount.toFixed(2))}`);
}

function P2_Challenge_3_BMI() {
    console.log('Challenge 03');

    const mark = {
        fullName: 'Mark Miller',
        mass: 78,
        height: 1.69,
        calcBMI: function () {
            this.bmi = this.mass / (this.height ** 2);
            return this.bmi;
        }
    }

    const john = {
        fullName: 'John Smith',
        mass: 92,
        height: 1.95,
        calcBMI: function () {
            this.bmi = this.mass / (this.height ** 2);
            return this.bmi;
        }
    }

    mark.calcBMI();
    john.calcBMI();

    if (mark.bmi > john.bmi) {
        console.log(`\t${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})!`);
    } else if (john.bmi > mark.bmi) {
        console.log(`\t${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
    } else {
        console.log(`\t${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi.toFixed(1)})!`);
    }
}

/**
 * DOM and Events
 */

function P3_Challenge_1_Game() {
    let secretNumber = Math.trunc(Math.random() * 100) + 1;
    let score = 20;

    const messageEl = document.querySelector('.message');
    const numberEl = document.querySelector('.number');
    const scoreEl = document.querySelector('.score');
    const guessEl = document.querySelector('.guess');
    const bodyEl = document.querySelector('body');
    const againButton = document.querySelector('.again');

    const displayMessage = (message) => {
        messageEl.textContent = message;
    };

    againButton.addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 100) + 1;

        displayMessage('Start guessing...');
        scoreEl.textContent = score;
        numberEl.textContent = '?';
        guessEl.value = '';

        bodyEl.style.backgroundColor = '#222';
        numberEl.style.width = '15rem';
    });

    document.querySelector('.guess').addEventListener('input', function () {
        const guess = Number(guessEl.value);

        if (!guess) {
            displayMessage('No number!');
        } else if (guess === secretNumber) {
            displayMessage('Correct Number!');
            numberEl.textContent = secretNumber;
            bodyEl.style.backgroundColor = '#60b347';
            numberEl.style.width = '30rem';
        } else {
            if (score > 1) {
                displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
                score--;
                scoreEl.textContent = score;
            } else {
                displayMessage('You lost the game!');
                scoreEl.textContent = 0;
            }
        }
    });

}

console.log('***PART 1');
P1_Challenge_1_BMI();
P1_Challenge_2_BMI();
P1_Challenge_3_Gymnastics();
P1_Challenge_4_TipCalculator();

console.log('***PART 2');
P2_Challenge_1_Gymnastics();
P2_Challenge_2_TipCalculator();
P2_Challenge_3_BMI();
P3_Challenge_1_Game()
