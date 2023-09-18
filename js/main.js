jQuery(function ($) {
  const notElement =
    'html,body,section,h1,h2,img,a,header,footer,main,br,.no_inview';
  $('*')
    .not(notElement)
    .on('inview', function (event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        $(this).stop().addClass('i');
      }
    });
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var rellax = new Rellax('.rellax');
