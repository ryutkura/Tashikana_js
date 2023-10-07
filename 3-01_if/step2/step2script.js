//外部JavaScriptファイル
// var hour = new Date().getHours();

// if(hour >= 19 && hour < 21){
//     window.alert('お弁当30%OFF！');
// }else if(hour === 9 || hour ===15){
//     window.alert('お弁当1個買ったら1個おまけ！');
// }else{
//     window.alert('お弁当はいかがでしょうか？');
// }
// for(var i = 1;i <= 10; i++){
//     console.log(i + "枚");
// }
//while文の内容
// var enemy = 100;
// var attack;
// var count =0;

// window.alert('戦闘スタート！');
// while(enemy > 0){
//     attack = Math.floor(Math.random() * 30) + 1;
//     console.log('モンスターに'+attack+'のダメージ！');
//     enemy -=  attack;
//     count++;
// }
// console.log('モンスターを倒した！');
// console.log(count);
var price = 10000;
var total = function(price){
    var tax = 0.1;
    return price + price * tax;
}
price =20000;

console.log('コーヒーメイカーの値段は'+total(price)+'円(税込)です。');
document.getElementById('autoput').textContent= 'コーヒーメイカーの値段は'+total(80000)+'です。';
document.getElementById('output2').textContent= 'コーヒーフィルタの値段は'+total(80000)+'です。';
document.getElementById('output3').textContent= '豆の値段は'+total(200)+'です。';
//↑getElementByIdの引数の変数名は任意に決められるっぽい