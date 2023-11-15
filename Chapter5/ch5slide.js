var images = ['../Chapter5/5-04_image/img1.jpg','../Chapter5/5-04_image/img2.jpg','../Chapter5/5-04_image/img3.jpg','../Chapter5/5-04_image/img4.jpg'];
var current = 0;
var pageNum = function(){
    document.getElementById('page').textContent = (current + 1) + '/' + images.length;
}
var changeImage = function(num){
    if(current + num >= 0 && current + num < images.length){
        current += num;
        document.getElementById('main_image').src = images[current];
        pageNum();
    }
};

pageNum();

document.getElementById('prev').onclick = function(){
    changeImage(-1);
};
document.getElementById('next').onclick = function(){
    changeImage(1);
};