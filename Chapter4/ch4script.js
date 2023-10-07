// JavaScript外部ファイル
document.getElementById('form').onsubmit = function(){
    var search = document.getElementById('form').word.value;
    document.getElementById('output').textContent = '『'+ search+'』の検索中．．．';
    return false;
};