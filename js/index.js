
/*1. Скрыть/показать блок*/
function order__show() {
  document.getElementById("checkbox_hide").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");
  document.getElementById("order__show").setAttribute("style", "display: none");
  document.getElementById("order__hidden").setAttribute("style", "display: block");
  }
  
  function order__hidden() {
  document.getElementById("checkbox_hide").setAttribute("style", "display: none");
  document.getElementById("order__hidden").setAttribute("style", "display: none");
  document.getElementById("order__show").setAttribute("style", "display: block");
  }


/* 2.слайдер */

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);
/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
showSlides(slideIndex += 1);
}
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
showSlides(slideIndex -= 1);  
}
/* Устанавливает текущий слайд */
function currentSlide(n) {
showSlides(slideIndex = n);
}
/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("autopark__content");
    var dots = document.getElementsByClassName("autopark__link");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

    /*3. таймер*/ 
document.addEventListener('DOMContentLoaded', function() {
  // конечная дата, например 1 июля 2022
  const deadline = new Date(2022, 06, 01);
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
   
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
}
  // получаем элементы, содержащие компоненты даты
    const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
   // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

/*4. валидация */
function validate() {
  var username = document.getElementById("username");
  var usertel = document.getElementById("usertel");

  if (!username.value) {
    username.style.border = "2px solid red";
    return false;
  }
  if (!usertel.value) {
    usertel.style.border = "2px solid red";
    return false;
  }
  return true;
}

/*5.city*/  
var elems = document.getElementById("b").options;
var similar = function (A, B) {
for (var i = 0; i < B.length; i++)
if (A.charAt(i) != B.charAt(i)) break;
return i;
};
document.getElementById("cityvalue").onkeypress = function (event) {
var max = 0;
for (var i = 0; i < elems.length; i++) {
var A = elems[i].innerHTML.replace(/^\s+|\s+$/g, "").toLowerCase(),
B = (this.value + String.fromCharCode(event.keyCode)).toLowerCase();
if (similar(A, B) > max)
elems[i].selected = "selected", max = similar(A, B);
}
};

/*6. Кнопочки поделиться в соц. сетях */
Share = {
	vkontakte: function(purl, ptitle, pimg, text) {
		url  = 'http://vkontakte.ru/share.php?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&image='       + encodeURIComponent(pimg);
		url += '&noparse=true';
		Share.popup(url);
  },
  
  facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + encodeURIComponent(ptitle);
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
  },
  popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};

/*7.Реализовать выпадающее меню в моб. версии.*/
function toggleMenu() {
  const button = document.getElementById('header__burger')
  const menu = document.getElementById('header__menu')
  button.classList.toggle('active')
  menu.classList.toggle('active')
}


/*8. отзыв */ 
let coll = document.getElementsByClassName('reviews__link');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let nexttext = this.nextElementSibling;
    if (nexttext.style.maxHeight) {
      nexttext.style.maxHeight = null;
    } else {
      nexttext.style.maxHeight = nexttext.scrollHeight + 'px'
    }
  }) 
  }