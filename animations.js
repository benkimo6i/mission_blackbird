$( document ).ready(function() {
    

    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var targetLink = this.hash;
      var targetDiv = $(targetLink);


      targetDiv.fadeIn(1000).siblings().fadeOut(500);

  	});

  	$('.logoText').delay(2000).animate({
  		opacity: 1
  	}, 1500);

  	// $('.social-icons').on('mouseover', function (e) {

  	// 	$('.twitter').addClass('animated zoomIn')
  	// 	$('.instagram').addClass('animated zoomIn')
  	// 	$('.linkedin').addClass('animated zoomIn')
  	// });

    // social media animations

    var twitter = $('.twitter');
    var instagram = $('.instagram');
    var linkedin = $('.linkedin');
    var logo = $('.logoImg')


    function animateSocialIcons(icon){
      icon.on('mouseover', function (e) {
        $(this).addClass('animated zoomIn')
      });
    };

    animateSocialIcons(twitter);
    animateSocialIcons(instagram);
    animateSocialIcons(linkedin);



 
});










