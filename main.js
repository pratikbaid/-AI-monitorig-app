
objects=[];
video="";
function preload(){
    video=createVideo('alarm_remix_2009.mp3');
    video.hide();
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}

function draw(){
    image(video,0,0,480,380);
if(status!=""){
objectDetector.detect(video,gotResult);
for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="status object detected";
    document.getElementById("number_of_object").innerHTML="number of objects detect are "+objects.length;
    
fill("#0000FF");
percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
nofill();
stroke("#0000FF")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}

function gotResult(error,results){
if (error){
    console.error(error);
}
console.log(results);
objects=results;
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    
function modelLoaded(){
    console.log("model Loaded");
    status=true;
    video.loop();
video.speed(1);
video.volume(0);
}
}
}
