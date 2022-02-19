var search_title = $('.search_title');
var input__box = $('.input__box');
var search = $('.search');
var form__box = $('.form__box');
var sidebar = $('.sidebar');
var filmsbox_items = $('.filmsbox_items');
var main = $('.main');
var navigation__list = $('.navigation__list');
var navigation = $('.navigation');
var preloader__box = $('.preloader__box');
var isShownBtn = $('.isShownBtn');
var positionedLi = $('.positionedLi');
var subnavigation__filmList = $('.subnavigation__filmList');
var subnavParent__li = $('.subnavParent__li');
var subnavigation__bottomFilmList = $('.subnavigation__bottomFilmList');
var links = $('.navigation__list-links');
var positionedLi2 = $('.positionedLi2');
var subnavigation__serialList = $('.subnavigation__serialList');
var menuBg = $('.nav-toggle');
var header = $('header');
var themeEl_p = $('p');
var themeEl_title = [$('h2'), $('h3')];
var person = $('.person');
var td = $('td');
var th = $('th');
var modrow = $('.mod');
var paragraph = $('.paragraph');


themeEl_title[0].addClass('bright');
themeEl_title[1].addClass('bright');
themeEl_p.addClass('bright');
td.addClass('bright');
th.addClass('bright');
paragraph.addClass('bright');


var eleArr = [themeEl_title, themeEl_p, td, th, modrow, paragraph];



var downsidebar = $('.downsidebar');
var themeBlock = `<div class="theme__block">
                          <button  class="nav-toggle menuBurger">
                              <span class="bar-top bgspan"></span>
                              <span class="bar-mid bgspan"></span>
                              <span class="bar-bot bgspan"></span>
                          </button>
                      <div class="theme"></div>  
                  </div>
                 `
var appearaside = `<aside class="downsidebar">
                    <div class="search__box sidebarbox">
                        <form target="_blank" method="get" action="https://fe.it-academy.by/TestForm.php?"
                            class="form__box">
                            <h2 class="search_title">Search</h2>
                            <div class="input__box">
                                <input name="search" placeholder="Enter your query" required type="search">
                                <button type="submit" class="search"><i class="fas fa-search search_icon"></i></button>
                            </div>
                        </form>
                    </div>
                    <div class="enter__box sidebarbox">
                        <h2>LogIn</h2>
                        <form method="get" action="https://fe.it-academy.by/TestForm.php?" class="enter__form">
                            <div class="input__enter-box">
                                <input autocomplete="on" required placeholder="Enter your Email" type="email">
                                <input required placeholder="Enter your Password" type="password">
                                <div class="button_box">
                                    <button value="registered" type="submit" class="login_button">Sign Up</button>
                                    <button value="logged in" type="submit" class="login_button">Log In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="news__box sidebarbox">
                        <h2>News</h2>
                        <div class="news__text">
                            <p>03.02.2022</p>
                            <p class="lastP">We launched our new service</p>
                        </div>
                    </div>
                    <div class="news__box ratings__box sidebarbox">
                        <h2>Ratings</h2>
                        <ul class="ratingsFilm__list">
                            <div class="ratings__box ">
                                <li><a href="movies/interstellar.html" class="ratingsFilm__list-links">Interstellar</a>
                                </li>
                                <p class="firstrating">9.0</p>
                                <li><a href="movies/avengers.html" class="ratingsFilm__list-links">Avengers</a></li>
                                <p class="secondrating">9.8</p>
                                <li><a href="movies/madmax.html" class="ratingsFilm__list-links">Mad Max</a></li>
                                <p class="thirdtrating">9.1</p>
                                <li class="lastLi"><a href="movies/freeguy.html" class="ratingsFilm__list-links">Free
                                        Guy</a></li>
                                <p class="fourthrating">8.9</p>
                            </div>
                        </ul>
                    </div>
                    <div class="news__box ratings__box serials__box sidebarbox">
                        <h2>Serials</h2>
                        <ul class="ratingsFilm__list serials__list">
                            <div class="ratings__box serials__box ">
                                <li><a href="serials/breakingBad.html"
                                        class="ratingsFilm__list-links serials__list-links">Breaking Bad</a>
                                </li>
                                <p class="firstrating">9.5</p>
                                <li><a href="serials/xfiles.html" class="ratingsFilm__list-links">The X Files</a></li>
                                <p class="secondrating">8.7</p>
                                <li><a href="serials/walkingDead.html" class="ratingsFilm__list-links">Walking Dead</a>
                                </li>
                                <p class="thirdtrating">8.6</p>
                                <li class="lastLi"><a href="serials/siliconvalley.html"
                                        class="ratingsFilm__list-links">Silicon Valley</a></li>
                                <p class="fourthrating">8.5</p>
                            </div>
                        </ul>
                    </div>
                </aside>`;



