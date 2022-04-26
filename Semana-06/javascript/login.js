var inputEmail = document.getElementById('email-input');
var inputPass = document.getElementById('password-input');

//validate email

function validateEmail(e) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
    return true;
  } else {
    return false;
  }
}

var result = false;

inputEmail.addEventListener('blur', function(e) {
  var message = document.getElementById('result-email');
  result = validateEmail(e);
  if (result) {
    document.getElementById('result-email').innerHTML = 'Valid Email address';
    message.style.display = 'flex';
    message.style.color = '#ffffff';
    message.style.backgroundColor = '#AACE9B'
    document.getElementById('email-input').style.borderBottom = '1px solid #000000'
  } else {
    document.getElementById('result-email').innerHTML = '*Please enter a valid Email address.';
    message.style.display = 'flex';
    message.style.color = '#FF0000';
    message.style.backgroundColor = '#AFAFC2'
    document.getElementById('email-input').style.borderBottom = '3px solid #FF0000'
  }
})

inputEmail.addEventListener('focus', function() {
  var errorMsg = document.getElementById('result-email');
  errorMsg.style.display = 'none';
  var errorLineMsg = document.getElementById('email-input');
  errorLineMsg.style.borderBottom = '#fff';
})

//validate password

function validatePass(e) {
  var password = e.target.value;
  var numbers = '0123456789';
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var lettersAndNumbers = numbers + letters;
  var arrayPass = password.toLowerCase().split('');
  var includesNumbers = arrayPass.some((c) => numbers.includes(c));
  var includesLetters = arrayPass.some((c) => letters.includes(c));
  var isValidChar = arrayPass.every((c) => lettersAndNumbers.includes(c));    
  if (includesNumbers && includesLetters && isValidChar) {
      return true;
  } else {
      return false;
  }
}

var resultPass = false;


inputPass.addEventListener('blur', function(e) {
  var messagePass = document.getElementById('result-password');
  resultPass = validatePass(e);
  if (resultPass) {
    document.getElementById('result-password').innerHTML = 'Valid Password';
    messagePass.style.display = 'flex';
    messagePass.style.color = '#ffffff';
    messagePass.style.backgroundColor = '#AACE9B'
    document.getElementById('password-input').style.borderBottom = '1px solid #000000'
  } else {
    document.getElementById('result-password').innerHTML = '*Invalid password, insert letters and numbers.';
    messagePass.style.display = 'flex';
    messagePass.style.color = '#FF0000';
    messagePass.style.backgroundColor = '#AFAFC2'
    document.getElementById('password-input').style.borderBottom = '3px solid #FF0000'
  }
})

inputPass.addEventListener('focus', function() {
  var errorPass = document.getElementById('result-password');
  errorPass.style.display = 'none';
  var errorLinePass = document.getElementById('password-input');
  errorLinePass.style.borderBottom = '#fff';
})

//window

const btnLogIn = document.getElementById('btn');

btnLogIn.addEventListener("click", () => windowLogIn());

function windowLogIn()
{ console.log (result +'+'+ resultPass)
    if(result && resultPass){
        alert('E-mail: ' + inputEmail.value + '\nPassword: ' + inputPass.value)
    } else {
        alert('Something went wrong!')
    }
}


/* const btnLogIn = document.getElementById('btn');


btnLogIn.addEventListener("click", () => windowLogIn());

function windowLogIn()
{ console.log (result +'+'+ resultPass)
  if(result && resultPass){
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      text: 'E-mail: + inputMail.value',
      text: 'Password: + inputPass.value',
      showConfirmButton: true,  })}
      else {Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        })
    }
} */