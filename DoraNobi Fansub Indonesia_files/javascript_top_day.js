<!--

/////////////////////
//TOPアニメーション//
/////////////////////

$(document).ready(function() {
setTimeout("animation()",300);
});

function animation(){
dora_day();
minidora_day();
dorami_day();
cloud1();
cloud2();
cloud3();
cloud4();
cloud5();
peko_day();
}

function peko_day(){
$("#peko_day").animate({top:"+=10px"},1500,'easeInOutSine').animate({top:"-=10px"}, 1500,'easeInOutSine');
setTimeout("peko_day()",3000);
}
function minidora_day(){
$("#minidora_day").animate({top:"-=15px"},1000,'easeInOutSine').animate({top:"+=15px"}, 1000,'easeInOutSine');
setTimeout("minidora_day()",1000);
}
function dora_day(){
$("#dora_day").animate({top:"-=90px"},250,'easeOutQuad').animate({top:"+=90px"}, 250,'easeInQuad');
setTimeout("dora_day()",500);
//$("#dora_day").animate({rotate:"10deg"},800,'easeInOutQuad').animate({rotate:"0deg"}, 800,'easeInOutQuad');
//setTimeout("dora_day()",1600);
}
function dorami_day(){
$("#dorami_day").animate({rotate:"4deg"},120,'easeInOutQuad').animate({rotate:"0deg"}, 120,'easeInOutQuad');
setTimeout("dorami_day()",240);
}
var cloudWidth = Math.floor($(window).width()+600);
function cloud1(){
$("#cloud1").animate({left:cloudWidth},65000,'linear').animate({left:"-300px"}, 0)
setTimeout("cloud1()",1000);
}
function cloud2(){
$("#cloud2").animate({left:cloudWidth},62000,'linear').animate({left:"-150px"}, 0)
setTimeout("cloud2()",1000);
}
function cloud3(){
$("#cloud3").animate({left:cloudWidth},34000,'linear').animate({left:"-100px"}, 0)
setTimeout("cloud3()",1000);
}
function cloud4(){
$("#cloud4").animate({left:cloudWidth},40000,'linear').animate({left:"-150px"}, 0)
setTimeout("cloud4()",1000);
}
function cloud5(){
$("#cloud5").animate({left:cloudWidth},58000,'linear').animate({left:"-200px"}, 0)
setTimeout("cloud5()",1000);
}
	
-->