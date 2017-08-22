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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-105104784-1', 'auto');
ga('send', 'pageview');