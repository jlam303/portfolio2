$(function () {
  float();
  $('.planet').hover(
    function () {
      this.src =
        'images/Planet' +
        String(Number(this.getAttribute('data-planet')) + 1) +
        '.png';
      $('html').css('cursor', 'pointer');
      $('.pic').removeClass('d-none');
      $('.pic').addClass('d-block');
    },
    function () {
      this.src =
        'images/Planet' +
        String(Number(this.getAttribute('data-planet'))) +
        '.png';
      $('html').css('cursor', 'default');
      $('.pic').removeClass('d-block');
      $('.pic').addClass('d-none');
    }
  );
  $('.planet').click(function () {
    window.location.href = this.getAttribute('data-link');
  });
  $('#co').click(function () {
    setTimeout(function () {
      $('#contact').get(0).scrollIntoView({ behavior: 'smooth' });
    }, 500);
  });
});

function float() {
  $('.float')
    .animate({ top: '1.5rem' }, 1000)
    .animate({ top: '0rem' }, 1000, float);
}
