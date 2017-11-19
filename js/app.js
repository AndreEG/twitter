window.addEventListener('load', function() {
  var textArea = document.getElementById('section-tweet');
  var icons = document.getElementById('icons');
  var btn = document.getElementsByClassName('submit-none')[0];
  textArea.addEventListener('focus', function() {
    textArea.classList.add('section-tweet-focus');
    textArea.classList.remove('section-tweet');
    icons.classList.add('icons-focus');
    icons.classList.remove('icons');
    btn.classList.add('submit');
    btn.classList.remove('submit-none');
  });
  textArea.addEventListener('blur', function() {
    textArea.classList.remove('section-tweet-focus');
    textArea.classList.add('section-tweet');
    icons.classList.remove('icons-focus');
    icons.classList.add('icons');
    btn.classList.remove('submit');
    btn.classList.add('submit-none');
  });
  btn.addEventListener('click',function(e) {
    
  });
});