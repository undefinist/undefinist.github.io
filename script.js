var $grid = $('.grid').masonry({
    // options
    itemSelector: '.card-outer'
});

$grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
});