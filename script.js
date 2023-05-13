$(function () {
  float();
});

function float() {
  $('.sun')
    .animate({ top: '1.5rem' }, 1000)
    .animate({ top: '0rem' }, 1000, float);
}
