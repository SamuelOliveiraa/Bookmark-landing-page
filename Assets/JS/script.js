$(document).ready(function () {

    var vpWidth = $(window).width();

    if(vpWidth <= 699) {
        $('.header .icon').show()
        $('#nav').hide()
       
        if($('.header .icon').hasClass('close')){
            $('.header .icon').removeClass('close')
            $('#nav').show()
        }

        $('#nav li a').click(function() {
            $('.header .icon').removeClass('close')
            $('#nav').hide()
        })
    }else if(vpWidth >= 700 ){
        $('.header .icon').hide()
        $('#nav').show()

        $('#nav li a').click(function() {
            $('#nav').show()
        })
    }

    $(window).resize(function() {
        vpWidth = $(window).width();

        if(vpWidth <= 699) {
            $('.header .icon').show()
            $('#nav').hide()
           
            if($('.header .icon').hasClass('close')){
                $('.header .icon').removeClass('close')
                $('#nav').show()
            }
    
            $('#nav li a').click(function() {
                $('.header .icon').removeClass('close')
                $('#nav').hide()
            })
        }else if(vpWidth > 700 ){
            $('.header .icon').hide()
            $('#nav').show()
    
            $('#nav li a').click(function() {
                $('#nav').show()
            })
        }
    })
    
    $('.header .icon').click(function() {
        $('.header .icon').toggleClass("close")
        $('#nav').toggle()
    })

    // TIRA E COLOCA A SOMBRA NO MENU
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    window.addEventListener('scroll', function() {
        if(window.scrollY >= navHeight){
            header.classList.add('scroll')
        }else{
            header.classList.remove('scroll')
        }
    })

    /* ROLAGEM SUAVE */
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });
})







