video = "";
function preload(){
    video = createVideo('Video2.mp4');
   
}
function setup(){
    Canvas = createCanvas(480,380);
    Canvas.center();
}
function draw(){
    image(video,0,0,480,380);
}
function Start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting Objects";
}
function modelLoaded(){
    console.log("Model is Loaded");
    status = true;
    video.loop();
    video.volume(1);
    video.speed(1);    
}