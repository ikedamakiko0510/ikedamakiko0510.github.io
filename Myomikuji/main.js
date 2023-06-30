'use strict';
{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
 
  // const+htmlでつけたid=取得したい要素名
 
  //★★htmlを作成すると、Document Object Model=DOM
  // が作られ、javascriptで操作できる。
  //DOMのつくり：documentがあり、そこからNodeと呼ばれる枝分かれをしている。
  //改行、スペースもNodeに含まれるが、htmlの先頭と末尾のスペースはNodeにならない。
  //要素(Element)Node,textNodeなどと内容に応じて呼ぶ。親Node=parent Node
  //子Node=Child Node、きょうだいNode=Sibling Node

  //btn.addEventListener('click', () => {result.textContent='hit!';}
  //↑btnをクリックするとhit!と表示する。
  //id. クリックイベントの設定
  //これを、hit!でなく、ランダムに生成された数字の値により
  //おみくじ結果を出すようにするのが下記：

  btn.addEventListener('click', () => 
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

  //Math.random()＝これを実行するたびに、0以上1未満の数値をランダムに生成する。
  //3通りの結果＝0,1,2が欲しい（それらを大吉、中吉、凶に変換する）
  //Math.random()の結果を３倍する＝生成される数字が、0.000から2.999...になる。
  //↑それらの、整数部分だけを取得する＝0,1,2のみになる。
  //Math.floor()（＝()内の数値を整数表示にする）を使用する。
  //→const n=Math.floor(Math.random()*3)とすることで、
  //nは、ランダムに生成された数値0,1,2のみになる。
  //※nは、クリックされるたびにリセットされる＝変数でなく定数で良い。
  //これを、resultに表示したいので、result.textContent=n;とする。
  //これを、0,1,2＝それぞれ、大吉、中吉、凶にするためには、
  //switchを使った条件分岐をする。
  //switch(定数名)
  //   {case'a':処理1;break;
  //    case'b':処理2;break;
  //    case'c':処理3;break;}
  //定数がaのとき処理１，bのとき処理２，cのとき処理3を行うという意味になる。
  //:からbreak;までの処理を行うという意味になるので、break;を忘れずにつける。
  //caseは複数並べて指定し、そのあとに:とすることもできる。
  //a,b,cどれでもないときの処理を指定したい場合、
  //default:処理4;break; とする。
  //------------------------------配列を使う場合---------------------
  //const results=['大吉','中吉','凶']; =resultという配列を作って、全ての要素を,で並べる。
  //const n = Math.floor(Math.random() * 3); は同じ。=nはランダムな0,1,2
  //result.textContent=results[n];=配列resultsのうち、n番目のものを表示する。
  //★★配列＝最初にconst 配列名=[a,b,c,....] で設定し、配列名[x](xは数値）で
  //x番目の要素を指定する！！
  //配列名の要素数=配列名.lengthと指定すると、要素が３個なら３，４個なら４と自動で変わる。
  //const n = Math.floor(Math.random() * results.length);とすると*3,*4と自動で変更される。 
  //---------------------------------------------------------------------




}