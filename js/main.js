$(document).ready(function(){
    
    'use strict';
    
    // Triger Carousel
    
    $('.carousel').carousel();
    
    // Adjust Slider Height 
    
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    
    $('.slider, .carousel-item').height(winH - ( upperH + navH ));
    
    // Featured Work Shuffle
    
    $('.featured-work ul li').on('click', function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        
        if ($(this).data('class') === 'all') {
            
            $('.shuffle-imgs .col-md').css('opacity', 1)
            
        } else {
            
            $('.shuffle-imgs .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1)
        }
    });
    
    // Statistics Counter
    
    $('.number').countTo();
    
    // Triger Nice Scroll
    
    $('html').niceScroll({
        
        cursorcolor: "red",
        cursorwidth : "6px"
    });
    
    // Scroll To Top
    
    var scrollButton = $('#scroll-top');
    
    $(window).scroll(function(){
        
        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });
    
    //Click On Buttton To Scroll Top
        
    scrollButton.click(function() {
        
        $('html,body').animate({ scrollTop : 0 }, 600);
    });
    
});