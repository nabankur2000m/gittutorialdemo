document.getElementById('submit').addEventListener('click', function() {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
});
