var font1, words; 
var myText= ' And yet this naked body of \"quotemarks\" words just now staring to play out its creative potential is not really my own. ';
var size=32
function preload() {
 font1 = loadFont('data/arial.ttf'); 
 
}

function setup() {
 createCanvas(windowWidth, windowHeight); 
 background(0); 
 textFont(font1); 
 words=myText.split(' '); 
 textSize(32); 
 fill(255); 
 textLeading (32*1.5); 
}


function draw() {
 background(0); 
 //text(myText, 0.05*width, 0.05*height, 0.9*width, 0.9*height); 
 for (var i=0; i<words.length; i++){
   if (frameCount>100*i){
   text(words[i], 10, i*32);   
 }
 }
}
