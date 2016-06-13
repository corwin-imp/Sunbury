$(document).ready(function(){
    // Make sure to call jcider on the wrapper element


    $("#primary-menu").addClass("flexnav").flexNav({
		'animationSpeed':     250,            // default for drop down animation speed
		'transitionOpacity':  true,           // default for opacity animation
		'buttonSelector':     '.toggle_mnu', // default menu button class name
		'hoverIntent':        false,          // Change to true for use with hoverIntent plugin
		'hoverIntentTimeout': 150,            // hoverIntent default timeout
		'calcItemWidths':     false,          // dynamically calcs top level nav item widths
		'hover':              true            // would you like hover support? 
    });

$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

$('<button class="next-button">Click More Products</button>').appendTo('.related .products');
		$(".next-button").on("click", function(){
			$(".related .products .product").css({"display": "block"});
			$(".next-button").css({"display": "none"});
		});


		$(".screen-reader-text").on("click", function(){
			($(".search-box-wrapper").toggleClass('active'));
			return false;
		});

function owlC(){
	$('.slider-wrap').owlCarousel({
			loop: true,
			items: 1,
			itemClass: "slide",
			nav: true,
			navText: "",
			mouseDrag: false
	});

};

$(".footer-sidebar .fw-ul").addClass('navg');
function vergoco(){

	var apEvent = function(){
	$('.wrapper-in').wrap('<li class="inside">');
	$(".inside .wrapper-in .fw-btn-1").each(function(){
		$(this).prependTo($(this).parents('.inside'));
		$(this).parents('.inside').appendTo($(this).parents('.fw-ul'));
	});
};
apEvent();


	$(".footer-sidebar .fw-ul").navgoco({
				caretHtml: '',
				accordion: true
	});
};




function min(){
a = $(window).width();
	switch(true) {
		
		case a > 1280:
		if($('.footer-sidebar .inside').length == true) {
			$(".footer-sidebar .fw-ul").navgoco('destroy');
		
		};

		break;



		case a < 992:
			if($('#main > .product .entry-summary .product-title-wrap').length) {
				var time = performance.now();
				// некий код
							$('.product-title-wrap').prependTo('#main > .product');
							$('.woocommerce-breadcrumb').prependTo('#main > .product');
				time = performance.now() - time;
				console.log('Время выполнения 1 = ', time);
			};
		break;
		case a > 992:
			if($('#main > .product > .product-title-wrap').length) {
						var time = performance.now();
				// некий код
							$('.product-title-wrap').prependTo('#main > .product .entry-summary');
							$('.woocommerce-breadcrumb').insertAfter('#main > .product .images');
				time2 = performance.now() - time;
				console.log('Время выполнения 2 = ', time2);
						break;
			};
		case a < 1280:

			if($('.footer-sidebar .inside').length == false) {


				var time = performance.now();
			

					vergoco();
				time3 = performance.now() - time;
				console.log('Время выполнения 3 = ', time3);
			};
		break;

		default:
	
	};
		return false;
};

owlC();
min();
$(window).resize(function(){

min();
	
	});			

		



/*    function min(){
		if(window.innerWidth < 480){
			$(".main-foot .row").attr('id', 'ver-nav');
			$("#ver-nav").navgoco({
				caretHtml: '',
				accordion: true
	
	});

		}else{
			$(".main-foot .row").removeAttr('id');
			$(".main-foot .row").navgoco('destroy');
			$(".main-foot .row ul").css({"display": "block"});
			$(".main-foot .list-header span").css({"display": "none"});
			$(".options .button").html('<img src="img/cart.png" width="22" alt=""> My Cart(0 items)');
		};
		return false
	};*/



	

});