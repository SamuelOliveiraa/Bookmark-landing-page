$(document).ready(function () {
    //ESCONDE E MOSTRA O MENU HAMBURGUER
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

    //ESCONDE E MOSTRA AS PERGUNTAS DA SEÇÃO AKS    
    $('#tit1').click(function(){
        $('#tit1').toggleClass('show')
        $('#par1').toggle()
    });

    $('#tit2').click(function(){
        $('#tit2').toggleClass('show')
        $('#par2').toggle()
    });

    $('#tit3').click(function(){
        $('#tit3').toggleClass('show')
        $('#par3').toggle()
    });

    $('#tit4').click(function(){
        $('#tit4').toggleClass('show')
        $('#par4').toggle()
    });

    //MENSAGEM DE ERRO NA SEÇÃO DE CONTACT
    var msgerror = document.getElementById('msg-error')
    var imgerror = document.getElementById('img-error')
    var email = document.getElementById('email')
    email.addEventListener('change', function() {
        if(email.value == ""){
            msgerror.style.display = 'block'
            msgerror.style.background = 'hsl(0, 94%, 66%)'
            imgerror.style.display = 'block'
        }else if(!email.checkValidity()){
            msgerror.style.display = 'block'
            msgerror.style.background = 'hsl(0, 94%, 66%)' 
            imgerror.style.display = 'block'
        }else{
            msgerror.style.display = 'block'
            msgerror.style.background = 'hsl(98, 66%, 57%)'
            imgerror.style.display = 'none'
        }
    })


    var btn = document.querySelector('#btn')
    btn.addEventListener('click', function() {
        if(email.value == ""){
            msgerror.style.display = 'block'
            imgerror.style.display = 'block'
        }else if(!email.checkValidity()){
            msgerror.style.display = 'block'
            imgerror.style.display = 'block'
        }else{
            msgerror.style.display = 'block'
            msgerror.style.background = 'hsl(98, 94%, 66%)'
            imgerror.style.display = 'none'
        }

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







