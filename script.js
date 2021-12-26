'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//Btn Scrolling

  //SMOOTH SCROLLING
  const btnScrollTo = document.querySelector('.btn--scroll-to');
  // console.log(btnScrollTo)

  const section_1 = document.querySelector('#section--1');

 btnScrollTo.addEventListener('click',function(e){
   const s1coords = section_1.getBoundingClientRect();
  //  console.log(s1coords);
   //it returns object
//    DOMRect {x: 0, y: 713.6000366210938, width: 964.7999877929688, height: 1567.2000732421875, top: 713.6000366210938, …}
// bottom: 2280.8001098632812
// height: 1567.2000732421875
// left: 0
// right: 964.7999877929688
// top: 713.6000366210938
// width: 964.7999877929688
// x: 0
// y: 713.6000366210938
// [[Prototype]]: DOMRect

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current Scroll X/Y',window.pageXOffset," ",window.pageYOffset);
  // //scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset,s1coords.top + window.pageYOffset);
   
  //smooth
  // window.scrollTo(
  //   {
  //    left: s1coords.left + window.pageXOffset,
  //     top: s1coords.top + window.pageYOffset,
  //     behavior : 'smooth'

  //   })

  //Modern Way TO Scrolling
   section_1.scrollIntoView({behavior:'smooth'});
 })
///////////////////////////////////////////////////////////////////
////////////////////////////////////
//////////
//PAGE NAVIGATION
// document.querySelectorAll('.nav__link').forEach((el)=>{
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// })



//Add EventListener To Common Parent Element
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  // console.log(e.target);
  //Matching Element
  if(e.target.classList.contains('nav__link')){
    // console.log('Hi...');
    const id = e.target.getAttribute('href');
    // console.log(id);
     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})


//Tabbed Comoponet
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


// tabs.forEach(t=>t.addEventListener('click',function(e){
//   console.log('TAB');
// }))

tabContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked)

  if(!clicked) return

  //Removing Defalut
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
  //Adding Current 
  clicked.classList.add('operations__tab--active');
  
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})


///FADING COMPONENTS AND PASSING AN ARGUMENT TO EVENT HANDLERS

const nav = document.querySelector('.nav');
// console.log(nav);
 
const handleOver = function(e,opacity){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const sliblings = link.closest('.nav').querySelectorAll('.nav__link');
   //  console.log(sliblings);
   const logo = link.closest('.nav').querySelector('img');
   sliblings.forEach(el =>{
     if(el !==link){
       el.style.opacity =opacity;
     }
   })
   logo.style.opacity=opacity;
   }
}


nav.addEventListener('mouseover',function(e){
  handleOver(e,0.5);
});
nav.addEventListener('mouseout',function(e){
  handleOver(e,1);
});

//STICKY NAVIGATION
// const initcords = section_1.getBoundingClientRect();
// console.log(initcords);

// window.addEventListener('scroll',function(){
//   if(window.scrollY>initcords.top){
//     nav.classList.add('sticky');
//   }
//   else{
//     nav.classList.remove('sticky');
//   }
// })


//////STICKY NAVIGATION : THE INTERSECTION OBSERVER API
// const obsCallback = function(entries,observer){
// entries.forEach(entry =>{
//   console.log(entry);
// })
// }
// const obsOptions = {
//   root : null,
//   threshold: 0.1
// }

// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section_1);


const header = document.querySelector('.header');

const navSticky = function(entries){
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting){
  nav.classList.add('sticky');
  }
  else{
    nav.classList.remove('sticky');
  }
}

const headerObserver = new IntersectionObserver(navSticky,{
root:null,
threshold : 0,
rootMargin:'-90px',
})
headerObserver.observe(header);

//REVEAL SECTION 

const allsections = document.querySelectorAll('.section');

console.log(allsections);
const revealSection = function(entries,observer){

  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection,{
 root:null,
 threshold:0.15,
})

allsections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})


///LAZY LOADING IMAGES

