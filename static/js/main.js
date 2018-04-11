$(document).ready(function(){

    var width_w = $(window).width();

//Menu-humburger======================================

  $('.hum-menu').click(function(e) {
    e.preventDefault();
    $('.nav').slideToggle(400)
  })

    
//Accordion==========================================

    $('.stuff__item').each(function(){
       $(this).find('.stuff__link').click(function(e){
            e.preventDefault();
            $(this).parents('.stuff__item').siblings('.hide-text').toggleClass('show-text').slideToggle(400);
       });

}); // конец ready

// open-map==============================================
$(document).ready(function(){
    var contactInfo = $('.contact__form');
    var btnInfo = $('.btn-info');
    var backBtn = $('.back-btn');

    btnInfo.click(function(e){
        e.preventDefault();
        contactInfo.slideUp(400);
        backBtn.css({
            'display' : 'inline-block'
        });
    });
    backBtn.click(function(e){
        e.preventDefault();
        contactInfo.slideDown(400);
        backBtn.css('display', 'none').animate({
            'right' : '20'
        });
    });
});//конец ready
















    

});
