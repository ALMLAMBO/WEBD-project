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

    $(".nav-item, .nav-item-link, .header-link, #back-to-top")
        .click(function (link) {
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