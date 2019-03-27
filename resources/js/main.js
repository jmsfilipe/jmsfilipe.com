// typewritter animation
$(function() {
  $('#typed').typed({
    strings: [
      'an Angular developer.',
      'a hybrid apps lover.',
      'a front-end engineer.',
      'Jorge.'
    ],
    typeSpeed: 30,
    showCursor: false,
    callback: function() {
      lift();
    }
  });

  function lift() {
    $('.head-text').addClass('lift-text');
    $('.badge-container').addClass('lift-text');
  }
});
