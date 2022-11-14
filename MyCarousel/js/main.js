'use strict';
{ 
  const next=document.getElementById('next');
  // nextボタンの動きの設定開始
  
  const prev=document.getElementById('prev');
  //prevボタンの動きの設定開始  

  const ul=document.querySelector('ul');
  //nextボタンをクリックしたときのulの動きの設定開始

  const slides=ul.children;
  //すべてのスライド＝ulの子要素全ての設定開始

  const dots=[];
  //下の３つの丸ボタンを格納するための配列
  // 下記、function setupDots(){}で処理をまとめる 
  //[]だと空の配列、[x,y,z]で配列内容記入、
  //配列名.length;で配列の長さ、
  //配列名[0]で0番目の要素（最初の要素、以下、1,2..番目）

  let currentIndex=0;
  //nextボタンをクリックする回数の変数＝クリックするたびに１増やす
  //下記で１増やしていく設定をする

  function updateButtons(){
  // ボタンの状態を更新するための関数if(この状態)のとき{この処理}
  prev.classList.remove('hidden')
  next.classList.remove('hidden')
  //↑下記のいずれでもないときは、hiddenを設定しない＝隠さない
    
    if (currentIndex===0)
    //進むボタンが押されれていないとき＝currentIndexが0のとき
    //=最初の画面
    {prev.classList.add('hidden');}
    //戻るボタンを隠す＝hidden設定にする

    if (currentIndex===slides.length-1)
    //最後の画像の時＝currentIndexが2のとき＝slides.lengthが3のとき
    //＝slides.length-1　のとき。
       {next.classList.add('hidden');}
    //進むボタンを隠す＝hidden設定にする
  }

  function moveSlides(){
    const slideWidth=slides[0].getBoundingClientRect().width;
    ul.style.transform=`translateX(${-1*slideWidth*currentIndex}px)`;}
    //↑重複している処理をひとつの関数にまとめて、その部分をこの関数
    //に置き換える
    //const slideWidth=slides[0].getBoundingClientRect().width;
    //1枚分のスライドの幅を計算するための定数＝slideWidth
    //幅は全て同じなので、最初のスライド＝slides[0]から
    //getBoundingClientRectというメソッドを使って取得
    //ul.style.transform=`translateX(${-1*slideWidth*currentIndex}px)`;
    //nextボタンをクリックしたときの動きの設定
    //ulを左にずらすと、次の画像が出てくるのでその設定をする
    //上記 const ulで設定開始。
    //style.transform...で左側に200pxずらす
    //アニメーションさせるとわかりやすいので、cssでulに対して
    //transitionプロパティを指定する。
    //'translateX(-200px)'から、
    //`translateX(${-1*slideWidth}px)`;に書き換える
    //スライドの幅px分、-1＝マイナス方向＝左方向に移動させる
    //slideWidth*2をすることで、2番目＝0から数えて3番目のスライド
    //まで移動させることになるが、この2をcurrentIndex(クリックする
    //たびに１増える数値)という変数に変更する。

  function setupDots(){
    // 画像の数=slides.lengthだけボタンを作る
    for (let i=0; i< slides.length; i++){
      const button=document.createElement('button');
      button.addEventListener('click',()=>{
        //丸ボタンクリック時の動きの設定
        currentIndex=i;
        updateDots();
        //i番目の画像を表示する
        //下記でまとめた関数updateDots()を実行する
        updateButtons();
        //ボタンの状態更新
        moveSlides();
        //画像表示
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);

      //buttonタグのついた要素の設定開始
      //createElement('(htmlにないが)jsで新しく作りたい要素名')
      //主にappendChild()とセットで使われる。
      //appendChildメソッドを使うと、特定の親ノードの子ノードの
      //最後にノードを追加することができます。
      //追加しようとしたノードが既に存在していたら、
      //既存のノードが新しいノードで置き換わります
      //配列名.push('x')=配列に新しい値xを追加するという意味
      //=配列dotsにbuttonを追加する。
      //document.querySelector('nav').appendChild(button);
      //↑（今、htmlにはbuttonがないので）nav要素に対してbuttonを追加するという意味。
      //document.('指定するタグ').appendChild(XX)=指定するタグに子要素としてXXを追加する。
      //ただし、このようにjsで生成したボタンは、htmlで作成した自動の余白等が
      //反映されないので、cssで別途指定する＝cssのnav buttonへ

    }
    dots[0].classList.add('current');
    // 最初の丸いボタン（dots=の０番目）にはcurrentクラス(cssのnav.currentで設定したもの)をつける
  }  
  function updateDots(){
  //丸ボタンが押されたときの処理を関数でまとめる
  dots.forEach(dot => {
    dot.classList.remove('current');
  });
    dots[currentIndex].classList.add('current');}
        //配列名.forEach()で、配列の全ての要素を指定
        //current classを移動する設定
        //いったん、('')のクラスを削除＝dot.classList.remove('')
        //その後、クリックされたボタンにのみcurrentクラスを適用
        //＝dots[].ClassList.add('current')
        //この関数を、next,prevボタンにも適用する

  updateButtons();
  setupDots();
  //ページを読み込んだ直後にupdateButtons関数実行
  //そのあとは、ボタンをクリックしたあと＝next.とprev.
  //を押した後の処理の中に書く

  next.addEventListener('click',()=>
  { currentIndex++;
    //変数currentIndexを１増やす
    updateButtons();
    updateDots();
    moveSlides();
  });
    
    
  prev.addEventListener('click',()=>
  //戻るボタンの設定
  { currentIndex--;
    updateButtons();
    //変数currentIndexを１減らす＝戻る
    updateDots();
    moveSlides();
    //1枚分のスライドの幅を計算するための定数＝slideWidth
    //幅は全て同じなので、最初のスライド＝slides[0]から
    //getBoundingClientRectというメソッドを使って取得
  });

//   object.addEventListener(event, function)
// object に対してイベントを設定します。
//object.onxxxx = "～" ではひとつのイベントハンドラしか
//設定することができませんが、addEventListener() を用いることで、
//複数のイベントハンドラを設定することができます。

window.addEventListener('resize',()=>{
  moveSlides();
});
// ウィンドウの大きさが変わったとき＝resizeされた時、
//moveSlides関数を実行する設定(複数のスライドが表示されないようにする)

}
