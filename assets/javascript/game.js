var wins = 0;
var losses = 0;
var counter = 0;

var randomtargetnumber = Math.floor((Math.random() * 120) + 19);
var randomcrystal1number = Math.floor((Math.random() * 12) + 1);
var randomcrystal2number = Math.floor((Math.random() * 12) + 1);
var randomcrystal3number = Math.floor((Math.random() * 12) + 1);
var randomcrystal4number = Math.floor((Math.random() * 12) + 1);

$("#score").text(counter);

$("#target").text(randomtargetnumber);

$("#crystal1").on("click", function(){
    counter = counter + randomcrystal1number;
    $("#score").text(counter);

    if (counter === randomtargetnumber) {
    $(".displaystatus").text("You Win!!!!!!!")
    wins++;
    $(".wins").text("Wins:" + wins);
    counter = 0;
    $("#score").text(counter);
    randomtargetnumber = Math.floor((Math.random() * 120) + 19);
    $("#target").text(randomtargetnumber);
    randomcrystal1number = Math.floor((Math.random() * 12) + 1);
    randomcrystal2number = Math.floor((Math.random() * 12) + 1);
    randomcrystal3number = Math.floor((Math.random() * 12) + 1);
    randomcrystal4number = Math.floor((Math.random() * 12) + 1);
    }
    else if (counter >= randomtargetnumber) {
    $(".displaystatus").text("You Lose!!!!!!!")
    losses++;
    $(".losses").text("Losses:" + losses);
    counter = 0;
    $("#score").text(counter);
    randomtargetnumber = Math.floor((Math.random() * 120) + 19);
    $("#target").text(randomtargetnumber);
    randomcrystal1number = Math.floor((Math.random() * 12) + 1);
    randomcrystal2number = Math.floor((Math.random() * 12) + 1);
    randomcrystal3number = Math.floor((Math.random() * 12) + 1);
    randomcrystal4number = Math.floor((Math.random() * 12) + 1);
    }

});

$("#crystal2").on("click", function(){
    counter = counter + randomcrystal2number;
    $("#score").text(counter);
    
    if (counter === randomtargetnumber) {
    $(".displaystatus").text("You Win!!!!!!!")
    wins++;
    $(".wins").text("Wins:" + wins);
    counter = 0;
    $("#score").text(counter);
    randomtargetnumber = Math.floor((Math.random() * 120) + 19);
    $("#target").text(randomtargetnumber);oor((Math.random() * 12) + 1);
    randomcrystal2number = Math.floor((Math.random() * 12) + 1);
    randomcrystal3number = Math.floor((Math.random() * 12) + 1);
    randomcrystal4number = Math.floor((Math.random() * 12) + 1);
    }
    else if (counter >= randomtargetnumber) {
    $(".displaystatus").text("You Lose!!!!!!!")
    losses++;
    $(".losses").text("Losses:" + losses);
    counter = 0;
    $("#score").text(counter);
    randomtargetnumber = Math.floor((Math.random() * 120) + 19);
    $("#target").text(randomtargetnumber);
    randomcrystal1number = Math.floor((Math.random() * 12) + 1);
    randomcrystal2number = Math.floor((Math.random() * 12) + 1);
    randomcrystal3number = Math.floor((Math.random() * 12) + 1);
    randomcrystal4number = Math.floor((Math.random() * 12) + 1);
    }

});

$("#crystal3").on("click", function(){
    counter = counter + randomcrystal3number;
    $("#score").text(counter);

    if (counter === randomtargetnumber) {
    $(".displaystatus").text("You Win!!!!!!!")
    wins++;
    $(".wins").text("Wins:" + wins);
    counter = 0;
    $("#score").text(counter);
    randomtargetnumber = Math.floor((Math.random() * 120) + 19);
    $("#target").text(randomtargetnumber);
    randomcrystal1number = Math.floor((Math.random() * 12) + 1);
    randomcrystal2number = Math.floor((Math.random() * 12) + 1);
    randomcrystal3number = Math.floor((Math.random() * 12) + 1);
    randomcrystal4number = Math.floor((Math.random() * 12) + 1);
    }
    else if (counter >= randomtargetnumber) {
    $(".displaystatus").text("You Lose!!!!!!!")
    losses++;
    $(".losses").text("Losses:" + losses);
    counter = 0;
    $("#score").text(counter);
    randomtargetnumber = Math.floor((Math.random() * 120) + 19);
    $("#target").text(randomtargetnumber);
    randomcrystal1number = Math.floor((Math.random() * 12) + 1);
    randomcrystal2number = Math.floor((Math.random() * 12) + 1);
    randomcrystal3number = Math.floor((Math.random() * 12) + 1);
    randomcrystal4number = Math.floor((Math.random() * 12) + 1);
    }

});

$("#crystal4").on("click", function(){
    counter = counter + randomcrystal4number;
    $("#score").text(counter);

    if (counter === randomtargetnumber) {
    $(".displaystatus").text("You Win!!!!!!!")
    wins++;
    $(".wins").text("Wins:" + wins);
    counter = 0;
    $("#score").text(counter);
    randomtargetnumber = Math.floor((Math.random() * 120) + 19);
    $("#target").text(randomtargetnumber);
    randomcrystal1number = Math.floor((Math.random() * 12) + 1);
    randomcrystal2number = Math.floor((Math.random() * 12) + 1);
    randomcrystal3number = Math.floor((Math.random() * 12) + 1);
    randomcrystal4number = Math.floor((Math.random() * 12) + 1);
    }
    else if (counter >= randomtargetnumber) {
    $(".displaystatus").text("You Lose!!!!!!!")
    losses++;
    $(".losses").text("Losses:" + losses);
    counter = 0;
    $("#score").text(counter);
    randomtargetnumber = Math.floor((Math.random() * 120) + 19);
    $("#target").text(randomtargetnumber);
    randomcrystal1number = Math.floor((Math.random() * 12) + 1);
    randomcrystal2number = Math.floor((Math.random() * 12) + 1);
    randomcrystal3number = Math.floor((Math.random() * 12) + 1);
    randomcrystal4number = Math.floor((Math.random() * 12) + 1);
    }

});