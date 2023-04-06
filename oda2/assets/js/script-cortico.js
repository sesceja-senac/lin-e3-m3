function proportionScale(largura, altura) {

  var larguraScreen = $(window).width();
  var alturaScreen = $(window).height();
  var proporcaoAltura = (alturaScreen * 100) / altura;
  var proporcaoLargura = (larguraScreen * 100) / largura;
  var proporcao, larguraAltura, larguraAlturaAuto;

  if (proporcaoAltura < proporcaoLargura) {
    larguraAltura = "height";
    larguraAlturaAuto = "width";
    proporcao = proporcaoAltura / 100;
  } else {
    larguraAltura = "width";
    larguraAlturaAuto = "height";
    proporcao = proporcaoLargura / 100;
  }

  console.log(proporcao, proporcaoAltura, proporcaoLargura)
  return [proporcao, larguraAltura, larguraAlturaAuto];
}

function resizeBodyCortico() {

  var proporcao1920 = proportionScale(1920, 1080)[0];

  $(".correcao-adaptativa").css({
    "transform": "scale(" + proporcao1920 + ")",
    "transform-origin": "center center"
  });

  var proporcao900;

  if ($(window).width() < 992) {
    proporcao900 = proportionScale(900, 576)[0];
  } else {
    proporcao900 = 1;
  }
  $("#modal-cortico .modal-dialog.correcao-adaptativa").css({
    "transform": "scale(" + proporcao900 + ")"
  })
}

$(document).ready(function () {
  resizeBodyCortico()
  $(window).resize(function () {
    resizeBodyCortico()
  })

  

});

const personagens = {
  personagem1: {
    classPersonagem: "bg-marciana",
    nomePersonagem: "Marciana",
    textPersonagem: "Marciana é uma mulher obcecada por limpar a casa e enlouquece quando descobre que sua filha, Florinda, engravidou, aos 15 anos, de um funcionário da venda administrada por João Romão. O homem não assume a criança e Marciana dá uma surra em Florinda, que foge de casa. Após o ocorrido, Marciana é expulsa do cortiço.",
  },
  personagem2: {
    classPersonagem: "bg-jeronimo",
    nomePersonagem: "Jeronimo",
    textPersonagem: "Jerônimo e sua esposa moram no quartinho 35. Ele é um homem bastante respeitado na vizinhança, até ver Rita Baiana sambando. A partir daí, ele começa a beber e abandona a mulher. Na disputa pelo amor de Rita Baiana, Jerônimo mata o rival, Firmo, para ficar com ela.",
  },
  personagem3: {
    classPersonagem: "bg-paula",
    nomePersonagem: "Paula",
    textPersonagem: "Paula é considerada uma bruxa pelos vizinhos. Não apenas por ser feia e grosseira, mas também porque ela costumava curar problemas de pele e outras doenças com suas bênçãos e rezas. Ela deseja incendiar o cortiço e acaba conseguindo na segunda tentativa. É a partir daí que João Romão reconstrói o lugar, transformando-o em um local mais grandioso e digno de se viver.",
  },
  personagem4: {
    classPersonagem: "bg-rita",
    nomePersonagem: "Rita Baiana",
    textPersonagem: "Moradora do número 9, Rita Baiana é uma bela mulher que sabe sambar muito bem. Durante a história, dois outros personagens, Firmo e Jerônimo, disputam o seu amor.",
  },
  personagem5: {
    classPersonagem: "bg-pombinha",
    nomePersonagem: "Pombinha",
    textPersonagem: "A jovem Pombinha foi criada por sua mãe, a viúva Dona Isabel. Ela toma todos os cuidados para casar a filha com um homem que lhe desse um bom futuro. Assim, Pombinha se casa com o comerciante João da Costa, porém, para o desgosto de sua mãe, ela trai o marido, é expulsa de casa e acaba vivendo como prostituta.",
  },
  personagem6: {
    classPersonagem: "bg-joao",
    nomePersonagem: "João Romão",
    textPersonagem: "Administrador do cortiço, João Romão trabalha incansavelmente para enriquecer e engana Bertoleza para poder explorá-la. Após falsificar a carta de alforria de Bertoleza, ele rouba o dinheiro que a mulher havia juntado para pagar por sua liberdade e passa a explorá-la, fazendo a mulher trabalhar de domingo a domingo. No fim, ele transforma o cortiço em um local com ares mais nobres e se casa com a filha de Miranda.",
  },
  personagem7: {
    classPersonagem: "bg-miranda",
    nomePersonagem: "Miranda",
    textPersonagem: "Miranda é um comerciante bem-sucedido que morava em um sobrado, o qual, aos poucos, começa a ser cercado pelo cortiço. Mesmo com sua posição social e com seu título de barão, ele sente certa inveja de João Romão, que batalhou muito para construir seu negócio, enquanto ele havia sido traído por sua esposa, Estrela, e só continuava casado porque ela tem dinheiro.",
  },
  personagem8: {
    classPersonagem: "bg-bertoleza",
    nomePersonagem: "Bertoleza",
    textPersonagem: "Escrava fugida de seus donos. Ela junta dinheiro para pagar por sua liberdade, mas é enganada por seu amante, João Romão, que rouba seu dinheiro e falsifica uma carta de alforria. No final do livro, ela se suicida para não ser recapturada pelos seus antigos senhores.",
  },
}

