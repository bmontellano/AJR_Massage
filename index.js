// INIT Jacvascript

// Handles modal and init logic
customElements.define('modal-content1', class ModalContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Appointment Details</ion-title>
        <ion-buttons slot="end">
          <ion-button onclick="dismissModal()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
    <ion-item>
      <ion-label position="floating">First Name</ion-label>
      <ion-input id="firstName-input"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Last Name</ion-label>
      <ion-input id='lastName-input'></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Email</ion-label>
      <ion-input id='email-input'></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Phone Number</ion-label>
      <ion-input id='phonenumber-input'></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>Type of Massage</ion-label>
      <ion-select id='massage-input' ok-text="OK" cancel-text="Cancel" placeholder="Please Select">
        <ion-select-option value="Swedish">Swedish</ion-select-option>
        <ion-select-option value="Deep-tissue">Deep Tissue</ion-select-option>
        <ion-select-option value="Sport">Sport</ion-select-option>
        <ion-select-option value="Lomi-Lomi">Lomi-Lomi</ion-select-option>
        <ion-select-option value="Pregnancy-Infant">Pregnancy & Infant</ion-select-option>
        <ion-select-option value="Chakra">Chakra</ion-select-option>
        <ion-select-option value="Chair">Chair</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-label>Duration</ion-label>
      <ion-select id="duration-input" placeholder="Please Select">
        <ion-select-option value="1Hr">1 Hour 30 min</ion-select-option>
        <ion-select-option value="1Hr">1 Hour</ion-select-option>
        <ion-select-option value="30min">30 min</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-label>Date</ion-label>
      <ion-datetime id="date-input" placeholder="Select Date"></ion-datetime>
    </ion-item>
    <ion-item>
      <ion-label>Time</ion-label>
      <ion-datetime id="time-input" display-format="h:mm A" picker-format="h:mm A" placeholder="Select Time"></ion-datetime>
    </ion-item>
    <ion-grid class="ion-text-center">
      <ion-row>
        <ion-col>
          <ion-button id="primary-ion-button">Make an appointment</ion-button>
        </ion-col>
        <ion-col>
          <ion-button id="reset-input-button">Reset</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
    </ion-content>
     `;
  }
});
customElements.define('modal-content2', class ModalContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>About Me</ion-title>
        <ion-buttons slot="end">
          <ion-button onclick="dismissModal()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
    <ion-item class='ion-text-center'>
    <div> Hi, I'm Alex Raabe...nothin' else to add really</div>
    </ion-item>
    </ion-content>
     `;
  }
});
customElements.define('modal-content3', class ModalContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>The Art of Massage: Types</ion-title>
        <ion-buttons slot="end">
          <ion-button onclick="dismissModal()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-item class='ion-text-center'>
        <div> Hi, I'm Alex Raabe. These are the different massages I offer</div>
      </ion-item>
      <ion-item class='ion-text-center'>
        <div> Hard-bod: I want your bod</div>
      </ion-item>
      <ion-item class='ion-text-center'>
        <div> Medium-bod: I still want your bod</div>
      </ion-item>
      <ion-item class='ion-text-center'>
        <div> Soft-bod: Gimme that bod</div>
      </ion-item>
    </ion-content>
     `;
  }
});


let currentModal = null;
const appointmentButton = document.getElementById('appointment-button'),
      aboutMeButton = document.getElementById('about-me-button'),
      artMassageButton = document.getElementById('art-massage-button');

appointmentButton.addEventListener('click', createModal1);
aboutMeButton.addEventListener('click', createModal2);
artMassageButton.addEventListener('click', createModal3);

async function createModal1() {
  const modal = await modalController.create({
    component: 'modal-content1'
  });

  await modal.present();
  currentModal = modal;

  //introduce js after the modal is created
//getElementsByTagName creates collection
  const firstButton = document.getElementById('primary-ion-button'),
    resetButton = document.getElementById("reset-input-button"),
    siteTitleElement = document.getElementById('site-title'),
    firstNameInput = document.getElementById('firstName-input'),
    lastNameInput = document.getElementById('lastName-input'),
    emailInput = document.getElementById('email-input'),
    phoneNumberInput = document.getElementById('phonenumber-input'),
    massageInput = document.getElementById('massage-input'),
    durationInput = document.getElementById('duration-input'),
    dateInput = document.getElementById('date-input'),
    timeInput = document.getElementById('time-input'),
    emailRegex = RegExp('@gmail.com$|@yahoo.com$|@msn.com$|@hotmail.com$|@aol.com$|@icloud.com$|@me.com$|@mac.com$|.edu$');


  var counter = 0,
    inputText = "",
    currentTime = new Date(),
    milliTime = currentTime.getTime(),
    seconds = milliTime / 1000;

  const firstAction = () => {
    //validate input
    if (firstNameInput.value === '' && lastNameInput.value === '') {
      alert('Full Name is required');
      return;
    } else if (phoneNumberInput.value === '' && emailInput.value === '') {
      alert('Phone Number or Email must be provided');
      return;
    } else if (phoneNumberInput.value.length > 0 && phoneNumberInput.value.length !== 10) {
      alert('Please enter a valid phone number');
      return;
    } else if (emailInput.value.length > 0 && !emailRegex.test(emailInput.value)) {
      alert('Please enter valid email');
      return;
    } else if (!massageInput.value || massageInput.value === '') {
      alert('Type of Massage must be entered');
      return;
    }
    if (counter === 0) {
      //current time
      currentTime = new Date();
      milliTime = currentTime.getTime();
      seconds = milliTime / 1000;
    }
    counter++;
    //disable button after click
    firstButton.setAttribute("disabled", "true");
    inputText = `Name: ${firstNameInput.value} ${lastNameInput.value}\nEmail: ${emailInput.value}\nPhone-Number: ${phoneNumberInput.value}\nMassage Requested: ${massageInput.value}`

    console.log('clicked at ' + currentTime + "\nepochTime: " + milliTime + "\ncounter:" + counter + "\nName input " + firstNameInput.value + " " + lastNameInput.value);
    var newDiv = document.createElement('div');
    newDiv.style.cssText = 'text-align:center; color:#de9918; white-space: pre;';
    var newContent = document.createTextNode("Appointment made!!\n--- Email sent with the following information --- \n" + inputText);
    newDiv.appendChild(newContent);
    //append after title
    siteTitleElement.appendChild(newDiv);
    //remove child after 3 secs
    setTimeout(() => {
      newDiv.parentNode.removeChild(newDiv);
    }, 5000);
    setTimeout(() => {
      counter = 0;
      firstButton.setAttribute("disabled", "false");
    }, 6000);
  };

  const resetInput = () => {
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    phoneNumberInput.value = '';
    massageInput.value = '';
    durationInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
  }

  //clicking button adds element and removes it
  firstButton.addEventListener('click', firstAction);
  resetButton.addEventListener('click', resetInput);
}

async function createModal2() {
  const modal = await modalController.create({
    component: 'modal-content2'
  });

  await modal.present();
  currentModal = modal;

}

async function createModal3() {
  const modal = await modalController.create({
    component: 'modal-content3'
  });

  await modal.present();
  currentModal = modal;

}

function dismissModal() {
  if (currentModal) {
    currentModal.dismiss().then(() => {
      currentModal = null;
    });
  }
}
