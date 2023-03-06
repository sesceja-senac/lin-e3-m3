// animate__animated animate__backInRight animate__delay-1s
$('.botao-fechar').click(function(){
    $('.backdrop').fadeOut()
    // $('.link-start').addClass('animate__animated animate__backInRight animate__delay-1s')
    window.setTimeout(function() {
        // $('.start-bt').addClass('animate__animated animate__backInRight animate__delay-1s')
    }, 500)
})