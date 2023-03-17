window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('.preloader').fadeOut(300);

    AOS.refresh();

// script pras páginas já visitadas
switch(window.location.search){
  case '?page=1':
    localStorage.setItem('pagina1','visitada')
    break;
  case '?page=2':
    localStorage.setItem('pagina2','visitada')
    break;
  case '?page=3':
    localStorage.setItem('pagina3','visitada')
    break;
  case '?page=4':
    localStorage.setItem('pagina4','visitada')
    break;
  case '?page=5':
    localStorage.setItem('pagina5','visitada')
}

if(localStorage['pagina1']=='visitada'){document.querySelectorAll('.pagination li')[0].classList.add('visitada')}
if(localStorage['pagina2']=='visitada'){document.querySelectorAll('.pagination li')[1].classList.add('visitada')}
if(localStorage['pagina3']=='visitada'){document.querySelectorAll('.pagination li')[2].classList.add('visitada')}
if(localStorage['pagina4']=='visitada'){document.querySelectorAll('.pagination li')[3].classList.add('visitada')}
if(localStorage['pagina5']=='visitada'){document.querySelectorAll('.pagination li')[4].classList.add('visitada')}

window.setTimeout(function(){AOS.refresh()}, 1000)
})

