var randomMatch;
var lose;
var win;
userScore = 0;

function start() {
    randomMatch = Math.floor(Math.random() * 101 + 19);
    $('#randomnumber').text("Match this Number:" + randomMatch);
    userScore = 0;
}


for (var i = 0; i < 4; i++) {
    var randomCN = Math.floor(Math.random() * 11 + 1);
    console.log(randomCN);


    var crystal = $('<div>');
    crystal.addClass('crystal');
    crystal.attr('value', randomCN)
    $('.crystals').append(crystal);

}


//each time you click on a crystal it adds to your score:
$('.crystal').on('click', function () {
    var crystalValue = parseInt($(this).attr('value'));

    userScore = userScore + crystalValue;
    $('#userscore').text("Your Score:" + userScore);

    if (userScore === randomMatch) {
        alert("You Win!")
        $("#wins").text("Wins: " + ++win);
        console.log(win)

    } else if (userScore > randomMatch) {
        alert("You Lose!")
        $("loses").text("Loses:" + ++lose);
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