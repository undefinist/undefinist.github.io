(function() {
    let $grid = document.querySelectorAll('.grid');
    for (let elem of $grid) {
        let masonry = new Masonry(elem, {
            itemSelector: '.card-outer',
            columnWidth: '.grid-sizer'
        });
        let imgload = imagesLoaded(elem);
        imgload.on("progress", function() {
            masonry.layout();
        });
        window.addEventListener('resize', function(event) {
            masonry.layout();
        });
        document.fonts.ready.then(function() {
            masonry.layout();
        });
    }
})();