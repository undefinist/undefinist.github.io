var $grid = $('.grid').masonry({
    // options
    itemSelector: '.card-outer',
    columnWidth: '.col-12.col-sm-6.col-md-4.col-lg-4.col-xl-3'
});

$grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
});

$(window).resize(function() {
    $grid.masonry();
});