//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend jquery.fancybox.min.js
//@prepros-prepend slick.min.js
function Search(el) {
	return document.querySelector(el)
}

function SearchAll(el) {
	return document.querySelectorAll(el)
}

// Табы из бонусного видео
let modulesButton = SearchAll(".modules-buttons li"), // Берем кнопки
	moduleBody = SearchAll(".module-body"); // Берем отдельные табы

(function () {
	for (let i = 0; i < moduleBody.length; i++) {
		modulesButton[i].setAttribute("data-index", i); // кнопкам присваиваем дата-атрибут
		moduleBody[i].setAttribute("data-index", i); // табам присваиваем дата-атрибут
		modulesButton[0].classList.add("active"); // вешаем класс по умолчанию на первую кнопку
		moduleBody[0].style.display = "block"; // ставим активным по умолчанию первый таб
		modulesButton[i].onclick = switchmodule; // вешаем функцию переключения табов на кнопки
	}
})(); // Инициируем табы

function switchmodule() {
	for (let i = 0; i < moduleBody.length; i++) {
		var a = this.getAttribute("data-index"); // берем в переменную значение дата-атрибута
		moduleBody[i].style.display = "none"; // скрываем все табы
		modulesButton[i].classList.remove("active"); // удаляем со всех кнопок класс
		Search('.modules-buttons li[data-index="' + a + '"]').classList.add("active"); // вешаем класс на нажатую кнопку
		Search('.module-body[data-index="' + a + '"]').style.display = "block"; // показываем соответсвующий таб
	}
}
$(document).ready(function() {
        /* Якорь */
        $("a[href='#plan']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
        // can
        $('.can-blocks').slick({
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            speed: 300,
            arrows: false,
            adaptiveHeight: true,
            asNavFor: '.can-blocks-titles'
            // centerPadding: '15px',
            // adaptiveHeight: true,
            // centerMode: true,
            // responsive: [{
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //     }
            // },
            // {
            //     breakpoint: 385,
            //     settings: {
            //         slidesToShow: 1
            //     }
            // }
            // ]
        });
        $('.can-blocks-titles').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.can-blocks',
            dots: false,
            arrows: false,
            // centerMode: true,
            focusOnSelect: true,
            infinite: true,
            // initialSlide: '2'
            // respondTo: '',
            // fade: true
                    responsive: [{
                breakpoint: 481,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2
                }
            }
            ]
          });
    $('[data-fancybox]').fancybox({
        loop: 1,
    });
    $('.revs-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '40px',
        // adaptiveHeight: true,
        centerMode: true,
        appendArrows: '.video-revs-arrows-1',
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '40px',
        // adaptiveHeight: true,
        centerMode: true,
        appendArrows: '.video-revs-arrows-2',
        responsive: [
        {
            breakpoint: 561,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
    $('.slick-dots').wrap('<div class="container container-revs">')
    /* Видео */
    $(".video-wrapper-revs img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&modestbranding=1&mute=1&showinfo=0&rel=0" allowfullscreen></iframe>')
    });
    function imToVideo(){
        $('.video-wrapper-revs iframe').each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
        });
        $(".video-wrapper-revs img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?modestbrandig=1&mute=1&showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>');
        });
    }
$('.revs-slider').on('swipe', function (event, slick, direction) {
    imToVideo();
});
$('.revs-slider').on('afterChange', function (event, slick, direction) {
    imToVideo();
});
$('.revs-slider').on('beforeChange', function (event, slick, direction) {
    imToVideo();
});

/*Конец документа*/
});