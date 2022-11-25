'use strict';
{ 
  // const start=document.getElementById('start');
  // startボタンの動きの設定開始
  
  const ul=document.querySelector('ul');
  const slides=ul.children;
  //すべてのスライド＝ulの子要素全ての設定開始
  // const parent=document.getElementById('parent');
  // const target1=document.getElementById('child1');
  // const child1=document.createElement('li');
  // child1.id="appendChild";

  const nav=document.querySelector('nav');
  const button=document.querySelector('button');
  const dots=[];
  dots.push(button);
  // dots[0].style.backgroundColor='#999';

  let currentindex=0;

   const parent=document.getElementById('parent');
   const child1=document.getElementById('child1');
   const child1_copy = child1.cloneNode(true);
   const child2=document.getElementById('child2');
   const child2_copy = child2.cloneNode(true); 
   const child3=document.getElementById('child3');
   const child3_copy = child3.cloneNode(true); 
   const child4=document.getElementById('child4');
   const child4_copy = child4.cloneNode(true); 

   function resetSlides(){
   parent.appendChild(child1_copy);
    // child1.remove();
    parent.appendChild(child2_copy);
    // child2.remove();
    parent.appendChild(child3_copy);
    // child3.remove();
    parent.appendChild(child4_copy);
    // child4.remove();
  }
   
  function moveSlides(){
    currentindex++;
    const slideWidth=slides[0].getBoundingClientRect().width;
    ul.style.transform=`translateX(${-1*slideWidth*currentindex}px)`;  
    button.style.backgroundColor='#999';
    resetSlides();
     } 

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
          },3000); } 

  // if (currentindex===3){clearInterval(timer);いらない？
    
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
