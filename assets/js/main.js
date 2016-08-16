jQuery(document).ready(function() {

//----preloader---------
    var deg=0;
	$(window).load(function() {   
		$('#circle')
			var rotate=setInterval(function(){
				deg=deg+60;
				$('#circle').css({'transform':'rotate('+deg+'deg)'});
			},120)
			
			$(this)
			.animate({
				'transform':'rotate('+deg+'deg)'
				},500, function() {clearInterval(rotate);})
			.delay(500)
			.fadeOut('slow');
						
		$('#preloader')
			.delay(500)
			.fadeOut('slow');
	    $('body')
	   		.delay(500)
	    	.css({'overflow':'visible'});
	});


//--------dropdown menu-----

//----button tabs --->>-- first tab, second tab, third tab
var tabselect=$('#about .first-part .btngroup a');
var groupselect=$('#about .first-part .group');

	$(tabselect).click(function() {
		$(tabselect).removeClass('active');
		$(this).addClass('active');

		var data=$(this).data('href');
		$(groupselect).css({
			display: 'none'
		});
		$(data).css({
			display: 'block'
		});
		
	});
});

