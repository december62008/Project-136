objects = [];
status = "";
video = "";

function setup() {
  canvas = createCanvas(600, 400);
  canvas.center();
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!");
  status = true;
  video.loop();
  video.speed(1);
  video.volume(0);
}


function draw() {
    image(video, 0, 0, 600, 400);
     if(status !="")
     {
         objectDetector.detect(video, gotResult);
         for (i = 0; i < objects.length; i++) {
             document.getElementById("status").innerHTML = "Number of objects detected are : "+ objects.length;

             fill("#FF0000");
             percent = floor(objects[i].confidence * 100);
             text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
             noFill();
             stroke("#FF0000");
             rect(objects[i].x, objects[i].width, objects[i].height);
         }
     }
}
