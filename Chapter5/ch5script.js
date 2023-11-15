// //外部ファイルだよ
// var countdown = function(due){
//     var now = new Date();

//     var rest = due.getTime() - now.getTime();
//     var sec = Math.floor(rest / 1000 % 60);
//     var min = Math.floor(rest / 1000 / 60) % 60;
//     var hours = Math.floor(rest / 1000 / 60 / 60) % 24;
//     var days = Math.floor(rest / 1000 / 60 / 60 /24);
//     var count = [days, hours, min, sec];

//     return count;
// }

// var goal = new Date(2024,1,13);
// // goal.setHours(23);
// // goal.setMinutes(59);
// // goal.setSeconds(59);

// var recalc = function(){
// var counter = countdown(goal);
// // var time = counter[1] + '時間' + counter[2] + '分' + counter[3] + '秒';
// // document.getElementById('timer').textContent = time;
// document.getElementById('day').textContent = counter[0];
// document.getElementById('hour').textContent = counter[1];
// document.getElementById('min').textContent = counter[2];
// document.getElementById('sec').textContent = counter[3];
// refresh();
// }

// var refresh = function(){
//     setTimeout(recalc,5000);
//     //↑上の2個目のパラメータは待ち時間。ミリ秒なので1000で1秒5000で5秒
// }
// recalc();
var lang = document.querySelector('html').lang;

var opt;
if(lang === 'ja'){
    opt = document.querySelector('option[value="index.html"]');
}
else if(lang === 'en'){
    opt = document.querySelector('option[value="index-en.html"]');
}
else if(lang === 'zh'){
    opt = document.querySelector('option[value="index-zh.html"]');
}
if(opt){
    opt.selected = true;
}
// opt.selected = true;

document.getElementById('form').select.onchange = function(){
    // location.href = document.getElementById('form').select.value;
    location.href = this.value;
}