
const tabBtn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');
const activities = document.getElementById('Activities');
const venues = document.getElementById('Venues');
const scheduling = document.getElementById('Scheduling');
const contact = document.getElementById('Contact');
const btnContainer = document.querySelector('.btn-container');
const resetBtn = document.querySelector('.reset-btn');
const alertTxt = document.querySelector('.alertTxt');
const photo1 = document.querySelector('.picture1');
const photo3 = document.querySelector('.picture3');
const photo4 = document.querySelector('.picture4');
const soccerBtn = document.querySelector('.btnSoccer');
const racketballBtn = document.querySelector('.racketball-btn');
const photo2 = document.querySelector('.picture2');
const parksPhoto = document.querySelector('.picture');
const parksBtn = document.querySelector('.parks-btn');
const gymBtn = document.querySelector('.Gym-btn');
const arenaBtn = document.querySelector('.Arena-btn');
const courtsBtn = document.querySelector('courts-btn');
const parkPhoto = document.querySelector('.parksPhoto');
const submitBtn = document.querySelector('.submit-btn');
const submitBtn2 = document.querySelector('.sbmit-btn');
const form1 = document.getElementById('#signup');
const usernameField = document.getElementById('#username');
const error = document.querySelector('.errorUsername');



//This function hides certain article buttons info
function hideArticle(event){

    //Get the event target
    const id = event.target.dataset.id;

    if(id)

    //Remove active from all buttons
    tabBtn.forEach(function(btn){
     btn.classList.remove('active');
     event.target.classList.add("active");
    })

    //Hide other articles
    articles.forEach(function(article){
    article.classList.remove('active');
    })
    
    //Display the active field on the selected element
    const element = document.getElementById(id);
    element.classList.add('active'); 
}


//This function checks the username of the signup form 
const checkUsername = () => {

}


//This function checks the password field on the signup form
const checkPassword = () => {

}


//This function checks the city field on the contact form
const checkCity = () => {

}

//This function checks the names field for the contact form
 const checkFirstName = () => {
 
    //Select the input field
    const firstNameField = document.querySelector('input[name = "name').value;
    const lastNameField = document.querySelector('input[name = "last-namee').value;
    const errorName = document.querySelector('.ErrorName');

    //If statement
    if(!firstNameField){
        alert("Please enter a value for the first and last name");
    }

    else {
     console.log("successful");
    }
 }

 const checkLastName = () => {
  const lastNameField = document.querySelector('input[name = "last-namee').value;
  if(!lastNameField){
    alert("Please enter a last name value")
  }
  
  else{
    console.log("Success");
  }
 }

 //This function checks the email field for the contact form
 const checkEmail = () => {

    //define a variable for special characters
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    //test the email input field value
  const isValid =  re.test(document.querySelector('input[name = "Email').value);
  
  //Check to see if special characters are found
  if(!isValid || isValid.length < 5) {
    alert("Please enter a valid email");
  }

  else{
    console.log("successfulll");
  }
 }

 const switchTab = () => {
  
 }

 //This function checks the phone number field for the contact form
 const checkPhoneNumber = () => {

    //Make a variable for the phone number format
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    //Test the phone number input field to the phone number variable
    const validate = phoneno.test(document.querySelector('input[name = "phone').value);

    //Check to see if the phone number matches the format
    if(!validate){
      alert("Please enter a valid phone number");
    }

    else {
      console.log("success");
      

    }
 }

 const submitForm = () => {
   const form1 = document.querySelector("form");
   const email = checkEmail();
   const phone = checkPhoneNumber();
   const names = checkFirstName();
   const lastName = checkLastName();

   if(email && phone && names){
     console.log("correct");
     form1.submit();
     return true;
    }

   else {
     
     console.log("unsuccesful");
   }
 }

//Open modal //
var openModal = document.getElementById('open-modal');

// Modal ID
var modal = document.getElementById('modal-window');

// Close modal button
var closeModal = document.getElementsByClassName('close-modal')[0];

// Open modal event listener
openModal.addEventListener('click', function(){
    modal.classList.toggle('visible');
});

// Close modal event listener
closeModal.addEventListener('click', function(){
    modal.classList.remove('visible');
});


//Open modal 2 //
var openModal2 = document.getElementById('open-modal-2');

//Modal ID
var modal2 = document.getElementById('modal-window-2');

//Close modal window 2//
var closeModal2 = document.getElementsByClassName('close-modal-2')[0];


//Open modal 2 with event listener
openModal2.addEventListener('click', function(){
 modal2.classList.toggle('visible');
})

//Close modal event listener//
closeModal2.addEventListener('click', function(){
 modal2.classList.remove('visible');
})


//Add an event listener to the page to prevent default reset
about.addEventListener('click', function(event){
  event.preventDefault();
})

//Add an event listener to the about section //
btnContainer.addEventListener('click', hideArticle);

//Select the contact form
const submitBtnn = document.querySelector('.submit-btn');

//Add an event listener to the contact form
submitBtnn.addEventListener("click", (e) => {
    e.preventDefault();
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPhoneNumber();
    submitForm();
})



















