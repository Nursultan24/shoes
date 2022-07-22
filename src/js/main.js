

let buybtn = document.querySelector( '.buy_btn');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup__close');

buybtn.addEventListener('click', function () {
    overlay.style.display = 'block'
});

close.addEventListener('click',function () {
    overlay.style.display = 'none'
});

overlay.addEventListener('click', function (e) {

    if (e.target.className.includes('overlay')){
        overlay.style.display = 'none'
    }


});




