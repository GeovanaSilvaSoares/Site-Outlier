function menuShow(){

    let menuMobile = document.querySelector('.menuMobile')

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img/abrirMenu.png";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img/fecharMenu.png";
    }
}
