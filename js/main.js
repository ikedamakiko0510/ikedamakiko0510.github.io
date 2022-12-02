'use strict';
{   
  const ul=document.querySelector('ul');
  const slides=ul.children;
  const button=document.querySelector('button');
  // const current=document.getElemensByClassName('current');

  // const btn1=document.getElementById('btn1');
  // const btn2=document.getElementById('btn2');
  // const btn3=document.getElementById('btn3');
  // const btn4=document.getElementById('btn4');
const dots=[];
dots.push(button);
 
  let currentindex=0;
  
  function moveSlides(){
    currentindex++;
    const slideWidth=slides[0].getBoundingClientRect().width;
    ul.style.transform=`translateX(${-1*slideWidth*currentindex}px)`;  
    // button.style.backgroundColor='#999';
     } 
    
   function resetSlide(){  
     const currentitem1=document.querySelectorAll('li')[0];
     const copyitem1=currentitem1.cloneNode(true);
     ul.appendChild(copyitem1);
          
     const currentitem2=document.querySelectorAll('li')[1];
     const copyitem2=currentitem2.cloneNode(true);
     ul.appendChild(copyitem2);

     const currentitem3=document.querySelectorAll('li')[2];
     const copyitem3=currentitem3.cloneNode(true);
     ul.appendChild(copyitem3);
     
     const currentitem4=document.querySelectorAll('li')[3];
     const copyitem4=currentitem4.cloneNode(true);
     ul.appendChild(copyitem4);
 }

 dots[0].classList.add('current');
 function updatedots(){
 dots.forEach(dot => {
  dot.classList.remove('current');
    });
   dots[currentindex].classList.add('current');  
  }


    let timer;
     
     function startSlideshow(){
      timer=setInterval(()=>{moveSlides();
        resetSlide();updatedots();
          },3000); } 
    
       startSlideshow();  
      
// window.addEventListener('resize',()=>{
// moveSlides();
// });
// ウィンドウの大きさが変わったとき＝resizeされた時、
//moveSlides関数を実行する設定(複数のスライドが表示されないようにする)

}
