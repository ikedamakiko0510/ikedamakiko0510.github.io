'use strict';
{ 
  // const start=document.getElementById('start');
  // startボタンの動きの設定開始
  
  const ul=document.querySelector('ul');
  const slides=ul.children;
  //すべてのスライド＝ulの子要素全ての設定開始

  const nav=document.querySelector('nav');
  const dots=nav.children;
  dots[0].style.backgroundColor='#999';
  
  let currentindex=0;
  // function updateDots(){
  //   dots.forEach(dot => {
  //     dot.stlye.backgroundColor.remove('#999');
  //   });
  //   dots[currentindex].stlye.backgroundColor.add('#999');
  // }
  
  function moveSlides(){currentindex++;
    const slideWidth=slides[0].getBoundingClientRect().width;
    ul.style.transform=`translateX(${-1*slideWidth*currentindex}px)`;  
    // updateDots();
    dots[currentindex].style.backgroundColor='#999';
    
    // updateDots(); 丸ボタンの色を変える(currentクラスの移動)
  }
     let timer;
    
     function startSlideshow(){
      timer=setInterval(()=>{moveSlides();
        if (currentindex===3){clearInterval(timer);
        }  
      },5000);
 
    }

    startSlideshow();  
   
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
