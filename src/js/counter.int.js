/* eslint-disable comma-dangle */

let a = 0;
$(window).scroll(() => {
  const oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      const $this = $(this);
      const countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

      {

        duration: 2000,
        easing: 'swing',
        step() {
          $this.text(Math.floor(this.countNum));
        },
        complete() {
          $this.text(this.countNum);
          // alert('finished');
        }

      });
    });
    a = 1;
  }
});