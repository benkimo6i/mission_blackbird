$( document ).ready(function() {
    

    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var targetLink = this.hash;
      var targetDiv = $(targetLink);


      targetDiv.fadeIn(1000).siblings().fadeOut(700);

  });

});