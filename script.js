

/** Creating the canvas, adjusted to windows height and width */
function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('click me');
  button.position(0, 0);
  img = loadImage('solar.jpg'); // Load the image
  
  
}



// Drawing the 2 option the user has to choose 
function draw() {
  textSize(25)
  text("Play", 100, 20);
  fill(78, 142, 245);
    background(0, 0, 48);
    image(img, windowWidth*.15, windowHeight*.3, 300, 180); 
    image(img, windowWidth*.55, windowHeight*.3, 300, 180); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


//Option 1  - Different functions to make new scereens on same javascript file 

//Option 2 - Different Javascript file, using HTML to manipulate the different links 



