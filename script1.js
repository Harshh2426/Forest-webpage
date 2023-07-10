// let flag=0;
// let n=0;

// let lbtn=document.querySelector('.left-btn');
// let rbtn=document.querySelector('.right-btn');

// lbtn.addEventListener('click',()=>{
//     flag=(flag-1+n)%n;
//     console.log(flag);
//     slideshow(flag);
// })
// rbtn.addEventListener('click',()=>{
//     flag=(flag+1)%n;
//     console.log(flag);
//     slideshow(flag);
// })

// slideshow(flag);

// function slideshow(num){
//     let slides=document.getElementsByClassName('slide');
//     n=slides.length;

//     for(let y of slides){
//         y.style.display="none";
//     }

//     slides[flag].style.display="block";
// }

let lbtn=document.querySelector('.left-btn');
let rbtn=document.querySelector('.right-btn');
let slides=document.querySelectorAll('.slide');
let len=slides.length;
let flag=4;

lbtn.addEventListener('click',()=>{

   slides.forEach((slide)=>{
    slide.classList.remove('active');
   })

    flag=(flag-1+len)%len;
    slides[flag].classList.add('active');

})
rbtn.addEventListener('click',()=>{

   slides.forEach((slide)=>{
    slide.classList.remove('active');
   })

    flag=(flag+1)%len;
    slides[flag].classList.add('active');

});



let preloader=document.querySelector('.loading');
function myfunc(){
    preloader.style.display="none";
}
