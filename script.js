$(function () {
  float();
  // function to make the planets highlight on hover and show the repo images by adding and deleting classes
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
  // On click go to repo link
  $('.planet').click(function () {
    window.location.href = this.getAttribute('data-link');
  });
  // Scroll to contact when clicking the contact in nav popup
  $('#co').click(function () {
    setTimeout(function () {
      $('#contact').get(0).scrollIntoView({ behavior: 'smooth' });
    }, 500);
  });
});

function float() {
  // Animates the planets and the sun to go up and down
  $('.float')
    .animate({ top: '1.5rem' }, 1000)
    .animate({ top: '0rem' }, 1000, float);
}
