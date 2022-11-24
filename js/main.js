'use strict';
{ 
  // const start=document.getElementById('start');
  // startボタンの動きの設定開始
  
  const ul=document.querySelector('ul');
  const slides=ul.children;
  //すべてのスライド＝ulの子要素全ての設定開始
  
  const nav=document.querySelector('nav');
  const dots=[];
  // dots[0].style.backgroundColor='#999';
  
  let currentindex=0;
   

  function moveSlides(){currentindex++;
    const slideWidth=slides[0].getBoundingClientRect().width;
    ul.style.transform=`translateX(${-1*slideWidth*currentindex}px)`;  
    // dots[currentindex].style.backgroundColor='#999';
    if (currentindex>3)
    {console.log(4);
    reset();       
    } }

  function reset(){
    // const slideWidth=slides[0].getBoundingClientRect().width;
    ul.style.transform=`translateX(240px)`;
    currentindex=-1;
    moveSlides();}
  
  // function setupDots(){
  //   for (let i=0;i<slides.length;i++){
  //   const button=document.createElement('button');
  //   dots.push(button);
  //   document.querySelector('nav').appendChild(button);}

  // dots[0].classList.add('current');
  
  // function updateDots(){
  //   dots.forEach(dot=>{dot.classList.remove('current');});
  //   dots[currentindex].classList.add('current');
  // }
  
    let timer;
     
     function startSlideshow(){
      timer=setInterval(()=>{moveSlides();
        },3000);       
  // if (currentindex===3){clearInterval(timer);いらない？
    }
       startSlideshow();  
      //  setupDots();
      //  updateDots();
   
// start.addEventListener('click',()=>{
//   currentindex=-1;
//   startSlideshow();
// });

// window.addEventListener('resize',()=>{
// moveSlides();
// });
// ウィンドウの大きさが変わったとき＝resizeされた時、
//moveSlides関数を実行する設定(複数のスライドが表示されないようにする)

}
