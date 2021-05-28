// Modal button
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


// Add Code Below for Second Modal Window Instructions
var openModal2 = document.getElementById('open-modal-2');

// Modal ID
var modal2 = document.getElementById('modal-window-2');

// Close modal button
var closeModal2 = document.getElementsByClassName('close-modal-2')[0];

// Open modal event listener
openModal2.addEventListener('click', function(){
    modal2.classList.toggle('visible');
});

// Close modal event listener
closeModal2.addEventListener('click', function(){
    modal2.classList.remove('visible');
});