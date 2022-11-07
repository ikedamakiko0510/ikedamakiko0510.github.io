'use strict';
// 全体を{}で囲む
{
  const open=document.getElementById('open');
  // 取得した要素をopenという定数で使えるようにする
  const close=document.getElementById('close');
  const modal=document.getElementById('modal');
  const mask=document.getElementById('mask');

  open.addEventListener('click',()=>{
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
// クリックイベントの設定＝
  //open idのついたボタンをクリックしたときに、{}内の処理が行われる。
  // {}内の処理は、maskやmodalについたhiddenクラスを外す処理とする。

  close.addEventListener('click',()=>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  mask.addEventListener('click',()=>{
    close.click()
    //↑これで、closeをクリックしたときと同じ処理が行われる。
    //また、下記の同じ処理を記述。
    //modal.classList.add('hidden');
    //mask.classList.add('hidden');
  });

  //「閉じる」ボタンおよび、maskを押したときの処理
  //hiddenの状態に戻すので、add('hidden');とする。

  // クリックイベントの設定＝
  //open idのついたボタンをクリックしたときに、{}内の処理が行われる。
  // {}内の処理は、maskやmodalについたhiddenクラスを外す処理とする。

  // const XX=document.getElementById('XX');
  //getElementByIdは、任意のHTMLタグで指定したIDにマッチするドキュメン
  //ト要素を取得するメソッドです。
  //console.log(document.getElementById("XX").textContent);
  //"XX"のidのものから、中身である文字列をtextContentプロパティを使用
  //してJavaScriptコンソールに表示させる
}