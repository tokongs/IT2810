"use strict";

// Toggle documentation
$("#docButton").click(() => {
        if($("#documentation").is(":hidden")){
                $("#documentation").slideDown();
                $("#docButton").text("Hide documentation");

        } else {
                $("#documentation").slideUp();
                $("#docButton").text("Show documentation");
        }
});