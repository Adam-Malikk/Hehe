$(document).ready(function () {
    // Fungsi ketika mouse masuk atau sentuhan dimulai
    $('.container').on('mouseenter touchstart', function () {
        console.log("Mouse atau sentuhan dimulai");
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    });
    
    // Fungsi ketika mouse keluar atau sentuhan berakhir
    $('.container').on('mouseleave touchend', function () {
        console.log("Mouse atau sentuhan berakhir");
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});
