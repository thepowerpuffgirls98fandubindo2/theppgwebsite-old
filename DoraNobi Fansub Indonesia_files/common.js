<!--


//////////////////////////////////
//ページ内リンクでアニメーション//
//////////////////////////////////

$(function(){
$('a[href^=#]').click(function(){
var speed = 500;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$("html, body").animate({scrollTop:position}, speed, "swing");
return false;
});
});


//////////////////////////////
//マウスオーバーで画像が光る//
//////////////////////////////

$(function(){
$("a img").hover(
function(){
$(this).fadeTo(200, 0.5);
},
function(){
$(this).fadeTo(100, 1.0);
}
);
});

$(function(){
$("a div").hover(
function(){
$(this).fadeTo(200, 0.5);
},
function(){
$(this).fadeTo(100, 1.0);
}
);
});



/////////////////////////
//スクロールでgoTop出現//
/////////////////////////

$(function() {
var topBtn = $('#goTop');
topBtn.hide();
//スクロールが100に達したらボタン表示
$(window).scroll(function () {
if ($(this).scrollTop() > 100) {
topBtn.fadeIn();
} else {
topBtn.fadeOut();
}
});
//スクロールしてトップ
topBtn.click(function () {
$('body,html').animate({
scrollTop: 0
}, 500);
return false;
    });
});


////////////////////////////////////
//ポップアップwindow（サイズ固定）//
////////////////////////////////////

function openWin(url,winName,w){
screenH = screen.height*0.7;
new_win = window.open(url,winName,'toolbar=no,status=no,directories=no,scrollbars=yes,location=no,resizable=yes,menubar=no,status=no,toolbar=no,width='+w+',height='+screenH);
new_win.focus();
}



//////////////////
//nivoスライダー//
//////////////////

$(window).load(function() {
$('#slider').nivoSlider({
effect:'boxRainGrowReverse', // 画像切り替え時のアニメーション
animSpeed:500, // アニメーション速度(ms)
pauseTime:5000, // 画像切り替えまでの時間(ms)
});
});


///////////////////////////
//flashムービーのストップ//
///////////////////////////

function movieStop(){
if(navigator.userAgent.indexOf("Win") != -1){
document.getElementById("newtop").jtoa("false");
}
else{
document.getElementById("noIEnewtop").jtoa("false");
}
}
function movieStart(){
if(navigator.userAgent.indexOf("Win") != -1){
document.getElementById("newtop").jtoa("true");
}
else{
document.getElementById("noIEnewtop").jtoa("true");
}
}

	
-->