const cortico = (params) => {
  return personagens[params];
}

const modalPersonagem = (params) => {
  var modal =
    `<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog correcao-adaptativa" role="document">
    <div class="modal-content">
    <div class="modal-body tamanho ${params.classPersonagem}">
    <div class="nome-personagem position-relative"><h2 class="h2-personagem"><strong>${params.nomePersonagem}</strong></h2></div>
    <button type="button" class="sem-fundo fechar position-relative som-fechar btn-ampliar" data-bs-dismiss="modal" aria-label="Close"><img class="img-fluid" src="assets/img/06_botao_fechar.png" alt="Botão para voltar na tela inicial"></button>
    <div class="descricao position-relative">
    <p class="p-descricao">${params.textPersonagem}</p>
    </div>
    </div>
    </div>
  </div>
  </div>`;

  $("#modal-cortico").html(modal);
  $("#modal").modal("show");

  resizeBodyCortico();
}


$(document).on("click", ".personagem", function (e) {
  modalPersonagem(cortico($(this).attr("id")));
});

function abreViaMenu() {
  $(".estilo-menu").each(function () {
    $(this).click(function () {
      $("#personagem" + $(this).attr("data-target")).click();
      $("#modal-menu").modal("hide");
    });
  });
}

function somClique() {
  $("body").on("click", '.som-fechar', function () {
    var audio = new Audio('assets/audio/som_modal.mp3');
    audio.play();
  });
}

function somFechar() {
  $("body").on("click", '.som-clique', function () {
    var audio = new Audio('assets/audio/clique.mp3');
    audio.play();
  });
}

$(document).ready(function () {
  $("#modal-intro").modal("show")
  $(".bto-iniciar").click(function (){
    $(".conteudo-cortico").delay(500).animate({
      "opacity": "1",
  
    }, "slow", function () {
      $('.efeito-logo').animate({
        opacity: '1'
      }, 1000);
     
    })
    meuAudio.volume = 0.9;
    meuAudio.play();
    $("#modal-intro").modal("hide");
  })
  var meuAudio = $('#meuAudio')[0];
 
  $('#meuBotao').click(function () {
    var icone = $('#meuBotao').find('i');
    if (icone.text() === 'volume_up') {
      icone.text('volume_off');
      meuAudio.pause();
      
    } else {
      icone.text('volume_up');
      meuAudio.volume = 0.9;
      meuAudio.play();
    }
  });
});

abreViaMenu();
somFechar();
somClique();