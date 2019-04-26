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
  buttonHoverDiv.style.height = '100%';
  buttonHoverDiv.style.top = '0%';
  setTimeout(function () {
    buttonHoverDiv.style.width = '100%';
  }, 200);
});

getStartedNowButton.addEventListener('mouseleave',()=>{
  setTimeout(function () {
    buttonHoverDiv.style.width = '2%';
    setTimeout(function () {
      buttonHoverDiv.style.height = '50%';
      buttonHoverDiv.style.top = '25%';
    }, 200);
  }, 150);
});





window.onload = function(){
  vidDivFun();
}
