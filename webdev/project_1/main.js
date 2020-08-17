"use strict";

$("#docButton").click(() => {
    const display = $("#documentation").css("display");
    if(display === "none" ){
        $("#documentation").css("display", "block");
        $("#docButton").text("Hide documentation");
    } else {
        $("#documentation").css("display", "none");
        $("#docButton").text("Show documentation");
    }
});