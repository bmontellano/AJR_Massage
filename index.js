// INIT Jacvascript
//getElementsByTagName creates collection
const firstButton = document.getElementById('primary-ion-button'),
      siteTitleElement = document.getElementById('site-title'),
      firstNameInput = document.getElementById('firstName-input'),
      lastNameInput = document.getElementById('lastName-input'),
      emailInput = document.getElementById('email-input'),
      phoneNumberInput = document.getElementById('phonenumber-input'),
      massageInput = document.getElementById('massage-input'),
      emailRegex = RegExp('@gmail.com$|@yahoo.com$|@msn.com$|@hotmail.com$|@aol.com$|@icloud.com$|@me.com$|@mac.com$|.edu$');


var counter = 0,
    inputText = "",
    currentTime = new Date(),
    milliTime = currentTime.getTime(),
    seconds = milliTime/1000;

firstAction = () => {
  //validate input
  if (firstNameInput.value === '' && lastNameInput.value === '' ){
    alert('Full Name is required');
    return;
  } else if (phoneNumberInput.value === ''  && emailInput.value === '' ){
    alert('Phone Number or Email must be provided');
    return;
  } else if (phoneNumberInput.value.length > 0 && phoneNumberInput.value.length !== 10) {
    alert('Please enter a valid phone number');
    return;
  } else if(emailInput.value.length > 0 && !emailRegex.test(emailInput.value)) {
    alert('Please enter valid email');
    return;
  } else if (!massageInput.value || massageInput.value  === '') {
    alert('Type of Massage must be entered');
    return;
  }
  if (counter === 0) {
    //current time
    currentTime = new Date();
    milliTime = currentTime.getTime();
    seconds = milliTime/1000;
  }
  counter ++;
  //disable button after click
  firstButton.setAttribute("disabled","true");
  inputText = `Name: ${firstNameInput.value} ${lastNameInput.value}\nEmail: ${emailInput.value}\nPhone-Number: ${phoneNumberInput.value}\nMassage Requested: ${massageInput.value}`

  console.log('clicked at ' + currentTime + "\nepochTime: " + milliTime + "\ncounter:" + counter + "\nName input " + firstNameInput.value + " " + lastNameInput.value);
  var newDiv = document.createElement('div');
  newDiv.style.cssText =  'text-align:center; color:#de9918; white-space: pre;';
  var newContent = document.createTextNode("Appointment made!!\n--- Email sent with the following information --- \n" + inputText);
  newDiv.appendChild(newContent);
  //append after title
  siteTitleElement.appendChild(newDiv);
  //remove child after 3 secs
  setTimeout(() => {
    newDiv.parentNode.removeChild(newDiv);
  },5000);
  setTimeout(() => {
    counter = 0;
    firstButton.setAttribute("disabled","false");
  }, 6000);
};

//clicking button adds element and removes it
firstButton.addEventListener('click', firstAction);