const imageTarget = document.querySelectorAll('img[data-src]');
// console.log(imageTarget);

const loadImg = function(entries,observer){
  const [entry] = entries;
  // console.log(entry);

  //Adding original_image

  entry.target.src = entry.target.dataset.src;

  //load event
  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');
  })

  observer.unobserve(entry.target);
}

const imageObserver =  new IntersectionObserver(loadImg,{
  root :null,
  threshold : 0,
  rootMargin : '200px'
})

imageTarget.forEach(img => imageObserver.observe(img))


////SLIDER COMPONENT
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
///////////////////////////////////////////////////////////////////
////////////////////////////////////
/////////
//Selecting,Creating,And Deleting Elements

//  console.log(document.documentElement); //Selecting Whole Page
//  console.log(document.head); //To Select Head Of The Page
//  console.log(document.body); //To select Page Of The Body
//  const header =document.querySelector('.header') // TO Select Specific Class Of Document
 
//  const allSelections = document.querySelectorAll('.section'); //To Select all classes present in the document and its NodeList
//  console.log(allSelections);
 
//  document.getElementById('section--1');
//  const allbutton = document.getElementsByTagName('button'); // returns An HTML Collection 
//  console.log(allbutton);

//  //Creating And Deleting Elements
//  const message = document.createElement('div');
//  message.classList.add('cookie-message');
//  message.innerHTML =  'We use Cokkies for improved Functionality And Analaytics. <button class ="btn btn--close-cookie">Got it!</button>';
// //  header.prepend(message);
//  header.append(message);
// // header.append(message.cloneNode
//   // (true));


//   //deleting elements
//   document.querySelector('.btn--close-cookie').addEventListener('click',function(){
//     message.remove();
//   })

//   //STYLES ATTRIBUTES AND CLASSES
//   message.style.backgroundColor = '#37383d';

//   message.style.width = '100%'; //set as inline css
//   console.log(message.style.color) // prints nothing  because it returns only inline css elements
//   console.log(message.style.width); // 100%

//   // How to get external css
//   console.log(getComputedStyle(message).color);
//   console.log(getComputedStyle(message).height);

//   message.style.height =Number.parseFloat(getComputedStyle(message).height,10) + 40 + 'px';

//   //ATTRIUBUTES

//   const logo =  document.querySelector('.nav__logo');
//   console.log(logo.src);
//   console.log(logo.className);
//   console.log(logo.alt);

  

//  const h1 = document.querySelector('h1');

//   const alertH1 = function(){
//     alert("This An Event : YOU ARE HEADINNG TAG");

//     //removing eventlistener
//     h1.removeEventListener('mouseenter',alertH1);
//   }


//  h1.addEventListener('mouseenter',alertH1);

//Event Propogation

// //BUBBLING
// const randomInt = (max,min) => Math.floor(Math.random() * (max-min +1)+min);
// // console.log(randomInt(7,2));
// const randomColor = ()=> `rgb(${randomInt(255,0)},${randomInt(255,0)},${randomInt(255,0)})`
// // console.log(randomColor())
 
// document.querySelector('.nav__link').addEventListener('click',function(e){
// console.log('LINK',e.target);
// //stop propogation
// e.stopPropagation();
// })
 

// document.querySelector('.nav__links').addEventListener('click',function(e){
//   console.log('container',e.target);
  
// })


// document.querySelector('.nav').addEventListener('click',function(e){
//   console.log('Nav',e.target);
// })

// Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy.
//This A Bulbling
//When Click Event is happend at Fetaure then events are tranfered to parentElement but target remains same
// LINK <a class=​"nav__link" href=​"#section--1">​Features​</a>​
// script.js:154 container <a class=​"nav__link" href=​"#section--1">​Features​</a>​
// script.js:159 Nav <a class=​"nav__link" href=​"#section--1">​Features​</a>​

//For caputring phase we add third parameter as true in EventListener 
// document.querySelector('.nav').addEventListener('click',function(e){
//   console.log('Nav',e.target);
// },true)
