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