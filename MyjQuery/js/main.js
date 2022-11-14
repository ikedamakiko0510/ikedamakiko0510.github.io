'use strict';

//jQueryではすべての要素を読み込み終わったあとに行う処理は$()の中に
// 関数を入れてその中に書いていく。$(全ての処理);となる。
$(() => {
  $('button').click(() => {
    $('li')
      .eq(2)
      .addClass('red-text');
    //eq()内の数字番目の要素に''のクラスを適用
    //=ボタンをクリックすると２番目の要素の色が変わる

// cssの疑似クラスを使用する場合：
//${'li:nth-child(odd),li:last-child')
//  .addClass('red-text');
//奇数番目と最後の要素を取得して、red-textクラスをつける
//★疑似クラスでは１番目から数えるので、1,3,5の奇数番目と
//最後の要素が赤くなる。
//★疑似要素、疑似クラスとは：
//●疑似要素：cssでタグの一部分を指定できるもの
//例）h2::first-letter{color:red}→要素名::first-letter{スタイル}で、要素の１文字目だけに
//スタイルを適用。他に、first-line(１行目)、before/after(要素の直前/直後）いずれも、
//要素名：とすることを忘れない！！

//●疑似クラス：要素が特定の状態のときに{}内のスタイルにすることを指定
//例）a:hover{}＝aタグにホバーしたとき{}内のスタイルにする
//他に、link（未訪問のリンク）、visited（訪問済みのリンク）、
//active(マウスで選択中)、nth-child(n)(親要素内のn番目の要素)
//nth-of-type(n)（親要素内の同じ種類の要素の中のn番目の要素）、not(B)(B以外の要素）)

  });
});

// $('p').text('おはよう！');
    // $('p').addClass('red-text');
    //ボタンをクリックすると、<p>の中のtextをおはよう！に書き換える。
    //ボタンをクリックすると字が赤くなるようにする
    //→htmlのstyleタグで設定したred-textクラスをpに適用する。
    // $('p')
    //   .text('おはよう！')
    //   .addClass('red-text');
//↑同じ要素に２つのメソッドを適用する場合、このようにつなげて書いてもよい。
//（メソッドチェーンとよぶ）

//要素の取得は、$()の()内に要素名を入れればよい。
//例）jsでのdocument.getElementByID('target').textContent='Hello';
//のうち、document.getElementByID('target')の部分は、
//→$('#id属性')つまり、$('#target')のみでよい。
//複数の要素の取得：
//例）document.querySelectorAll('ul>li')[2].remove();
//は、$('ul>li').eq(2).remove();
//eq=イコールの意味なので、複数の要素のうち２番目の要素を指定している

//メソッドの操作は、独自のメソッドに書き換える：
//例）.textContent='Hello';→.text('Hello');
//.classList.add('active');→.addClass('active');となるので、
//document.querySelector('ul.menu').classList.add('active');
//→$('ul.menu').addClass('active');となる。



