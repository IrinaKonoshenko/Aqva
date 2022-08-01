const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  $('.reviews__blocks').click(function(){
    $(this).closest(".reviews__element").find('.reviews__blocks').removeClass('reviews__blocks--front')
    $(this).closest(".reviews__element").find('.reviews__blocks').addClass('reviews__blocks--other')
    $(this).addClass('reviews__blocks--front')
    $(this).removeClass('reviews__blocks--other')
  })