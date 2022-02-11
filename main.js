img1 = "";
status = "";

function setup()
{
canvas = createCanvas(640, 420);
canvas.center();


objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload()
{
    img = loadImage('mobile.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FFFF00");
    text("PINEAPPLE", 135, 101);
    noFill();
    stroke("#FFFF00");
    rect(135, 101, 130, 200);

    fill("#0034FF");
    text("ORANGE", 250, 245);
    noFill();
    stroke("#0034FF");
    rect(250, 245, 150, 100);

    fill("#0034FF");
    text("ORANGE", 250, 245);
    noFill();
    stroke("#0034FF");
    rect(250, 245, 150, 100);

    fill("#FF1F00");
    text("GREEN APPLE", 250, 150);
    noFill();
    stroke("#FF1F00");
    rect(250, 150, 150, 80);
    fill("#FF1F00");
    text("GREEN APPLE", 250, 150);
    noFill();
    stroke("#FF1F00");
    rect(250, 150, 150, 80);

    fill("#000");
    text("LEMON", 380, 265);
    noFill();
    stroke("#000");
    rect(380, 265, 130, 100);
    fill("#000");
    text("LEMON", 380, 265);
    noFill();
    stroke("#000");
    rect(380, 265, 130, 100);
    
}

function modelLoaded()
{
    console.log("Model Loaded!");

    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult()
{
    if(error)
    {
    console.log(error);
    }else{
    console.log(results);
    
}
  }