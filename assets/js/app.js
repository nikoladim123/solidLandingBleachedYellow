var vidDiv = document.getElementsByClassName('vidDiv')[0];

function vidDivFun() {
  vidDiv.style.right = '0';
}

// button hover
// button hover
// button hover
var getStartedNowButton = document.getElementsByClassName('getStartedNowButton')[0];
var buttonHoverDiv = document.getElementsByClassName('buttonHoverDiv')[0];


getStartedNowButton.addEventListener('mouseenter',()=>{
  buttonHoverDiv.style.height = '51%';
  setTimeout(function () {
    buttonHoverDiv.style.top = "50%"
  }, 150);
});

getStartedNowButton.addEventListener('mouseleave',()=>{
  buttonHoverDiv.style.top = "0%"
  // buttonHoverDiv.style.height = '0%';
  setTimeout(function () {
    buttonHoverDiv.style.height = '0%';
  }, 150);
});





window.onload = function(){
  vidDivFun();
}
