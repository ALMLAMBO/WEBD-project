$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler")
            .toggleClass("change");
    });

    $(window).scroll(function () {
        let pos = $(this).scrollTop();

        if(pos >= 718) {
            $(".navbar")
                .addClass("navbar-background");

            $(".navbar")
                .addClass("fixed-top");
        }
        else {
            $(".navbar")
                .removeClass("navbar-background");

            $(".navbar")
                .removeClass("fixed-top");
        }
    });

    $(".nav-item, a, .header-link, #back-to-top").click(function (link) {
        link.preventDefault();
        let target = $(this).attr('href');

        $("html, body").animate({
           scrollTop: $(target).offset().top - 25
        }, 3000);
    });

    $(window).scroll(function () {
        let pos = $(this).scrollTop();

        if(pos >= 718) {
            $("#back-to-top")
                .addClass("scroll-top");
        }
        else {
            $("#back-to-top")
                .removeClass("scroll-top");
        }
    });
});

var showFullRecipeText = document
    .getElementsByClassName("show-full-recipe-text");

var showFullRecipeButton = document
    .getElementsByClassName("show-full-recipe-button");

var span = document
    .getElementsByClassName("close");

showFullRecipeButton.onclick = function () {
    showFullRecipeText.style.display = "block";
};

span.onclick = function () {
    showFullRecipeText.style.display = "none";
};

window.onclick = function (event) {
    if(event.target === showFullRecipeText) {
        showFullRecipeText.style.display = "none";
    }
};