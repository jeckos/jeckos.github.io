$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $(".nav").on("click", "a", function (event) {
        event.preventDefault();
        var el = event.target;
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        el.className = "active";
        $(".nav li a").removeClass("active");
        $(this).addClass("active");
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $(".btn").on("click", function () {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

});
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
        $('.logo img')[0].src = "img/logo_white.png";


    } else if ($(this).scrollTop() < 1 && $('.nav')[0].classList.contains('showing')) {

        $('header').addClass("sticky");
        $('.logo img')[0].src = "img/logo_white.png";


    } else {
        $('header').removeClass("sticky");
        $('.logo img')[0].src = "img/logo.png";

    }
    console.log($('header')[0].classList.contains("sticky"));

});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }

        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            $('.nav li a').removeClass("active");

            $('.nav li a')[2].className = "active";
        }

    });
}

$(function () {
    var pull = $('#menu');
    menu = $('.nav');
    header = $('header');
    menuHeight = menu.height();

    $(pull).on('click', function () {
       if(pull[0].checked){
         menu.slideToggle();  
       }else{
          menu.slideToggle('normal', function(){ $(this).css("display","");});  
       }
        

        
        
        if ($(".nav")[0].classList.contains('showing')) {
            menu.removeClass("showing");
            
        } else {
            menu.addClass("showing");
        }

        if ($(window).scrollTop() < 1 && !$('header')[0].classList.contains('sticky')) {
            $('header').addClass("sticky");
            $('.logo img')[0].src = "img/logo_white.png";


        } else if ($(window).scrollTop() > 1 && $('header')[0].classList.contains('sticky')) {
            $('header').addClass("sticky");
            $('.logo img')[0].src = "img/logo_white.png";


        } else if ($(window).scrollTop() > 1 && $('header')[0].classList.contains('sticky')) {
            $('header').addClass("sticky");
            $('.logo img')[0].src = "img/logo_white.png";


        } else {
            $('header').removeClass("sticky");
            $('.logo img')[0].src = "img/logo.png";

        }

    });
});