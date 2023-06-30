'use strict';

{
function showPassword(){
  
  // ボタンをクリックすると、
  const result = document.getElementById('result');
// result idのついた要素を取得し、文字列を’’内の内容に変える
  const numbersCheckbox=document.getElementById('numbers-checkbox');
  const symbolsCheckbox=document.getElementById('symbols-checkbox');
  //数字および記号のチェックボックスのid取得
  const letters= 'abcdefghijklmnopqrstuvwxyz';
//このアルファベットの中から、ランダムに文字列を選ぶ
  const numbers='0123456789';
  const symbols='!#$%()&';
  //数字と記号も含めたランダムな文字列にする→これは、チェックボックス
  //にチェックが入ったら対象とする
 

  let password='';
  //できたパスワードを格納する変数
  let seed=letters+letters.toUpperCase();
  //パスワードの元になる文字列を、上記lettersと、それを大文字にした
  //letters.toUpperCase()を連結したものにする。

  if(numbersCheckbox.checked)
    {seed += numbers;}
  //数字のチェックボックスにチェックが入っていたら
  //===trueは省略可能
  // seed文字列にnumbersを連結する

  if(symbolsCheckbox.checked)
    {seed += symbols;}

  for (let i=0; i<slider.value; i++)
  //ループを使って一文字ずつ、8文字分とりだすならi<8だが、
  // スライダーの数値（=value）分取り出したいのでi<slider.valueとする
  {
    password += seed[Math.floor(Math.random() * seed.length)];

    //上記設定したseedからランダムに選んだ1文字(小文字だけなら26,大文字も
    //含むと52文字なので*52とする。
    //数値を含む場合、seedの長さと等しくなるのでseed.lengthとする
    
  }

result.textContent = password;
//lettersを配列として、数値で指定できる2=3番目の文字
//25文字＝25個の配列からランダムに選んだ数字を配列の[]内に設定する


}

const slider=document.getElementById('slider');
const btn=document.getElementById('btn');


slider.addEventListener('input',()=>{
  const passwordLength=document.getElementById('password-length');

// スライダーを移動させたら、（）内に表示するために、
// slider idとpassword-Lengthidを取得する

passwordLength.textContent=slider.value;
// passwordLengthのテキストをsliderに入力された値にする

});

btn.addEventListener('click', () => {showPassword();
});

showPassword();

}