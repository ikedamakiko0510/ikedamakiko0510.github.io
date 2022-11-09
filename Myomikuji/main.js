'use strict';
{
  const btn = document.getElementById('btn');
  // const+htmlでつけたid=取得したい要素名
  const result = document.getElementById('result');

  btn.addEventListener('click', () => 
  //id. クリックイベントの設定
  { const n = Math.floor(Math.random() * 3);
    switch (n) {
      case 0:
        result.textContent = '大吉';
        break;
      case 1:
        result.textContent = '中吉';
        break;
      case 2:
        result.textContent = '凶';
        break;}
  });
  // クリックすると、ランダムに生成された数字の値により、
  //おみくじ結果が出る。
}