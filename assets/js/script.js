checkBotoes();

// caixas expansiveis
$('.caixa-container button').click(function(){
    let caixa = $(this).prev()
    if(caixa.hasClass('aberta')){
        caixa.removeClass('aberta')
        $(this).css('background-image', 'url("../assets/design/pg1/ico_saibamais_abre.png")')
    } else {
        caixa.addClass('aberta')
        $(this).css('background-image', 'url("../assets/design/pg1/ico_saibamais_fecha.png")')
    }
})

// painel feminismo
$('.painel-feminismo button').click(function(){
    $(this).addClass('visitado')
    console.log($(this).attr('data-bs-target'))
    let visita = $(this).attr('data-bs-target')
    localStorage.setItem(visita, 'visitado')
})
function checkBotoes(){
    for(let i=1; i<=$('.painel-feminismo button').length; i++){
        // console.log('o tamanho do array é '+$('.painel-feminismo button').length)
        // console.log($('.modal-fem-'+i))
        if(localStorage.getItem('#modal-fem-'+i)=='visitado'){$('.modal-fem-'+ i).addClass('visitado')}
    }    
}

// galeria de artistas
$('.modal-galeria').fadeOut()
$('.galeria-container').hover(function(){
    $(this).children('.modal-galeria').fadeIn()
}, function(){
    $(this).children('.modal-galeria').fadeOut()
})
if(window.innerWidth<1000){$('.modal-galeria').fadeIn()}

$('.menu-btn').click(function () {
    if ($('.menu').hasClass('hidden')) {
        $('.menu').removeClass('hidden')
    } else {
        $('.menu').addClass('hidden')
    }
})

// reposicionamento do botao do menu

$(window).scroll(function () {

    var topPos = $(this).scrollTop();

    // if user scrolls down..
    if (topPos > 100) {
        $('.menu-btn').css("top", "20px");
        if(window.innerWidth<809){$('.menu').css('top', '100px')}else{$('.menu').css("top", "10px");}

    } else {
        $('.menu-btn').css("top", "125px");
        if(window.innerWidth<809){$('.menu').css('top', '180px')}else{$('.menu').css("top", "115px");}
        
        
    }

}); // scroll END