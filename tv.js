Status = "";
tv_image = "";

function preload() {
    tv_image = loadImage("tv.jpeg");
}

function setup() {
    canvas = createCanvas(480,350);
    canvas.center();
    canvas.position(550,255);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded!");
    Status = true;
    object_detector.detect(tv_image, gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(tv_image,0,0,480,350);
}