$(document).ready(function(){
    console.log("Javascript Running")
    var wins = 0;
    var losses = 0;
    var score = 0;
    var randomNum = Math.floor(Math.random()*101+19);

    $("#random").html(randomNum);

    var num1 = Math.floor(Math.random()*11+1);
    var num2 = Math.floor(Math.random()*11+1);
    var num3 = Math.floor(Math.random()*11+1);
    var num4 = Math.floor(Math.random()*11+1);

    $("#crystal1").on("click", function(){
        score += num1;
        $("#score").html(score);
        if(score === randomNum){
            console.log("Score equals Random Number")
            setTimeout(winner,100);
        }
        else if(score > randomNum){
            console.log("Score is greater than Random Number")
            setTimeout(loser,100);
        }
    })

    $("#crystal2").on("click", function(){
        score += num2;
        $("#score").html(score);
        if(score === randomNum){
            console.log("Score equals Random Number")
            setTimeout(winner,100);
        }
        else if(score > randomNum){
            console.log("Score is greater than Random Number")
            setTimeout(loser,100);
        }
    })

    $("#crystal3").on("click", function(){
        score += num3;
        $("#score").html(score);
        if(score === randomNum){
            console.log("Score equals Random Number")
            setTimeout(winner,100);
        }
        else if(score > randomNum){
            console.log("Score is greater than Random Number")
            setTimeout(loser,100);
        }
    })

    $("#crystal4").on("click", function(){
        score += num4;
        $("#score").html(score);
        if(score === randomNum){
            console.log("Score equals Random Number")
            setTimeout(winner,100);
        }
        else if(score > randomNum){
            console.log("Score is greater than Random Number")
            setTimeout(loser,100);
        }
    })

    function reset(){
        console.log("Reset Successful")
        score = 0;
        randomNum = Math.floor(Math.random()*101+19);

        var num1 = Math.floor(Math.random()*11+1);
        var num2 = Math.floor(Math.random()*11+1);
        var num3 = Math.floor(Math.random()*11+1);
        var num4 = Math.floor(Math.random()*11+1);

        $("#wins").html(wins);
        $("#losses").html(losses);
        $("#score").html(score);
        $("#random").html(randomNum);

    }

    function winner(){
        console.log("Won Successfully")
        alert("YOU UNRAVELED THE SECRETS OF THE ANCIENT CRYSTALS AND HAVE BECOME OMNISCIENT, WE WANTED THAT TO HAPPEN RIGHT? YOU WIN!");
        wins++;
        $("#wins").html(wins);
        reset();
    }

    function loser(){
        console.log("Lost Successfully")
        alert("YOU ARE BLINDED BY A BRIGHT LIGHT UNEXPECTEDLY EMITTED BY THE CRYSTALS, TRY AND BE MORE CAREFUL NEXT TIME! YOU LOSE!");
        losses++;
        $("#losses").html(wins);
        reset();
    }

    
})