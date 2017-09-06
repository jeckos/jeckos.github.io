$(document).ready(function() {
            $(document).on("scroll", onScroll);
            $(".nav").on("click", "a", function(event) {
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

            $(".btn").on("click", function() {
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({
                    scrollTop: top
                }, 1000);
            });

        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 1) {
                $('header').addClass("sticky");
                $('.logo img')[0].src = "img/logo_white.png";

            } else {
                $('header').removeClass("sticky");

                $('.logo img')[0].src = "img/logo.png";
            }


        });

        function onScroll(event) {
            var scrollPos = $(document).scrollTop();
            $('.nav li a').each(function() {
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