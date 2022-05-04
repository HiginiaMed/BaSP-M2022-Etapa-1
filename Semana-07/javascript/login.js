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
    document.getElementById('email-input').style.borderBottom = '3px solid #69BE45'
    return result = true;
  } else {
    document.getElementById('result-email').innerHTML = '*Please enter a valid Email address.';
    message.style.display = 'flex';
    message.style.color = '#FF0000';
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
    document.getElementById('password-input').style.borderBottom = '3px solid #69BE45'
    return resultPass = true;
  } else {
    document.getElementById('result-password').innerHTML = '*Invalid. Insert letters and numbers.';
    messagePass.style.display = 'flex';
    messagePass.style.color = '#FF0000';
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
var emailWrong = ("");
var passwordWrong = ("");

const btnLogIn = document.getElementById('btn');

btnLogIn.addEventListener("click", () => windowLogIn());

function windowLogIn()
{ console.log (result +'+'+ resultPass)
    if(result && resultPass){
         fetch("https://basp-m2022-api-rest-server.herokuapp.com/login".concat("?email=", inputEmail.value, "&password=", inputPass.value))
          .then(function (response) {
            if(response.ok) {
              return alert('LOG IN SUCCESS!' + '\n' + inputEmail.value + '\n' + inputPass.value)
            } else {
              return alert('Log in failed')
            }
          })
          .catch(function (error){
            console.log("Error: ", error);
          })
      } else if (inputEmail.value == '' || inputPass.value == '') {
      alert('All fields are required');
      } else if (result == false || resultPass == false) {
          if (result == false) {
              emailWrong = ("The Email is wrong." + '\n');
          }
          if (resultPass == false) {
              passwordWrong = ("The Password is wrong." + '\n');
          }
          alert(emailWrong + passwordWrong)
      }
}