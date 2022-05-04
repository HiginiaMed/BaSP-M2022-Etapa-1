var inputName = document.getElementById('name-input');
var inputLastName = document.getElementById('lastName-input');
var inputDni = document.getElementById('dni-input');
var inputDate = document.getElementById('date-input');
var inputPhone = document.getElementById('phone-input');
var inputAddress = document.getElementById('address-input');
var inputCity = document.getElementById('city-input');
var inputZip = document.getElementById('zip-input');
var inputEmail = document.getElementById('email-input');
var inputPass = document.getElementById('password-input');
var inputConfPassword = document.getElementById('confp-input');
var letters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var space = ' ';
var numbersAndLetters = letters + numbers;
var numbersLettersAndSpace = letters + numbers + space;

//validations

function everyLetter(arr) {
    return arr.every((c) => letters.includes(c));
}
function everyNumber(arr) {
    return arr.every((c) => numbers.includes(c));
}
function everyLettersNumbers(arr) {
    return arr.every((c) => numbersAndLetters.includes(c));
}
function someLetters(arr) {
    return arr.some((c) => letters.includes(c));
}
function someNumber(arr) {
    return arr.some((c) => numbers.includes(c));
}
function someNumberAndLetter(arr) {
    return arr.some((c) => numbersAndLetters.includes(c));
}
function everyNumbersLettersAndSpace(arr) {
  return arr.every((c) => numbersLettersAndSpace.includes(c));
}
  
// validate name. Solo letras y debe tener más de 3 letras.
  
function validateName(e) {
    var name = e.target.value;
    var arrName = name.toLowerCase().split('');
    if (everyLetter(arrName) && someLetters(arrName) && name.length > 3) {
        return true;
    }return false;
}

var resultName = false;

