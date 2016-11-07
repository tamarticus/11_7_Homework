var topping=[mushroom, pepper, pepperoni];


function setup(){
createCanvas(1000,800);


}

function draw(){
    background(25,251,255);
    
    stroke(255,133,90);
    strokeWeight(8);
    fill(255,188,168);
    ellipse(500,420,750,750);
    
    stroke(255,171,138);
    fill(239,255,188);
    ellipse(500,420,620,620);
    
    stroke(255,183,25);
    fill(255,216,0);
    triangle(250, 150, 750, 150, 500, 750);
   
    fill(255,231,97);
    ellipse(500,150,550,100);
    strokeWeight(2);
     stroke(14,100,102);
   fill(14,100,102);
    textSize(32);
    text("Click For Toppings!",35,70);
    f;
   
    
}

function mouseClicked(){
   var i = random(-0.29,2.4);
   var p= Math.round(i);
    topping[p]();
 


}
function pepperoni(){
    fill(171,41,18);
    noStroke();
    ellipse(mouseX,mouseY,55,55);

}

function pepper(){
    var r = random(PI);
   
    noFill();
    strokeWeight(11);
    stroke(12,102,4);
    arc(mouseX,mouseY, 60, 40, 0, r, OPEN);  

}

function mushroom(){
    noStroke();
    fill(99,90,78);
    ellipse(mouseX,mouseY,65,40);
    rect(mouseX-15,mouseY,30,40);
    


}

