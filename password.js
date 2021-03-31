"use strict";
$(document).ready(function() {
    let start, stop, char;
    let password = "";

    let getRandomNumber = function(max) {
        let random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //value is an integer between 0 and max - 1
            random = random + 1; //value is an integer between 1 and max
        }
        return random;
    };
    
    $("#generate").click(function() {
        $("#password").val( "" ); // clear previous entry

        let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        let userNumberEntered = parseInt($("#num").val())

        if(isNaN(userNumberEntered)){
            alert("Number of characters must be a number.");
        }
        else{
            for (let i = 0; i < userNumberEntered; i++){
                start = getRandomNumber(chars.length);
                stop = start + 1;
                char = chars.substring(start,stop);
                password = password.concat(char)

            }
            $("#password").val(password);

        }
    }); // end click()
    
    $("#clear").click(function() {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();



}); // end ready()