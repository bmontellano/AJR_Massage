// INIT Jacvascript
//getElementsByTagName creates collection
var firstButton = document.querySelector('ion-button');
var siteTitleElement = document.getElementById('site-title');
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

  console.log('clicked at ' + currentTime + "\nepochTime: " + milliTime + "\ncounter:" + counter);
  var newDiv = document.createElement('div');
  newDiv.style.cssText =  'text-align:center; color:#de9918';
  var newContent = document.createTextNode("Appointment made!");
  newDiv.appendChild(newContent);
  //append after title
  siteTitleElement.appendChild(newDiv);
  //remove child after 3 secs
  setTimeout(() => {
    newDiv.parentNode.removeChild(newDiv);
  },3000);
  setTimeout(() => {
    counter = 0;
    firstButton.setAttribute("disabled","false");
  }, 6000);
});
