var inputName = document.getElementById('name-input');
var inputLastName = document.getElementById('surname-input');
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
function someNumbersLettersAndSpace(arr) {
  return arr.some((c) => numbersLettersAndSpace.includes(c));
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
      document.getElementById('result-name').innerHTML = 'Valid name';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#ffffff';
      message.style.backgroundColor = '#AACE9B'
      document.getElementById('name-input').style.border = '1px solid #000000'
      console.log('ok');
    } else {
      document.getElementById('result-name').innerHTML = '*Please enter a valid name.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      message.style.backgroundColor = '#AFAFC2'
      document.getElementById('name-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputEmail.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-name');
    errorMsg.style.display = 'none';
    var errorLineMsg = document.getElementById('name-input');
    errorLineMsg.style.border = '#fff';
})

// validate surname. Solo letras y debe tener más de 3 letras.
  
function validateSurname(e) {
    var name = e.target.value;
    var arrName = name.toLowerCase().split('');
    if (everyLetter(arrName) && someLetters(arrName) && name.length > 3) {
        return true;
    }return false;
}

var resultSurname = false;

inputLastName.addEventListener('blur', function(e) {
    var message = document.getElementById('result-surname');
    resultSurname = validateSurname(e);
    if (resultSurname) {
      document.getElementById('result-surname').innerHTML = 'Valid Surname';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#ffffff';
      message.style.backgroundColor = '#AACE9B'
      document.getElementById('surname-input').style.border = '1px solid #000000'
      console.log('ok');
    } else {
      document.getElementById('result-surname').innerHTML = '*Please enter a valid surname.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      message.style.backgroundColor = '#AFAFC2'
      document.getElementById('surname-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputLastName.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-surname');
    errorMsg.style.display = 'none';
    var errorLineMsg = document.getElementById('surname-input');
    errorLineMsg.style.border = '#fff';
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
      document.getElementById('result-dni').innerHTML = 'Valid DNI';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#ffffff';
      message.style.backgroundColor = '#AACE9B'
      document.getElementById('dni-input').style.border = '1px solid #000000'
      console.log('ok');
    } else {
      document.getElementById('result-dni').innerHTML = '*Please enter a valid DNI. Just numbers.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      message.style.backgroundColor = '#AFAFC2'
      document.getElementById('dni-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputDni.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-dni');
    errorMsg.style.display = 'none';
    var errorLineMsg = document.getElementById('dni-input');
    errorLineMsg.style.border = '#fff';
})

//Fecha de Nacimiento: Con formato dd/mm/aaaa.

function validateDate(dateToCheck) {
  var [year, month, day] = dateToCheck.split('-');
  var isoFormattedStr = `${month}/${day}/${year}`;
  var date = new Date(isoFormattedStr);
  var timestamp = date.getTime();
  if (typeof timestamp !== "number" || Number.isNaN(timestamp))
  {
      return false;
  }
  else if (new Date(inputDate.value).getTime() > new Date().getTime())
  {
      return false;
  }
  return  isoFormattedStr;
}

var resultDate = false;

inputDate.addEventListener('blur', function() {
    var message = document.getElementById('result-date');
    resultDate = validateDate();
    console.log(inputDate.value)
    if (resultDate) {
      document.getElementById('result-date').innerHTML = 'Valid date';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#ffffff';
      message.style.backgroundColor = '#AACE9B'
      document.getElementById('date-input').style.border = '1px solid #000000'
      console.log('ok');
    } else {
      document.getElementById('result-date').innerHTML = '*Please enter a valid date. Just numbers.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      message.style.backgroundColor = '#AFAFC2'
      document.getElementById('date-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputDate.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-date');
    errorMsg.style.display = 'none';
    var errorLineMsg = document.getElementById('date-input');
    errorLineMsg.style.border = '#fff';
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
      document.getElementById('result-phone').innerHTML = 'Valid phone';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#ffffff';
      message.style.backgroundColor = '#AACE9B'
      document.getElementById('phone-input').style.border = '1px solid #000000'
      console.log('ok');
    } else {
      document.getElementById('result-phone').innerHTML = '*Please enter a valid phone. Just numbers.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      message.style.backgroundColor = '#AFAFC2'
      document.getElementById('phone-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputPhone.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-phone');
    errorMsg.style.display = 'none';
    var errorLineMsg = document.getElementById('phone-input');
    errorLineMsg.style.border = '#fff';
})
  
/* Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio. como poner el espacio?
En cuando a lo del address, podemos chequear en ese value del input usando substring, dividiendolo en dos partes, 
primero desde que arranca hasta el index of del espacio en blanco, y lo mismo para la otra parte, 
desde el index hasta el value.length
15:51
Y ahí chequeamos la primera parte que sea string y la segunda numeros*/

function validateAddress(e) {
    var address = e.target.value;
    var arrAddress = address.toLowerCase().split('');
    console.log (arrAddress);
    if (someNumbersLettersAndSpace(arrAddress)) {
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
      document.getElementById('result-address').innerHTML = 'Valid Address';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#ffffff';
      message.style.backgroundColor = '#AACE9B'
      document.getElementById('address-input').style.border = '1px solid #000000'
      console.log('ok');
    } else {
      document.getElementById('result-address').innerHTML = '*Please enter a valid Address.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      message.style.backgroundColor = '#AFAFC2'
      document.getElementById('address-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputAddress.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-address');
    errorMsg.style.display = 'none';
    var errorLineMsg = document.getElementById('address-input');
    errorLineMsg.style.border = '#fff';
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
      document.getElementById('result-city').innerHTML = 'Valid city';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#ffffff';
      message.style.backgroundColor = '#AACE9B'
      document.getElementById('city-input').style.border = '1px solid #000000'
      console.log('ok');
    } else {
      document.getElementById('result-city').innerHTML = '*Please enter a valid city.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      message.style.backgroundColor = '#AFAFC2'
      document.getElementById('city-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputCity.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-city');
    errorMsg.style.display = 'none';
    var errorLineMsg = document.getElementById('city-input');
    errorLineMsg.style.border = '#fff';
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
      document.getElementById('result-zip').innerHTML = 'Valid zip code';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#ffffff';
      message.style.backgroundColor = '#AACE9B'
      document.getElementById('zip-input').style.border = '1px solid #000000'
      console.log('ok');
    } else {
      document.getElementById('result-zip').innerHTML = '*Please enter a valid zip code.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      message.style.backgroundColor = '#AFAFC2'
      document.getElementById('zip-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputZip.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-zip');
    errorMsg.style.display = 'none';
    var errorLineMsg = document.getElementById('zip-input');
    errorLineMsg.style.border = '#fff';
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
      document.getElementById('result-email').innerHTML = 'Valid Email address';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#ffffff';
      message.style.backgroundColor = '#AACE9B'
      document.getElementById('email-input').style.border = '1px solid #000000'
      console.log('ok');
    } else {
      document.getElementById('result-email').innerHTML = '*Please enter a valid Email address.';
      message.style.display = 'flex';
      message.style.marginLeft = '30px';
      message.style.color = '#FF0000';
      message.style.backgroundColor = '#AFAFC2'
      document.getElementById('email-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputEmail.addEventListener('focus', function() {
    var errorMsg = document.getElementById('result-email');
    errorMsg.style.display = 'none';
    var errorLineMsg = document.getElementById('email-input');
    errorLineMsg.style.border = '#fff';
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
      document.getElementById('result-password').innerHTML = 'Valid Password';
      messagePass.style.display = 'flex';
      messagePass.style.marginLeft = '30px';
      messagePass.style.color = '#ffffff';
      messagePass.style.backgroundColor = '#AACE9B'
      document.getElementById('password-input').style.border = '1px solid #000000'
      console.log('itsOk');
    } else {
      document.getElementById('result-password').innerHTML = '*Invalid password, insert letters and numbers.';
      messagePass.style.display = 'flex';
      messagePass.style.marginLeft = '30px';
      messagePass.style.color = '#FF0000';
      messagePass.style.backgroundColor = '#AFAFC2'
      document.getElementById('password-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputPass.addEventListener('focus', function() {
    var errorPass = document.getElementById('result-password');
    errorPass.style.display = 'none';
    var errorLinePass = document.getElementById('password-input');
    errorLinePass.style.border = '#fff';
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
      document.getElementById('result-conf-password').innerHTML = 'Valid Password';
      messagePass.style.display = 'flex';
      messagePass.style.marginLeft = '30px';
      messagePass.style.color = '#ffffff';
      messagePass.style.backgroundColor = '#AACE9B'
      document.getElementById('confp-input').style.border = '1px solid #000000'
      console.log('itsOk');
    } else {
      document.getElementById('result-conf-password').innerHTML = '*Invalid password, doesn`t match.';
      messagePass.style.display = 'flex';
      messagePass.style.marginLeft = '30px';
      messagePass.style.color = '#FF0000';
      messagePass.style.backgroundColor = '#AFAFC2'
      document.getElementById('confp-input').style.border = '3px solid #FF0000'
      console.log('not ok')
    }
})
  
inputConfPassword.addEventListener('focus', function() {
    var errorPass = document.getElementById('result-conf-password');
    errorPass.style.display = 'none';
    var errorLinePass = document.getElementById('confp-input');
    errorLinePass.style.border = '#fff';
})
  
//window
  
const btnSignUp = document.getElementById('btn');
  
btnSignUp.addEventListener("click", () => windowSignUp());

function windowSignUp(){
  if(resultName && resultSurname && resultDni && resultDate && resultPhone && resultAddress && resultCity && 
    resultZip && resultEmail && resultPass && resultConfPassword){
      fetch("https://basp-m2022-api-rest-server.herokuapp.com/signup".concat("?name=", inputName.value, 
      "&lastName=", inputLastName.value, "&dni=", inputDni.value, "&dob=", inputDate.value,
      "&phone=", inputPhone.value, "&address=", inputAddress.value, "&city=", inputCity.value, "&zip=", inputZip.value,
      "&email=", inputEmail.value, "&password=", inputPass.value))
        .then(function(response){
          return response.json();
        })
        .then(function(jsonResponse) {
          if(jsonResponse.ok) {
            return alert('Sign up succes' + '\n' + inputName.value + '\n' + inputLastName.value + '\n' + inputDni.value + 
            '\n' + inputDate.value + '\n' + inputPhone.value + '\n' + inputAddress.value + '\n' + inputCity.value + 
            '\n' + inputZip.value + '\n' + inputEmail.value + '\n' + inputPass.value + '\n' + inputConfPass.value)
          } 
          else if (jsonResponse.ok) {
            localStorage.setItem("name", jsonResponse.data.name);
            localStorage.setItem("lastname", jsonResponse.data.lastName);
            localStorage.setItem("dni", jsonResponse.data.dni);
            localStorage.setItem("dob", jsonResponse.data.dob);
            localStorage.setItem("phone", jsonResponse.data.phone);
            localStorage.setItem("address", jsonResponse.data.address);
            localStorage.setItem("city", jsonResponse.data.city);
            localStorage.setItem("zip", jsonResponse.data.zip);
            localStorage.setItem("email", jsonResponse.data.email);
            localStorage.setItem("password", jsonResponse.data.password);
          } else {
            return alert('Sign up failed')
          }
        })
        .catch(function (error){
          console.log("Error: ", error);
        })
  } else {
      alert('Something went wrong!')
    }
}

function localSt() {
  inputName.value = localStorage.getItem("name");
  inputLastName.value = localStorage.getItem("lastName");
  inputName.value = localStorage.getItem("name");
  inputLastName.value = localStorage.getItem("lastName");
  inputName.value = localStorage.getItem("name");
  inputLastName.value = localStorage.getItem("lastName");
  inputName.value = localStorage.getItem("name");
  inputLastName.value = localStorage.getItem("lastName");
  inputName.value = localStorage.getItem("name");
  inputLastName.value = localStorage.getItem("lastName");
}

document.addEventListener("DOMContentLoaded", localSt);
