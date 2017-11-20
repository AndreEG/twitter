var textArea = document.getElementById('section-tweet');
var countArea = document.getElementById('p-count');
var icons = document.getElementById('icons');
var btn = document.getElementById('btn-twittear');
var ul = document.getElementById('tweet-here').firstElementChild;

window.addEventListener('load', function() {
  textArea.addEventListener('focus', fc);
  // textArea.addEventListener('blur', blr); falta validar que haga blur cuando el usuario no haya igresado texto
  btn.addEventListener('click', function() {
    if (textArea.value) {
      var li = document.createElement('li');
      li.textContent = textArea.value;
      ul.appendChild(li);
      textArea.value = '';
    };
  });
  window.addEventListener('keyup', function() {
    var count = textArea.value.length;
    countArea.textContent = 140 - count;
  });
});

var fc = function() {
  textArea.classList.add('section-tweet-focus');
  textArea.classList.remove('section-tweet');
  icons.classList.add('icons-focus');
  icons.classList.remove('display-none');
  countArea.classList.add('area-count');
  countArea.classList.remove('display-none');
};
var blr = function() {
  textArea.classList.remove('section-tweet-focus');
  textArea.classList.add('section-tweet');
  icons.classList.remove('icons-focus');
  icons.classList.add('display-none');
  countArea.classList.remove('area-count');
  countArea.classList.add('display-none');
};

