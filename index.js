// INIT Jacvascript
//getElementsByTagName creates collection
const firstButton = document.querySelector('ion-button'),
      siteTitleElement = document.getElementById('site-title'),
      nameInput = document.getElementById('name-input'),
      emailInput = document.getElementById('email-input'),
      phoneNumberInput = document.getElementById('phonenumber-input'),
      massageInput = document.getElementById('massage-input');

var counter = 0;

//clicking button adds element and removes it
firstButton.addEventListener('click', () => {
  if (counter === 0) {
    //current time
    var currentTime = new Date();
    var milliTime = currentTime.getTime();
    var seconds = milliTime/1000;
  }
  counter ++;
  //disable button after click
  firstButton.setAttribute("disabled","true");

  var inputText = `Name: ${nameInput.value} \nEmail: ${emailInput.value} \nPhone-Number: ${phoneNumberInput.value} \nMassage Requested: ${massageInput.value}`;

  console.log('clicked at ' + currentTime + "\nepochTime: " + milliTime + "\ncounter:" + counter + "\nName input " + nameInput.value);
  var newDiv = document.createElement('div');
  newDiv.style.cssText =  'text-align:center; color:#de9918; white-space: pre;';
  var newContent = document.createTextNode("Ooooo, I predict a Happy Ending in your future \nAppointment made!!\n--- Email sent with the following information --- \n" + inputText);
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
});
