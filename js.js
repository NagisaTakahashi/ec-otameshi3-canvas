// alert(1111);


// canvasタグ関連

const can = $("#main_canvas")[0];
const ctx = can.getContext("2d");



// var img = new Image();
// img.src = "img/body/avoter_sample.png";
// img.onload = function() {
//     ctx.drawImage(img, 0,0,346,570); //いったんcanvas内の画像はこのサイズに統一
//     ctx.globalAlpha = 1.0;
// }


// var img2 = new Image();
// img2.src = "img/clothed_3d/全身_RC-N014-C01.png";
// img2.onload = function() {
//     ctx.drawImage(img2, 0,0,346,570); //いったんcanvas内の画像はこのサイズに統一
//     // ctx.globalAlpha = 1.0;
// }


// 土台の白地部分
// ctx.fillStyle = 'rgba(242, 242, 242, 0.5)'; //色味と透過
// ctx.fillRect( 0 , 0 , 100 , 100);//サイズと場所



// //この部分を画像にする
var img2 = new Image();
img2.src = "img/clothed_3d/RC-N012.png";
img2.onload = function() {
    ctx.drawImage(img2, 0,0,346,570); //いったんcanvas内の画像はこのサイズに統一
    // ctx.globalAlpha = 1.0;

  //上に重ねるレイヤーの焼き込み方法指定
  ctx.globalCompositeOperation = "multiply";//乗算！！
  ctx.fillStyle = 'rgb(32, 47, 85)';//色味と透過 乗算指定しているから透過させない
  ctx.globalCompositeOperation = "source-atop";//重なったところだけ！！マスキング！
  // 上に重ねるレイヤーの色味と透過指定
  ctx.fillStyle = 'rgba(32,47, 85, 0.5)'; //色味と透過 
  ctx.fillRect( 0 , 0 , 346 , 570); //サイズと場所


  // //上に重ねるレイヤーの焼き込み方法指定
  // ctx.globalCompositeOperation = "multiply";//乗算！！
  // //上に重ねるレイヤーの色味と透過指定
  // ctx.fillStyle = 'rgba(249, 214, 195)'; //色味と透過 乗算指定しているから透過させない
  // ctx.fillRect( 0 , 0 , 346 , 570); //サイズと場所
  }


// //上に重ねるレイヤーの焼き込み方法指定
// ctx.globalCompositeOperation = "source-in";//重なったところだけ！！
// //上に重ねるレイヤーの色味と透過指定
// ctx.fillRect( 0 , 0 , 346 , 570); //サイズと場所
// ctx.fillStyle = 'rgba(249, 214, 195, 1)'; //色味と透過 乗算指定しているから透過させない



// //上に重ねるレイヤーの焼き込み方法指定
// ctx.globalCompositeOperation = "multiply";//乗算！！
// //上に重ねるレイヤーの色味と透過指定
// ctx.fillStyle = 'rgba(249, 214, 195, 1)'; //色味と透過 乗算指定しているから透過させない
// ctx.fillRect( 0 , 0 , 346 , 570); //サイズと場所

