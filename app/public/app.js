// Burger menu event listener
$(document).ready(function(){
	$('#menu-burger').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('open');
	});


	$('#downarrow').on("click", function( e ) {
	    
	    e.preventDefault();

	    

	    let href = $(this).attr('href');
	    console.log(href);

	    $("body, html").animate({ 
	        scrollTop: $(href).offset().top 
	    }, 100);
	    
	});


});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	$('#mySidenav').css('width', '250px');
	$('#home-wrapper').css('margin-left', '250px');
	$('nav').css('margin-left', '290px');
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	$('#mySidenav').css('width', '0px');
	$('#home-wrapper').css('margin-left', '0px');
	$('nav').css('margin-left', '40px');
}

function scrollToMiddle() {
	$('#middle').scrollIntoView();
	console.log('scrolling');
}

function scrollToBottom() {
	$('#bottom').scrollIntoView();
}
