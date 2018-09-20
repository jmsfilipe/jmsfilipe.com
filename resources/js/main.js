// typewritter animation
$(function(){

    $("#typed").typed({
        strings: ["an AngularJS developer.", "a SASS lover.", "a web developer.", "Jorge."],
        typeSpeed: 30,
        showCursor: false,
        callback: function(){
            lift();
        }
    });
    function lift(){
        $(".head-text").addClass("lift-text");
        $(".badge-container").addClass("lift-text");
    }

});
