
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
const fname = document.getElementsByTagName('input');
//This function checks the user input on the contact page
function checkUserInput(){
for(let i = 0; i < fname.length; i++){
  var userInput = fname[i].value;
  if(userInput === ""){
    alert("please enter value");
    break;
   } else if(userInput.value.length > 10){
   alert("value too big, please reenter value");
   break;
   } else if(userInput.value === "/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/"){
      console.log('email valid');
   }
  }

}
//This function resets the text box field
function resetFields(){
for(let i = 0; i < fname.length; i++){
  var inputFields = fname[i].value;
  inputfields.value = "";
}
}
//This function hides certain article buttons info
function hideArticle(event){
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
    const element = document.getElementById(id);
    element.classList.add('active'); 
}
//Add an event listener to the page to prevent default reset
about.addEventListener('click', function(event){
  event.preventDefault();
})

//Add an event listener to the about section //
btnContainer.addEventListener('click', hideArticle);


submitBtn.addEventListener('click', checkUserInput);
//Add an event listener to the soccer button
soccerBtn.addEventListener('click', function(){
  const photo1 = document.querySelector('.picture1').style.display = "block";
  const photo2 = document.querySelector('.picture2').style.display = "none";
  photo2.toggle();
})

racketballBtn.addEventListener('click', function(){
  photo1.style.display = "none";
  const photo2 = document.querySelector('.picture2').style.display = "block";
  photo2.toggle();

})

parksBtn.addEventListener('click', function(){
  parkPhoto.style.display = "block";
})


