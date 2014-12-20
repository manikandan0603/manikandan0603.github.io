$(document).ready(function () {
  var maxheight = 0;
  function setht(id) {
  $(id).each(function () {
   var ht = $(this).height();
   if (ht > maxheight) {
     maxheight = ht;
   }
  });
  if (maxheight > 0) {
    $(id).height(maxheight);
  }
  }
  setht('.box .equal');
  setht('.box h3');
  
  $("#main-banner").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  

    var owl = $("#testimonial");
 
  owl.owlCarousel({
      items : 2, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events
  $(".customers .next").click(function(){
    owl.trigger('owl.next');
  })
  $(".customers .prev").click(function(){
    owl.trigger('owl.prev');
  })

});
