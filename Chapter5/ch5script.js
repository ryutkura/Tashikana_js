//外部ファイルだよ
var countdown = function(due){
    var now = new Date();

    var rest = due.getTime() - now.getTime();
    var sec = Math.floor(rest / 1000 % 60);
    var min = Math.floor(rest / 1000 / 60) % 60;
    var hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    var days = Math.floor(rest / 1000 / 60 / 60 /24);
    var count = [days, hours, min, sec];

    return count;
}

var goal = new Date(2024,1,13);
// goal.setHours(23);
// goal.setMinutes(59);
// goal.setSeconds(59);

var recalc = function(){
var counter = countdown(goal);
// var time = counter[1] + '時間' + counter[2] + '分' + counter[3] + '秒';
// document.getElementById('timer').textContent = time;
document.getElementById('day').textContent = counter[0];
document.getElementById('hour').textContent = counter[1];
document.getElementById('min').textContent = counter[2];
document.getElementById('sec').textContent = counter[3];
refresh();
}

var refresh = function(){
    setTimeout(recalc,1000);
}
recalc();