const $h1 = $("h1");
const char = '[class*="char"]';
const btn = $('button');
const myTimeline = new TimelineLite();

$h1
  .lettering('words')
  .children('span').lettering();

myTimeline.staggerFrom(char, 1, {
  opacity: 0,
  ease: Elastic.easeOut,
  y: '100%'
}, 0.05);

btn.on('click', function() {
  myTimeline.reversed(!myTimeline.reversed());
});