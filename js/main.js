
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

 //Leaflet plugin to add a styled sidepanel
 const sidepanelLeft = L.control.sidepanel('mySidepanelLeft', {
    tabsPosition: 'left',
    startTab: 'tab-1'
}).addTo(Map);


var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden');
  },610);
});