var textArea = document.getElementById('section-tweet');
var countArea = document.getElementById('p-count');
var icons = document.getElementById('icons');
var btn = document.getElementById('btn-twittear');
var ul = document.getElementById('tweet-here').firstElementChild;

window.addEventListener('load', function() {
  textArea.addEventListener('focus', fc);
  // textArea.addEventListener('blur', blr); falta validar que haga blur cuando el usuario no haya igresado texto
  btn.addEventListener('click', function() {
    event.preventDefault();
    var li = document.createElement('li');
    var hours = moment().format('LT');
    var fechaCompleta = document.createTextNode(hours);
    var espacio = document.createTextNode(' ');
    
    li.textContent = textArea.value;
    ul.insertBefore(li, ul.firstElementChild);
    li.appendChild(espacio);
    li.appendChild(fechaCompleta);

    textArea.focus();
    textArea.value = '';
    tweetBtn.disabled = true;
    countArea.textContent = 140;
  });
  textArea.addEventListener('keydown', function() {
    if (event.target.value.trim().length) {
      var total = 140 - event.target.value.trim().length;
      countArea.textContent = 140 - event.target.value.trim().length;
      btn.disabled = false;
      if (event.target.value.trim().length > 140) {
        btn.disabled = true;
      }
      countArea.classList.toggle('count-orange', 10 <= total && total < 20);
      countArea.classList.toggle('count-red', 10 > total);
    } else {
      btn.disabled = true;
      countArea.textContent = 140;
    };
    /* var arrText = event.target.value.split('');// convierte el valor de texto e un array
    var acum = 0;// es un acumulador de enters por decirlo
    for (var i = 0; i < arrText.length; i++) { // recorre el array creado
      if (text[i] === '\n') { // busca un enter
        acum++; // cuando lo encuentra acumula
      }
      if (acum) {
        event.target.rows = acum + 2; // si el acumulador es mas de 0 el tamaño agranda
      }
    }; */
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