header.prepend(themeBlock);









//    links including

var mainLink = $('.mainlink');
var commomLink1 = $('#commonLink1');
var nameinput = $('.nameinput');
var lasnameinput = $('.lastnameinput');
var feedbackarea = $('.feedbackarea');
var inputsArray = [nameinput, lasnameinput, feedbackarea];
var sendButton = $('#feedbacksend');
var empty = '';

function reset() {
	inputsArray.forEach(input => {
		input.val(empty);
	});

}

sendButton.click(function () {
	setTimeout(reset, 500);

});



$(document).ready(function () {



	// Links

	mainLink.each(function () {
		$(this).attr('href', '../index.html');

	});

	commomLink1.each(function () {
		$(this).attr('href', '../serials/breakingBad.html');
	});


	// theme chnging

	$('body').addClass('body');

	$('.theme').click(function () {
		$(this).toggleClass('active');
		$(eleArr).each(function (e) {
			$(this).toggleClass('active');

		});

		paragraph.toggleClass('active');


	});


	function preloader() {
		preloader__box.toggleClass('active');
	}

	setTimeout(preloader, 200);


	function time() {


		sidebar.toggleClass('active');
		main.toggleClass('active');
		navigation.toggleClass('active');

	}

	setTimeout(time, 200);

	isShownBtn.on('click', 'a', function (event) {
		event.preventDefault();

		var id = $(this).attr('href');
		var top = $(id).offset().top;
		$('html, body').animate({
			scrollTop: top,
		});
	});

	positionedLi.hover(function (e) {
		e.preventDefault();

		if($(window).width() <= 1207){
			subnavigation__filmList.css('display', 'none');
		}else {
			subnavigation__filmList.slideToggle(300);

		}

	});

	positionedLi2.hover(function (e) {
		e.preventDefault();
		if($(window).width() <=1207){
			subnavigation__serialList.css('display', 'none');
		} else {
			subnavigation__serialList.slideToggle(300);

		}
	});

	$('.read').on('click', () => {
		$('.arrow').toggleClass('active');
		$('.descr__block').fadeToggle(400);
		$('.descr__block').toggleClass('active');

	});







});


var arrow = document.querySelector('.isShownBtn');
var arrowspan = document.querySelector('.arrowspan');
var feedBack__block = document.querySelectorAll('.feedBack__block');
var feedbackInput = document.querySelector('.fbinput');
var feedBackField = document.querySelector('#textarea');
var Main = document.querySelector('main');
var first_fbBlock = document.querySelector('.first_fbBlock');
var main__feedBack = document.querySelector('.main__feedBack');
var sendButton = document.getElementById('feedbackButton');
var styleInput = document.querySelectorAll('.styleinput');
var body = document.querySelector('body');
var Theme = document.querySelector('.theme');
var arrowicon = document.querySelector('.arrowicon');
var Burger = document.querySelector('.nav-toggle');
var midspan = document.querySelector('.bar-mid');
var bgspan = document.querySelectorAll('.bgspan');
var mainnav = document.querySelector('.navigation');
var list = document.querySelector('.navigation__list');
var header = document.querySelector('.header');
var subnavFilmList = document.querySelector('.subnavigation__filmList');
var aside = document.querySelector('.sidebar');
// aside.id = 'aside';
// aside.classList.add('downsidebar');
//
// mainnav.id = 'mainnavigation';


