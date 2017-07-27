// Burger menu event listener
$(document).ready(function(){

	$('#menu-burger').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('open');
	});

});

