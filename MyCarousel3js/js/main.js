'use strict';
{   
  const ul=document.querySelector('ul');
  const slides=ul.children;
  // const button=document.querySelector('button');
  // const current=document.getElemensByClassName('current');
  // const btn1=document.getElementById('btn1');
  // const btn2=document.getElementById('btn2');
  // const btn3=document.getElementById('btn3');
  // const btn4=document.getElementById('btn4');
const dots=[];

  let currentindex=0;
  let n=currentindex%4;
  
  function updateDots(){
    dots.forEach(dot => {
    dot.classList.remove('current')});
    if(currentindex<4){ 
    dots[currentindex].classList.add('current');}

    else{
      let n=currentindex%4;
      dots[n].classList.add('current');
      // console.log(n);
    }
        
   }
   

  function moveSlides(){
    currentindex++;
    const slideWidth=slides[0].getBoundingClientRect().width;
    ul.style.transform=`translateX(${-1*slideWidth*currentindex}px)`;  
    // console.log(currentindex);   
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

 function setupDots() {
   for(let i=0; i<slides.length;i++){
    const button=document.createElement('button');
    dots.push(button);
    document.querySelector('nav').appendChild(button);
    // nav要素に今作ったボタンを追加
  }  
   dots[0].classList.add('current');
  //  最初のボタンにcurrentクラスをつける
 }

    let timer;
     
     function startSlideshow(){
      timer=setInterval(()=>{moveSlides();
        resetSlide();updateDots();
          },3000); 
          } 
    
       startSlideshow();  
       setupDots();
       
      
// window.addEventListener('resize',()=>{
// moveSlides();
// });
// ウィンドウの大きさが変わったとき＝resizeされた時、
//moveSlides関数を実行する設定(複数のスライドが表示されないようにする)

}
