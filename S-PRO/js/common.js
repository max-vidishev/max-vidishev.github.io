$(function() {
	$('.owl-carousel').owlCarousel({
		loop: true,
		nav: true,
		navText: ["<img src='img/nav-left.png'>", "<img src='img/nav-right.png'>"],
		autoplay: false,
		smartSpeed: 1000,
		autoplayTimeout: 2000,
		items: 1,
		animateOut: "fadeOut",
		onInitialized: function(e) {
			$('.slideCounter').text('1 of' + ' ' + this.items().length)
			console.log();
		}
	});

	$('.owl-carousel').on('changed.owl.carousel', function(e) {
		$('.slideCounter').text(++e.page.index + ' ' + 'of' + ' ' + e.item.count)
	});
});