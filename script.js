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


//Selecting,Creating,And Deleting Elements

 console.log(document.documentElement); //Selecting Whole Page
 console.log(document.head); //To Select Head Of The Page
 console.log(document.body); //To select Page Of The Body
 const header =document.querySelector('.header') // TO Select Specific Class Of Document
 
 const allSelections = document.querySelectorAll('.section'); //To Select all classes present in the document and its NodeList
 console.log(allSelections);
 
 document.getElementById('section--1');
 const allbutton = document.getElementsByTagName('button'); // returns An HTML Collection 
 console.log(allbutton);

 //Creating And Deleting Elements
 const message = document.createElement('div');
 message.classList.add('cookie-message');
 message.innerHTML =  'We use Cokkies for improved Functionality And Analaytics. <button class ="btn btn--close-cookie">Got it!</button>';
//  header.prepend(message);
 header.append(message);
// header.append(message.cloneNode
  // (true));


  //deleting elements
  document.querySelector('.btn--close-cookie').addEventListener('click',function(){
    message.remove();
  })

  //STYLES ATTRIBUTES AND CLASSES
  message.style.backgroundColor = '#37383d';

  message.style.width = '100%'; //set as inline css
  console.log(message.style.color) // prints nothing  because it returns only inline css elements
  console.log(message.style.width); // 100%

  // How to get external css
  console.log(getComputedStyle(message).color);
  console.log(getComputedStyle(message).height);

  message.style.height =Number.parseFloat(getComputedStyle(message).height,10) + 40 + 'px';

  //ATTRIUBUTES

  const logo =  document.querySelector('.nav__logo');
  console.log(logo.src);
  console.log(logo.className);
  console.log(logo.alt);