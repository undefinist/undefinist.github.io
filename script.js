(function() {
    let $grid = document.querySelector('.grid');
    let masonry = new Masonry($grid, {
        itemSelector: '.card-outer',
        columnWidth: '.col-12.col-sm-6.col-md-4.col-lg-4.col-xl-3'
    });
    let imgload = imagesLoaded($grid);
    imgload.on("progress", function() {
        masonry.layout();
    });
    window.addEventListener('resize', function(event) {
        masonry.layout();
    });
})();