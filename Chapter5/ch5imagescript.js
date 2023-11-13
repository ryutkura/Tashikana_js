var thumbs = document.querySelectorAll('.thumb');
for(var i = 0;i < thumbs.length;i++){
    thumbs[i].onclick = function(){
        console.log(this.dataset.image);
    };
}