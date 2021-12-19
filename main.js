function setup(){
    canvas=createCanvas(800,650);
    canvas.position(650,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
circle(20,30,30);
circle(20,620,30);  
circle(780,620,30);  
circle(780,30,30);
fill("green");
rect(30,20,740,20)
rect(10,20,20,610)
rect(770,20,20,610)
rect(30,610,740,20)
fill("red")
image(video,50,50,700,550)


}

function take_snapshot(){
    save("Aryan.png")
}

