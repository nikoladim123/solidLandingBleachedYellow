var vidDiv = document.getElementsByClassName('vidDiv')[0];

function vidDivFun() {
  vidDiv.style.right = '0';
}

// button hover
// button hover
// button hover
var getStartedNowButton = document.getElementsByClassName('getStartedNowButton')[0];
var buttonHoverDiv = document.getElementsByClassName('buttonHoverDiv')[0];
var buttonP = document.getElementsByClassName('buttonP')[0];


getStartedNowButton.addEventListener('mouseenter',()=>{
  buttonHoverDiv.style.height = '100%';
  buttonHoverDiv.style.top = '0%';
  buttonP.style.color = 'blue';
  setTimeout(function () {
    buttonHoverDiv.style.width = '100%';
  }, 400);
});

getStartedNowButton.addEventListener('mouseleave',()=>{
  setTimeout(function () {
    buttonP.style.color = 'white';
    buttonHoverDiv.style.width = '2%';
    setTimeout(function () {
      buttonHoverDiv.style.width = '2%';
      buttonHoverDiv.style.height = '50%';
      buttonHoverDiv.style.top = '25%';
    }, 400);
  }, 150);
});





window.onload = function(){
  vidDivFun();
}
