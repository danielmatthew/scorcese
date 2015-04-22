function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;


  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}

var posters = document.querySelectorAll('.film-poster');

for (var i = 0; i < posters.length; i++) {
  if (isScrolledIntoView(posters[i])) {
    posters[i].classlist.add('animated');
    posters[i].classlist.add('fadeInLeft');
  }
}
