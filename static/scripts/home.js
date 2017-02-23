document.getElementById('changeColor').addEventListener('click' , function(){
  var color = document.getElementById('textColor').value;
  var body = document.getElementById('body');
  body.style.color = color;
});

document.getElementById('hidePage').addEventListener('click', function(){
  var body = document.getElementById('body');
  body.style.display = 'none'
});

function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;
  var errorMessage = ''
  if (!name.length){
    errorMessage = errorMessage.concat('Name must not be empty\n');
  }
  if (!species.length){
    errorMessage = errorMessage.concat('Species must not be empty\n');
  }
  if (!age.length){
    errorMessage = errorMessage.concat('Age must not be empty\n');
  }
  if (isNaN(age)){
    errorMessage = errorMessage.concat('Age field must be a number');
  }
  if (errorMessage.length){
    alert(errorMessage);
    return false;
  }
  return true;
}
