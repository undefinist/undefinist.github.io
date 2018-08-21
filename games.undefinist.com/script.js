var games = null;
var htmlStr = "";

function filter_itchio_data(data)
{
	var json = [];
	data = data.games;
	for(var i = 0; i < data.length; ++i)
	{
		var obj = { title: data[i].title, url: data[i].url, cover: data[i].cover_url,
			desc: data[i].short_text, date: data[i].published_at.substring(0, data[i].published_at.indexOf(" ")) };
		json.push(obj);
	}
	data.sort(function(a, b) { return a.date < b.date ? 1 : -1 });
	return json;
}

function build(elems_per_row) {
	var $container = $("#games");
	var htmlStr = '<div class="row">';

	for(let i = 0; i < games.length; ++i)
	{
		if(games[i].type == null)
			games[i].type = "Game Jam";
		if(i % elems_per_row == 0 && i > 0)
			htmlStr += '</div><div class="row">';
		htmlStr +=
			'<div class="col-sm" data-type="' + games[i].type + '">' +
				'<div class="box" style="background-image: url(' + games[i].cover + ');"><a class="box-link" href="' + games[i].url + '"></a></div>' +
				'<div class="info-box collapse"><div><h3>' + games[i].title + '</h3><p>' + games[i].desc + '<br><small>' + games[i].type + " // " + games[i].date + '</small></p></div></div>' +
			'</div>';
	}

	$container.html(htmlStr);

	$("#games > .row > div").hover(function(e) {
		var $infobox = $(e.delegateTarget).children(".info-box");
		if($infobox.hasClass("collapsing"))
			$infobox.addClass("will-show").removeClass("will-collapse");
		$infobox.collapse("show");
	}, function(e) {
		var $infobox = $(e.delegateTarget).children(".info-box");
		if($infobox.hasClass("collapsing"))
			$infobox.addClass("will-collapse").removeClass("will-show");
		setTimeout(function() {
			$infobox.collapse("hide")
		}, 350);
	});

	$(".info-box").on("shown.bs.collapse", function() {
		var $this = $(this);
		if($this.hasClass("will-collapse"))
			$this.collapse("hide");
		$this.removeClass("will-collapse").removeClass("will-show");
	}).on("hidden.bs.collapse", function() {
		var $this = $(this);
		if($this.hasClass("will-show"))
			$this.collapse("show");
		$this.removeClass("will-collapse").removeClass("will-show");
	});
}

jQuery.getJSON("data.json", function(data) {
	data.sort(function(a, b) { return a.date < b.date ? 1 : -1 });
	games = data;
	build(4);
});

$(".btn").click(function() {
	console.log($(this));
	$(this).removeClass("focus");
});

/*! outline.js v1.2.0 - https://github.com/lindsayevans/outline.js/ */
(function(d){

	var style_element = d.createElement('STYLE'),
	    dom_events = 'addEventListener' in d,
	    add_event_listener = function(type, callback){
			// Basic cross-browser event handling
			if(dom_events){
				d.addEventListener(type, callback);
			}else{
				d.attachEvent('on' + type, callback);
			}
		},
	    set_css = function(css_text){
			// Handle setting of <style> element contents in IE8
			!!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
		}
	;

	d.getElementsByTagName('HEAD')[0].appendChild(style_element);

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	add_event_listener('mousedown', function(){
		set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
	});

	add_event_listener('keydown', function(){
		set_css('');
	});

})(document);