
const aboutContainer = document.getElementById('aboutContainer')
const aboutSection = document.getElementById("aboutSection")
const aboutBtn = document.getElementById("aboutBtn")
const sec1 = document.getElementById('sec1')
const header = document.getElementById("header")
const closeAbout = document.getElementById("closeAbout")
const aboutText = document.getElementById("aboutText")

/** Creating the canvas, adjusted to windows height and width */

function showDiv(e){ 
  e.classList.remove("hide0");
}

function hideDiv(e){ 
  e.classList.add('hide0');
}

// Manipulating the DOM if about button is pressed 
aboutBtn.addEventListener("click", ()=> {
  hideDiv(sec1)
  hideDiv(header)
  showDiv(aboutSection)
  showDiv(aboutContainer)
  showDiv(aboutText)
  showDiv(closeAbout)
  console.log("open")
}) 


// Manipulating the DOM if the X button is pressed on the about section 
closeAbout.addEventListener("click", ()=> { 
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



