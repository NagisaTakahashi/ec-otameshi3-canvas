//★このJSファイルでは、canvas関連を記述★

// alert(1111);


// canvasタグ関連

const can = $("#main_canvas")[0];
const ctx = can.getContext("2d");


// カラーの定義

var color_list= [
  {"colornum":"01","colorname":"NVY","color_code":"3A3A49","RGB":"58,58,73",},
  {"colornum":"02","colorname":"KKI","color_code":"5D6402","RGB":"93,100,2",},
  {"colornum":"03","colorname":"LIME","color_code":"CFE375","RGB":"207,207,117",},
  {"colornum":"04","colorname":"PPL","color_code":"C20F7C","RGB":"194,15,124",},
  {"colornum":"05","colorname":"RED","color_code":"F32359","RGB":"243,35,89",},
  {"colornum":"06","colorname":"MNT","color_code":"CBF1EF","RGB":"203,241,239",},
];


//上記のカラー定義から、カラーのサムネイルと、カラー名表記に代入して画面上で表示
for( let A = 0 ; A < color_list.length ; A ++ ){

  //このなかにいれてみる

  // //この部分を画像にする
  var img = new Image();
  img.src = "img/clothed_3d/RC-N012.png";

  img.onload = function() {
    ctx.drawImage(img, 0,0,346,570); //いったんcanvas内の画像はこのサイズに統一

    //上に重ねるレイヤーの焼き込み方法指定
    // ctx.globalCompositeOperation = "multiply";//乗算！！
    // ctx.fillStyle = `rgba(${color_list[2].RGB},1)`;//色味と透過 乗算指定しているから透過させない
    // ctx.fillRect( 0 , 0 , 346 , 570); //サイズと場所

    ctx.globalCompositeOperation = "source-atop";//重なったところだけ！！マスキング！
    // 上に重ねるレイヤーの色味と透過指定
    ctx.fillStyle = `rgba(${color_list[2].RGB}, 0.5)`; //色味と透過 
    ctx.fillRect( 0 , 0 , 346 , 570); //サイズと場所

    $(`#color_${color_list[A].colornum}`).on("click",function(){
      ctx.globalCompositeOperation = "source-atop";
      ctx.fillStyle = `rgba(${color_list[A].RGB}, 0.5)`; //色味と透過 
      ctx.fillRect( 0 , 0 , 346 , 570); //サイズと場所  
    });

  }
}


//なにがやぱいって、色を重ねるごとに、「切り替え」ではなく「上塗り」になることが判明！！canvaをいったんここで保存して、CSSでもブレンドモード（乗算）が使えそうなので、そっちで試してみる。





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



// // //この部分を画像にする
// var img2 = new Image();
// img2.src = "img/clothed_3d/RC-N012.png";
// img2.onload = function() {
//     ctx.drawImage(img2, 0,0,346,570); //いったんcanvas内の画像はこのサイズに統一
//     // ctx.globalAlpha = 1.0;

//   //上に重ねるレイヤーの焼き込み方法指定
//   ctx.globalCompositeOperation = "multiply";//乗算！！
//   ctx.fillStyle = 'rgb(32, 47, 85)';//色味と透過 乗算指定しているから透過させない
//   ctx.globalCompositeOperation = "source-atop";//重なったところだけ！！マスキング！
//   // 上に重ねるレイヤーの色味と透過指定
//   ctx.fillStyle = 'rgba(32,47, 85, 0.5)'; //色味と透過 
//   ctx.fillRect( 0 , 0 , 346 , 570); //サイズと場所
// }






