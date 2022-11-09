'use sctrict';

{
  const timer=document.getElementById('timer');
  const start=document.getElementById('start');
  const stop=document.getElementById('stop');
  const reset=document.getElementById('reset');

  let startTime;
  // 開始時間の変数宣言
  let timeoutId;
  //timeoutIdはsetTimeoutの返り値として取得できるので、setTimeoutの前に=で置く。
  let elapsedTime=0;
  //timerが経過した時間の変数宣言。初期値を0とするので、=0とする。

  function countUp(){
    //console.log(Date.now()-startTime);
    //このままではミリ秒表示なので、以下を設定して分・秒表示にする
    //以下を設定すれば、console.logは不要
    //elapsedTimeを足すことで、"経過時間も含めた"表示になる
    //つまり、途中で止めて再スタートする場合、経過時間からスタートできる。
  
    const d=new Date(Date.now()-startTime + elapsedTime);
    //経過時間でDateオブジェクトを作る
    const m=String(d.getMinutes()).padStart(2,'0');
    //分の設定
    //表示を文字列(String)として、２桁表示(padStart(2))、２桁に満たないときは
    //文字列の前を0で埋める('0')
    const s=String(d.getSeconds()).padStart(2,'0');
    //秒の設定
    const ms=String(d.getMilliseconds()).padStart(3,'0');
    //ミリ秒の設定
    //ミリ秒は３桁
    timer.textContent=`${m}:${s}:${ms}`;
    //まとめてタイマーに表示する

    timeoutId=setTimeout(()=>{
      countUp();
    },10);
   }
  //timeoutIdをsetTimeoutの返り値として取得している↑これを、↓下のclearTimeoutに渡す
  //カウントアップ関数の宣言 現在の時刻＝Date.now()から、
  //startTimeを引いたものを表示すると、startTimeからの経過ミリ秒がわかる。
  //ミリ秒＝１０００分の１秒
  //setTimeout＝,後の数値ミリ秒後に{}の処理を呼び出す＝繰り返し処理となる。

   function setButtonStateInitial(){
    // start.disabled=false;
    // stop.disabled=true;
    // reset.disabled=true;
    //div要素にはdisabledプロパティが使えないので、 
    //inactiveクラス=色を少し薄くする＝opacity:0.6をつけたり
    //外したりすることでスタイルを付けながら制御する方法に変更
    //=は不要になるので注意！

    start.classList.remove('inactive');
    // inactiveクラスをなし=removeにする
    stop.classList.add('inactive');
    // inactiveクラスをあり=addにする
    reset.classList.add('inactive');
   }
   function setButtonStateRunning(){
    // start.disabled=true;
    // stop.disabled=false;
    // reset.disabled=true;
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
   }
   function setButtonStateStopped(){
    // start.disabled=false
    // stop.disabled=true;
    // reset.disabled=false;
    start.classList.add('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
   }
   //ボタンの状態を設定する関数。Initial,Running,Stoppedの３種類つくり、
   //それぞれの状態の時の有効・無効なボタンを設定する。
   //①初期状態＝stopとresetを無効
   //②タイマー稼働状態＝startとresetを無効
   //③タイマー停止停止＝stopとresetを無効
   //無効にする＝idに対し、disabledプロパティをtrueにする＝id名.disabled=true;
   //有効にする＝無効の逆＝trueをfalseにする
   //上記３つの関数を①初期状態②３つのボタンを押したときにそれぞれ設定する

   setButtonStateInitial();
  //  ①初期状態（何もボタンを押していない）

  // ↓スタートボタンのクリックイベントの設定＝クリックしたときに{}の操作をする。
   start.addEventListener('click',()=>{
    //↓ボタンクラスがinactiveのときは、それ以降の処理をしない＝return
    if(start.classList.contains('inactive')===true){
      return;}
   setButtonStateRunning();
  //↑スタートボタンを押す＝Rnningの状態にする（この関数を動かす）
  startTime=Date.now();
    countUp();
  });  
  //{}内に、時間のカウントアップの処理を書く
  //基準となる日時からの経過ミリ秒を使って計算するstartTime＝Date.now()関数
  //＝countUPの実行

  stop.addEventListener('click',()=>{
    if(start.classList.contains('inactive')===true){
      return;}
      setButtonStateStopped();
    //ストップボタンを押す＝stoppedの状態にする（この関数を動かす）
    // ストップボタンのクリックイベントの設定＝クリックしたときに{}の操作をする。
    //＝setTimeoutのキャンセルをする処理＝clearTimeoutをする
        clearTimeout(timeoutId);
    //()内にTimeout用のidが必要なので、上で宣言して↑()に入力する 
        elapsedTime+=Date.now()-startTime;
    //stopボタンを押すと時間が止まり、止まった時間から再スタートする設定
     //timerが経過した時間(elapsedTimeの変数宣言を上↑でし、計算式を設定する
    //計算式＝現在時刻-開始時間
    //elapsetTime=とすると、直近のタイマーが走っていた時間しか保持しないので、
    //elapsedTim+=として、タイマーが走っていた時間を全て足し上げる。  
    });  

  reset.addEventListener('click',()=>{
    if(start.classList.contains('inactive')===true){
      return;}
      setButtonStateInitial();
        //リセットボタンを押す＝Initialの状態にする（この関数を動かす）
        // リセットボタンのクリックイベントの設定＝クリックしたときに{}の操作をする。
        //htmlでid=timerをつけたもののテキスト(timer.texContent)を、元の00:00.000表示に戻す
            timer.textContent='00:00:000';
            elapsedTime=0;
        //経過時間もリセットする設定
          });  
    

}