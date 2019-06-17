var randomMatch;
var lose = 0;
var win = 0;
userScore = 0;
var crystalValues;

function start() {

    randomMatch = Math.floor(Math.random() * 101 + 19);
    $('#randomnumber').text("Match this Number:" + randomMatch);
    userScore = 0;
    crystalValues = [];
    
    for (var i = 0; i < 4; i++) {

        var randomCN = Math.floor(Math.random() * 11 + 1);
        crystalValues.push(randomCN)
        console.log(randomCN);

    }

}

start();

$('.gem-image').on('click', function () {
    var crystalIndex = parseInt($(this).attr('value'));
    crystalValue = crystalValues[crystalIndex];

    userScore = userScore + crystalValue;
    
    $('#userscore').text("Your Score:" + userScore);

    if (userScore === randomMatch) {
        alert("You Win!")
        $("#wins").text("Wins:" + ++win);
        start();
        console.log(win)

    } else if (userScore > randomMatch) {
        alert("You Lose!")
        $("#loses").text("Loses:" + ++lose);
        start();
        console.log(lose)
    }




});
//4 crystal boxes each that need to add up to random assingned #(trying to guess)
//every crytal needs to have a randomly generated #
//a new random # should be generated every time win or lose
// also crystals will need new numberrs
// when any crystal is clicked, it should be added to the guessing #'s
//until it equals random assinged #
//if greater or less than random assinged - you lose! decrement loses   
// if equal - you win! increment wins
// game reset (assingned # + crystals)