inputName.addEventListener('blur', function(e) {
    var message = document.getElementById('result-name');
    resultName = validateName(e);
    if (resultName) {
      document.getElementById('name-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('name-input').style.border = '3px solid #69BE45'
      console.log('ok');
      resultName = true;
    } else {
      document.getElementById('result-name').innerHTML = '*Just letters.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      document.getElementById('name-input').style.border = '3px solid #FF0000'
      document.getElementById('name-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputEmail.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-name');
    errorMsg.style.display = 'none';
})

// validate lastName. Solo letras y debe tener más de 3 letras.
  
function validatelastName(e) {
    var name = e.target.value;
    var arrName = name.toLowerCase().split('');
    if (everyLetter(arrName) && someLetters(arrName) && name.length > 3) {
        return true;
    }return false;
}

var resultlastName = false;

inputLastName.addEventListener('blur', function(e) {
    var message = document.getElementById('result-lastName');
    resultlastName = validatelastName(e);
    if (resultlastName) {
      document.getElementById('lastName-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('lastName-input').style.border = '3px solid #69BE45'
      console.log('ok');
      resultLastName = true;
    } else {
      document.getElementById('result-lastName').innerHTML = '*Just letters.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      document.getElementById('lastName-input').style.border = '3px solid #FF0000'
      document.getElementById('lastName-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputLastName.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-lastName');
    errorMsg.style.display = 'none';
})

// validate dni. Solo número y debe tener más de 7 números.
  
function validateDni(e) {
    var dni = e.target.value;
    var arrDni = dni.toLowerCase().split('');
    if (everyNumber(arrDni) && arrDni.length > 7) {
        return true;
    }return false;
}

var resultDni = false;

inputDni.addEventListener('blur', function(e) {
    var message = document.getElementById('result-dni');
    resultDni = validateDni(e);
    if (resultDni) {
      document.getElementById('dni-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('dni-input').style.border = '3px solid #69BE45'
      console.log('ok');
      resultDni = true;
    } else {
      document.getElementById('result-dni').innerHTML = '*Enter a valid DNI. Just numbers.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      document.getElementById('dni-input').style.border = '3px solid #FF0000'
      document.getElementById('dni-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputDni.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-dni');
    errorMsg.style.display = 'none';
})

//Fecha de Nacimiento: Con formato dd/mm/aaaa.

function validateDate() {
  if (new Date(inputDate.value).getTime() < new Date().getTime()) {
      return true;
  } else {
      return false;
  }
}

function toMonthDayYear(dateToConv){

  [year, month, day] = dateToConv.split('-');
  var dateMDY = [month, day, year].join('/')

  return dateMDY
}

var dateToConv = inputDate.value;

function toYearMonthDay(dateToConv){

  [month, day, year] = dateToConv?.split('/');
  var dateYMD = [year, month, day].join('-')

  return dateYMD
}

var resultDate = false;

inputDate.addEventListener('blur', function() {
    var message = document.getElementById('result-date');
    resultDate = validateDate();
    console.log(inputDate.value)
    if (resultDate) {
      document.getElementById('date-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('date-input').style.border = '3px solid #69BE45'
      console.log('ok');
      resultDate = true;
    } else {
      document.getElementById('result-date').innerHTML = '*Enter a valid date, just numbers.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      document.getElementById('date-input').style.border = '3px solid #FF0000'
      document.getElementById('date-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputDate.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-date');
    errorMsg.style.display = 'none';
})

// Teléfono: Solo número y debe tener 10 números.

function validatePhone(e) {
    var number = e.target.value;
    var arrNum = number.toLowerCase().split('');
    if (everyNumber(arrNum) && arrNum.length == 10) {
        return true;
    }return false;
}

var resultPhone = false;

inputPhone.addEventListener('blur', function(e) {
    var message = document.getElementById('result-phone');
    resultPhone = validatePhone(e);
    if (resultPhone) {
      document.getElementById('phone-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('phone-input').style.border = '3px solid #69BE45'
      console.log('ok');
      resultPhone = true;
    } else {
      document.getElementById('result-phone').innerHTML = '*Just ten numbers.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      document.getElementById('phone-input').style.border = '3px solid #FF0000'
      document.getElementById('phone-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputPhone.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-phone');
    errorMsg.style.display = 'none';
})
  
/* Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.*/


function validateAddress(e) {
    var address = e.target.value;
    var arrAddress = address.toLowerCase().split('');
    console.log (arrAddress);
    if (everyNumbersLettersAndSpace(arrAddress)) {
        if (arrAddress.length > 5) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

var resultAddress = false;

inputAddress.addEventListener('blur', function(e) {
    var message = document.getElementById('result-address');
    resultAddress = validateAddress(e);
    if (resultAddress) {
      document.getElementById('address-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('address-input').style.border = '3px solid #69BE45'
      console.log('ok');
      resultAddress = true;
    } else {
      document.getElementById('result-address').innerHTML = '*Enter a valid Address, letters and numbers.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      document.getElementById('address-input').style.border = '3px solid #FF0000'
      document.getElementById('address-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputAddress.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-address');
    errorMsg.style.display = 'none';
})

// Localidad: Texto alfanumérico y debe tener más de 3 letras.

function validateCity(e) {
    var city = e.target.value;
    var arrCity = city.toLowerCase().split('');
    if (
      everyLettersNumbers(arrCity) &&
      someNumberAndLetter(arrCity) &&
      arrCity.length > 3
    ) {
        return true;
    }return false;
}

var resultCity = false;

inputCity.addEventListener('blur', function(e) {
    var message = document.getElementById('result-city');
    resultCity = validateCity(e);
    if (resultCity) {
      document.getElementById('city-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('city-input').style.border = '3px solid #69BE45'
      console.log('ok');
      resultCity = true;
    } else {
      document.getElementById('result-city').innerHTML = '*Enter a valid city.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      document.getElementById('city-input').style.border = '3px solid #FF0000'
      document.getElementById('city-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputCity.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-city');
    errorMsg.style.display = 'none';
})
  
// Código Postal: Solo número y debe tener entre 4 y 5 números.
  
function validateZip(e) {
    var zip = e.target.value;
    var arrZip = zip.toLowerCase().split('');
    if (
      everyNumber(arrZip) &&
      arrZip.length >= 4 &&
      arrZip.length <= 5
    ) {
        return true;
    }return false;
}

var resultZip = false;

inputZip.addEventListener('blur', function(e) {
    var message = document.getElementById('result-zip');
    resultZip = validateZip(e);
    if (resultZip) {
      document.getElementById('zip-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('zip-input').style.border = '3px solid #69BE45'
      console.log('ok');
      resultZip = true;
    } else {
      document.getElementById('result-zip').innerHTML = '*Just 4 or 5 numbers.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      document.getElementById('zip-input').style.border = '3px solid #FF0000'
      document.getElementById('zip-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputZip.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-zip');
    errorMsg.style.display = 'none';
})

// Email: Debe tener un formato de email válido.

function validateEmail(e) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      return true;
    } else {
      return false;
    }
}
  
var resultEmail = false;

inputEmail.addEventListener('blur', function(e) {
    var message = document.getElementById('result-email');
    resultEmail = validateEmail(e);
    if (resultEmail) {
      document.getElementById('email-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('email-input').style.border = '3px solid #69BE45'
      console.log('ok');
      resultEmail = true;
    } else {
      document.getElementById('result-email').innerHTML = '*Enter a valid Email address.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      document.getElementById('email-input').style.border = '3px solid #FF0000'
      document.getElementById('email-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputEmail.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-email');
    errorMsg.style.display = 'none';
})
  
// Contraseña: Al menos 8 caracteres, formados por letras y números.

function validatePass(e) {
    var password = e.target.value;
    var arrPass = password.toLowerCase().split('');
    if (
    everyLettersNumbers(arrPass) &&
    arrPass.length >= 8
  ) {
        return true;
  } else
        return false;
}
  
var resultPass = false;

inputPass.addEventListener('blur', function(e) {
    var messagePass = document.getElementById('result-password');
    resultPass = validatePass(e);
    if (resultPass) {
      document.getElementById('password-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('password-input').style.border = '3px solid #69BE45'
      console.log('itsOk');
      resultPass = true;
    } else {
      document.getElementById('result-password').innerHTML = 
      '*Invalid password. Insert more than 8 letters and numbers.';
      messagePass.style.display = 'flex';
      messagePass.style.marginLeft = '30px';
      messagePass.style.color = '#FF0000';
      document.getElementById('password-input').style.border = '3px solid #FF0000'
      document.getElementById('password-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputPass.addEventListener('focus', function() {
    var errorPass = document.getElementById('result-password');
    errorPass.style.display = 'none';
})

// Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.
function corroboratePass() {
    console.log("valor1", inputPass.value);
    console.log("valor2", inputConfPassword.value);
    if (inputPass.value == inputConfPassword.value){
      return true;
    }return false;
}

var resultConfPassword = false;

inputConfPassword.addEventListener('blur', function() {
    var messagePass = document.getElementById('result-conf-password');
    resultConfPassword = corroboratePass();
    if (resultConfPassword) {
      document.getElementById('confp-input').style.backgroundColor = '#AACE9B80'
      document.getElementById('confp-input').style.border = '3px solid #69BE45'
      console.log('itsOk');
      resultConfPassword = true;
    } else {
      document.getElementById('result-conf-password').innerHTML = '*Invalid password, doesn`t match.';
      messagePass.style.display = 'flex';
      messagePass.style.marginLeft = '30px';
      messagePass.style.color = '#FF0000';
      document.getElementById('confp-input').style.border = '3px solid #FF0000'
      document.getElementById('confp-input').style.background = '#AFAFC2'
      console.log('not ok')
    }
})
  
inputConfPassword.addEventListener('focus', function() {
    var errorPass = document.getElementById('result-conf-password');
    errorPass.style.display = 'none';
})
  
//window

var nameWrong = ("");
var surnameWrong = ("");
var IDWrong = ("");
var birthdayWrong = ("");
var phoneWrong = ("");
var adressWrong = ("");
var cityWrong = ("");
var ZCWrong = ("");
var emailWrong = ("");
var passwordWrong = ("");
var repeatPasswordWrong = ("");
  
const btnSignUp = document.getElementById('btn');
  
btnSignUp.addEventListener("click", () => windowSignUp());

function windowSignUp(){
  if(resultName && resultlastName && resultDni && resultDate && resultPhone && resultAddress && resultCity && 
    resultZip && resultEmail && resultPass && resultConfPassword){
      fetch("https://basp-m2022-api-rest-server.herokuapp.com/signup".concat("?name=", inputName.value, 
      "&lastName=", inputLastName.value, "&dni=", inputDni.value, "&dob=", toMonthDayYear(inputDate.value),
      "&phone=", inputPhone.value, "&address=", inputAddress.value, "&city=", inputCity.value, "&zip=", inputZip.value,
      "&email=", inputEmail.value, "&password=", inputPass.value, "&confpassword=", inputConfPassword.value))
        .then(function(response){
          return response.json();
        })
        .then(function(jsonResponse) {
          if(jsonResponse.success) {
            alert('SIGN UP SUCCESS!' + '\n' + 'Name: ' + inputName.value + '\n' + 'Last Name: ' + inputLastName.value + 
            '\n' + 'DNI: ' + inputDni.value + '\n' + 'Date of Birth: ' + inputDate.value + 
            '\n' + 'Phone: ' + inputPhone.value + 
            '\n' + 'Address: ' + inputAddress.value + '\n' + 'City: ' + inputCity.value + 
            '\n' + 'Zip Code: ' + inputZip.value + '\n' + 'Email: ' + inputEmail.value + 
            '\n' + 'Password: ' + inputPass.value + '\n' + 'Confirm Password: ' + inputConfPassword.value)
            localStorage.setItem("name", jsonResponse.data.name);
            localStorage.setItem("lastName", jsonResponse.data.lastName);
            localStorage.setItem("dni", jsonResponse.data.dni);
            localStorage.setItem("dob", jsonResponse.data.dob);
            localStorage.setItem("phone", jsonResponse.data.phone);
            localStorage.setItem("address", jsonResponse.data.address);
            localStorage.setItem("city", jsonResponse.data.city);
            localStorage.setItem("zip", jsonResponse.data.zip);
            localStorage.setItem("email", jsonResponse.data.email);
            localStorage.setItem("password", jsonResponse.data.password);
            return true;
          } else {
            return alert('Sign up failed')
          }
        })
        .catch(function (error){
          console.log("Error: ", error);
        })
    } else if (inputName.value == '' || inputLastName.value == '' || inputDni.value == '' || inputDate.value == '' || inputPhone.value == ''
      || inputAddress.value == '' || inputCity.value == '' || inputZip.value == '' || inputEmail.value == '' || inputPass.value == ''
      || inputConfPassword.value == '') {
          alert('All fields are required');
    } else if (resultName == false || resultlastName == false || resultDni == false || resultDate == false
    || resultPhone == false || resultAddress == false || resultCity == false || resultZip == false
    || resultEmail == false || resultPass == false || resultConfPassword == false) {
        if (resultName == false) {
            nameWrong = ("The Name is wrong." + '\n');
        }
        if (resultlastName == false) {
            surnameWrong = ("The Surname is wrong." + '\n');
        }
        if (resultDni == false) {
            IDWrong = ("The ID is wrong." + '\n');
        }
        if (resultDate == false) {
            birthdayWrong = ("The Birthday is wrong." + '\n');
        }
        if (resultPhone == false) {
            phoneWrong = ("The Phone is wrong." + '\n');
        }
        if (resultAddress == false) {
            adressWrong = ("The Adress is wrong." + '\n');
        }
        if (resultCity == false) {
            cityWrong = ("The City is wrong." + '\n');
        }
        if (resultZip == false) {
            ZCWrong = ("The Zip Code is wrong." + '\n');
        }
        if (resultEmail == false) {
            emailWrong = ("The Email is wrong." + '\n');
        }
        if (resultPass == false) {
            passwordWrong = ("The Password is wrong." + '\n');
        }
        if (resultConfPassword == false) {
            repeatPasswordWrong = ("Repeat Password is wrong." + '\n');
        } 
        alert(nameWrong + surnameWrong + IDWrong + birthdayWrong + phoneWrong + 
        adressWrong + cityWrong + ZCWrong + emailWrong + passwordWrong + repeatPasswordWrong)
    }
}

function localSt() {
  inputName.value = localStorage.getItem("name");
  inputLastName.value = localStorage.getItem("lastName");
  inputDni.value = (localStorage.getItem("dni"));
  inputDate.value = toYearMonthDay(localStorage.getItem("dob"));
  inputPhone.value = localStorage.getItem("phone");
  inputAddress.value = localStorage.getItem("address");
  inputCity.value = localStorage.getItem("city");
  inputZip.value = localStorage.getItem("zip");
  inputEmail.value = localStorage.getItem("email");
  inputPass.value = localStorage.getItem("password");
  inputConfPassword.value = localStorage.getItem("password");
}

document.addEventListener("DOMContentLoaded", localSt);

