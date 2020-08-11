// INIT Jacvascript
// Handles modal and init logic
customElements.define('modal-appointment', class ModalContent extends HTMLElement {
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
customElements.define('modal-about-me', class ModalContent extends HTMLElement {
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
    <div> Hi, I'm Alex Raabe... Details coming soon</div>
    </ion-item>
    </ion-content>
     `;
  }
});
customElements.define('modal-massage-description', class ModalContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <ion-header translucent>
      <ion-toolbar>
        <ion-title style="color:#03b6fc">Types of Massage</ion-title>
        <ion-buttons slot="end">
          <ion-button onclick="dismissModal()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle style="color:black; font-weight:900">Prices based upon per hour appointment</ion-card-subtitle>
      </ion-card-header>
    </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Swedish</ion-card-title>
          <ion-card-subtitle>$70</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Relaxation massage with therapeutic benefits of touch therapy. (Recommended before trying Deep Tissue)
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Deep Tissue</ion-card-title>
          <ion-card-subtitle>$120</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Hard Pressure massage for deep seeded muscle issues and prolonged pain.
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Sport</ion-card-title>
          <ion-card-subtitle>$90</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Sport injury prevention and maintenance includes assisted stretching and certain muscle focus.
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Lomi-Lomi</ion-card-title>
          <ion-card-subtitle>$80</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Traditional Hawaiian massage using oil and dance technique.
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Pregnancy and Infant</ion-card-title>
          <ion-card-subtitle>$100</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Massage specialized for pregnancy pains and Mother’s relaxation. Massage training for you to perform on your child upon request.
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Chakra</ion-card-title>
          <ion-card-subtitle>$40/30 min</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          Energy balancing for your peace of mind.
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Chair</ion-card-title>
          <ion-card-subtitle>$25/20 min</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          For a quick, short massage without the need to remove clothing. Great massage for before or after a meeting.
        </ion-card-content>
      </ion-card>
    </ion-content>
     `;
  }
});

let currentModal = null;
const appointmentButton = document.getElementById('appointment-button'),
      aboutMeButton = document.getElementById('about-me-button'),
      artMassageButton = document.getElementById('art-massage-button');

appointmentButton.addEventListener('click', createModalAppointment);
aboutMeButton.addEventListener('click', createModalAboutMe);
artMassageButton.addEventListener('click', createModalMassageDescription);

async function createModalAppointment() {
  const modal = await modalController.create({
    component: 'modal-appointment'
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

async function createModalAboutMe() {
  const modal = await modalController.create({
    component: 'modal-about-me'
  });

  await modal.present();
  currentModal = modal;

}

async function createModalMassageDescription() {
  const modal = await modalController.create({
    component: 'modal-massage-description'
  });

  await modal.present();
  currentModal = modal;``

}

function dismissModal() {
  if (currentModal) {
    currentModal.dismiss().then(() => {
      currentModal = null;
    });
  }
}
