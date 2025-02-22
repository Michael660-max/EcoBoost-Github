
const aboutContainer = document.getElementById('aboutContainer')
const buttons = document.getElementsByClassName("button")
const aboutSection = document.getElementById("aboutSection")
const aboutBtn = document.getElementById("aboutBtn")
const sec1 = document.getElementById('sec1')
const header = document.getElementById("header")
const closeAbout = document.getElementById("closeAbout")
const aboutText = document.getElementById("aboutText")
var buttonSound1 = document.getElementById('audio1')
var buttonSound2 = document.getElementById('audio2')
//https://www.epidemicsound.com/music/featured/
/** Creating the canvas, adjusted to windows height and width */

function showDiv(e){ 
  e.classList.remove("hide0");
}

function hideDiv(e){ 
  e.classList.add('hide0');
}

//========================= PLAY and LOCKED SECTION ==========================
function playSound1(){ 
  buttonSound1.play()
}
function playSound2(){ 
  buttonSound2.play()
}

for(var i=0, len = buttons.length; i<len; i++){ 
  buttons[i].addEventListener("click", () => playSound1());
}

function linkGame() { 
  buttons[0].href = "game3.html"
  }
//========================= ABOUT SECTION ==========================
// Manipulating the DOM if about button is pressed 
aboutBtn.addEventListener("click", ()=> {
  playSound1()
  hideDiv(sec1)
  hideDiv(header)
  showDiv(aboutSection)
  showDiv(aboutContainer)
  showDiv(aboutText)
  showDiv(closeAbout)
  console.log("opened")
}) 

// Manipulating the DOM if the X button is pressed on the about section 
closeAbout.addEventListener("click", ()=> { 
  playSound2()
  hideDiv(closeAbout)
  hideDiv(aboutText)
  hideDiv(aboutContainer)
  hideDiv(aboutSection)
  showDiv(sec1)
  showDiv(header)
  console.log('closed')
})



//Option 1  - Different functions to make new scereens on same javascript file 

//Option 2 - Different Javascript file, using HTML to manipulate the different links 



