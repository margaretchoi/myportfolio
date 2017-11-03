
$(document).ready(function(){

	console.log("Running JS");
	buildPortfolio();

});

let portolioImages = [
	'/assets/images/portfolio_passport.png',
	'/assets/images/portfolio_passport.png',
	'/assets/images/portfolio_passport.png',
	'/assets/images/portfolio_passport.png',
	'/assets/images/portfolio_passport.png'
];


buildPortfolio = () => {

	for (let i=0; i < portolioImages.length; i++) {
		$('#portfolio-images-wrapper').append('<div class="portfolio-image"><img src="' + portolioImages[i] + '"></div>').animate({opacity: 1}, 2000, function() {
    // Animation complete.
  	});;
	};

}

