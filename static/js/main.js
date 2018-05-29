$(document).ready(function(e){

    var width_w = $(window).width();

//Menu-humburger======================================

$('.hum-menu').click(function(e) {
    e.preventDefault();
    $('.nav').slideToggle(400, function() {
        if($('.nav').css('display') == 'none') {
            $(this).removeAttr('style')
        }
    })
});


//Accordion==========================================

$('.stuff__item').each(function(){
    $(this).find('.stuff__link').click(function(e){
        e.preventDefault();
        $(this).parents('.stuff__item').siblings('.hide-text').toggleClass('show-text').slideToggle(400);
    });
});



//bottom-form-show-hide==============================
var contactInfo = $('.contact__form');
var btnInfo = $('.btn-info');
var backBtn = $('.back-btn');

btnInfo.click(function(e){
    e.preventDefault();
    $('.contact').removeClass('contact__black');
    contactInfo.slideUp(400);
    backBtn.css({
        'display' : 'inline-block'
    });
});
backBtn.click(function(e){
    e.preventDefault();
    $('.contact').addClass('contact__black')

    contactInfo.slideDown(400);
    backBtn.css('display', 'none').animate({
        'right' : '20'
    });
});


$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.advantages').offset().top - $(window).height() / 1.2) {
        $('.advantages .advantages__item').each(function(i) {
            setTimeout(function() {
                $('.advantages .advantages__item').eq(i).addClass('animated fadeInUp')
            });
        });
    }//end if
});

});// конец ready