const mainnavigation = document.getElementById('mainnavigation');

let downSidebar = document.createElement('aside');
downSidebar.classList.add('downsidebar');
downSidebar.innerHTML = `
                    <div style="background: none" class="search__box sidebarbox">
                        <form target="_blank" method="get" action="https://fe.it-academy.by/TestForm.php?"
                            class="form__box">
                            <h2 style="background: none; text-align: center; color: silver" class="search_title">Search</h2>
                            <div style="width: 100%" class="input__box">
                                <input 
                                style="width: 70%; border: 1px solid orange; border-right: none; margin: 0 -53px " 
                                class="downinput" name="search" placeholder="Enter your query" required type="search">
                                <button style="border: 1px solid orange; border-left: none; background-color: orange " type="submit" class="search downsearchbtn"><i class="fas fa-search search_icon"></i></button>
                            </div>
                        </form>
                    </div>
                    <div style="background: none" class="enter__box sidebarbox">
                        <h2 style="text-align: center; background: none; color: silver">LogIn</h2>
                        <form method="get" action="https://fe.it-academy.by/TestForm.php?" class="enter__form">
                            <div class="input__enter-box">
                                <input autocomplete="on" required placeholder="Enter your Email" type="email">
                                <input required placeholder="Enter your Password" type="password">
                                <div class="button_box">
                                    <button value="registered" type="submit" class="login_button">Sign Up</button>
                                    <button value="logged in" type="submit" class="login_button">Log In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div style="background: none" class="news__box sidebarbox">
                        <h2 style="text-align: center; background: none; color: silver">News</h2>
                        <div class="news__text">
                            <p>03.02.2022</p>
                            <p style="font-size: 20px;" class="lastP">We launched our new service</p>
                        </div>
                    </div>
                	`;
Main.appendChild(downSidebar);






// Links including

// var mainlink = document.querySelectorAll('.mainlink');


document.addEventListener("DOMContentLoaded", function (event) {

		// window.addEventListener('resize', () => {
		// 	if(window.outerWidth <=1207){
		// 		Main.insertAdjacentHTML('afterend', appearaside);
		// 		return;
		// 	}
		//
		//
		// })


	Burger.addEventListener('click', (e) => {
		Burger.classList.toggle('active');
		// list.style.display = 'block'

		bgspan.forEach(item => {
			item.classList.toggle('active');
		})

		list.classList.toggle('show');
		header.classList.toggle('active');

	})

	Theme.addEventListener('click', () => {
		body.classList.toggle('active');
		arrowicon.classList.toggle('white');


		// window.localStorage.theme = body.className;

	});


	// document.body.className = localStorage.theme;


	window.onscroll = () => {
		if (window.scrollY > 600) {
			arrow.classList.add('isShownBtn_hide');

		} else {
			arrow.classList.remove('isShownBtn_hide');
		}
	};



});


sendButton.addEventListener('click', function (event) {

	let newEl = document.createElement('div');
	let date = new Date();

	function currentTime() {
		let resultTime = date.toDateString();

		return resultTime;
	}

	newEl.innerHTML = ` <div class="feedBack__block">
	
				<div class="feedBack__block-element posElement">
	
					<p class="person">${feedbackInput.value} <span>${currentTime()}</span></p>
					<p id="person">
						${feedBackField.value}
					</p>
	
				</div>
	
				</div>`;

	window.localStorage.setItem('block', newEl.innerHTML);

	let inputs = [feedBackField, feedbackInput];

	if (feedbackInput && feedBackField.value == '' || null) {
		newEl = null;
		inputs.forEach(input => {
			input.style.boxShadow = 'none';
			input.style.border = '1px solid red';

		});
	} else {
		first_fbBlock.insertBefore(newEl, first_fbBlock.previousElementSibling);
		event.preventDefault();

		inputs.forEach(input => {

			input.value = '';
			input.style.border = '1px solid silver';
		});

	}


	// main__feedBack.prepend(newEl);

});












