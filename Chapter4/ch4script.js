// JavaScript外部ファイル
// document.getElementById('form').onsubmit = function(){
//     var search = document.getElementById('form').word.value;
//     document.getElementById('output').textContent = '『'+ search+'』の検索中．．．';
//     return false;
// };
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();
var ampm = '';
if(hour < 12){
    ampm = 'a.m.';
}
else{
    ampm = 'p.m.';
}

var output = year + '/' + (month+1) + '/' +date +' '+(hour%12)+':'+ min + ampm;
document.getElementById('time').textContent = output;