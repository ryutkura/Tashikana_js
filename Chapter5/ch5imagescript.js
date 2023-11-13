document.addEventListener('DOMContentLoaded', function () {
    var thumbs = document.querySelectorAll('.thumb');
    var bigImg = document.getElementById('bigimg');

    for (var i = 0; i < thumbs.length; i++) {
        thumbs[i].onclick = function () {
            bigImg.src = '../Chapter5/5-04_image/' + this.dataset.image;
        };
    }
});
