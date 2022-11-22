'use strict';
{ 
  const start=document.getElementById('start');
  // startボタンの動きの設定開始
  
  const ul=document.querySelector('ul');

  const slides=ul.children
  //すべてのスライド＝ulの子要素全ての設定開始
 
  // const slideCount=5000;

  let currentindex=0;

  function moveSlides(){currentindex++;
    const slideWidth=slides[0].getBoundingClientRect().width;
    ul.style.transform=`translateX(${-1*slideWidth*currentindex}px)`;   
  }
     let timer;
    
     function startSlideshow(){
      timer=setInterval(()=>{moveSlides();
        if (currentindex===3){clearInterval(timer);
        console.log(stop);
        console.log(currentindex);}  
      },5000);
 
    }
   
start.addEventListener('click',()=>{
  currentindex=-1;
  startSlideshow();
});



// window.addEventListener('resize',()=>{
//   console.log(1);
//   moveSlides();
// });
// ウィンドウの大きさが変わったとき＝resizeされた時、
//moveSlides関数を実行する設定(複数のスライドが表示されないようにする)

}
