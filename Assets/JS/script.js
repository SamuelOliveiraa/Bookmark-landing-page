$(document).ready(function () {
    //ESCONDE E MOSTRA O MENU HAMBURGUER
    var vpWidth = $(window).width();
    toggleHamburguerMenu(vpWidth)

    $(window).resize(function() {
        vpWidth = $(window).width();
        toggleHamburguerMenu(vpWidth)
    })
    
    $('.header .icon').click(function() {
        $('.header .icon').toggleClass("close")
        $('#nav').toggle()
    })
    //ESCONDE E MOSTRA O MENU HAMBURGUER
    function toggleHamburguerMenu(vpWidth){
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
    }
    //ESCONDE E MOSTRA AS PERGUNTAS DA SEÇÃO AKS  
    function toggleAsks(element, tit, height) {
        if($(element).css('opacity') == 0){
            $(tit).toggleClass('show')
            $(element).css('height', height)
            $(element).css('margin-top', '1.5rem')
            $(element).css('opacity', '1')
            $(element).css('z-index', '1')
        }else{
            $(tit).toggleClass('show')
            $(element).css('height', '0')
            $(element).css('margin-top', '0')
            $(element).css('opacity', '0')
            $(element).css('z-index', '-11')
        }
    }  
    $('#tit1').click(function(){
        toggleAsks('#par1', '#tit1', '57.6px')
    });
    $('#tit2').click(function(){
        toggleAsks('#par2', '#tit2', '134.4px')
    });
    $('#tit3').click(function(){
        toggleAsks('#par3', '#tit3', '96px')
    });
    $('#tit4').click(function(){
        toggleAsks('#par4', '#tit4', '57.6px')
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

    //ROLAGEM DE SEÇÃO NA PARTE DOS FEATURES
    function toggleSection(elementAddClick, elementRemove1, elementRemove2, height, src, h2, p) {
        $(elementAddClick).addClass('click')
        $(elementRemove1).removeClass('click')
        $(elementRemove2).removeClass('click')

        $('.img-container').height(height)
        $('#img-select').attr('src', src)
        $('#h2-select').text(h2)
        $('#p-select').text(p)
    }
    $('#select1').click(function() {
        let p = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'

        toggleSection('#select1','#select2', '#select3','300px','Assets/images/illustration-features-tab-1.svg', 'Bookmark in one click', p)
    })

    $('#select2').click(function() {
        let p = 'Our powerful search feature will help you find saved sites in no time at all.No need to trawl through all of your bookmarks.'

        toggleSection('#select2','#select3', '#select1','350px','Assets/images/illustration-features-tab-2.svg', 'Intelligent search', p)
    })

    $('#select3').click(function() {
        let p = 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'

        toggleSection('#select3','#select2', '#select1','350px','Assets/images/illustration-features-tab-3.svg', 'Share your bookmarks', p)
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
//HOVER DO BOTÃO FIREFOX E CHROME

hover($('.firefox'), $('.chrome'))
hover($('.chrome'),$('.firefox'))

function hover(c, f){
    $(c).hover(function() {
        $(c).css({'background': 'hsl(231, 69%, 60%)',
                 'color': 'white'})

        $(f).css({'background-color':'white',
                'color': 'hsl(231, 69%, 60%)',
                'border': '1px solid hsl(231, 69%, 60%)'})
    })
}