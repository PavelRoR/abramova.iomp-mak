//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend intlTelInput.min.js
//@prepros-prepend utils.js

$(document).ready(function () {
    $('.input-mail').intlTelInput({
        defaultCountry: "ru",
        initialCountry: "auto",
        preferredCountries: ["ru", "ua", 'az', 'am', 'by', 'kz', 'kg', 'md', 'tj', 'uz', 'tm', 'ge'],
        autoPlaceholder: 'aggressive',
        nationalMode: false,
        customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
            return "+" + selectedCountryData.dialCode;
        },
        geoIpLookup: function (success, failure) {
            /*
            $.get( "https://ip-api.com/json/", function( data ) {
                var countryCode = (data.countryCode) ? data.countryCode : "ru";
                success(countryCode);
            }, "json" );*/

            $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "ru";
                success(countryCode);
            });
        },
        separateDialCode: false,
        formatOnDisplay: false,
        utilsScript: 'https://mk.beauty-matrix.ru/assets/plugins/intltelinput/js/utils.js',
    });

    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this),
            button = $('.button-form', this);
        email.keypress(function (e) {
            if ((e.keyCode < 48 || e.keyCode > 57) && 43 != e.keyCode) {
                this.value += '';
                message.text('Только цифры!').slideDown(500);
                return false
            } else {
                message.slideUp(500);
            }
        });
        $(".form").on("submit", function () {
            var check = $('.check', this),
                reNone = /.+/,
                message = $('.alert-message', this),
                email = $('.input-mail', this),
                button = $('.button-form', this);

            if (!email.val().match(reNone)) {
                email.css({
                    "borderColor": "#aaa",
                    'transition': 'all .4s ease'
                });
                message.text('Введите телефон').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            email.css({
                "borderColor": "#FB4B4B",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#5c5b5b",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#5c5b5b",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
});