nose_x=0;
nose_y=0;

function preload(){
img=loadImage(' https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(500,200);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
    }

function draw(){
image(video,0,0,400,400);
image(img,nose_x,nose_y,60,60);
}

function filter_snapshot(){
save("filter.png");
}

function modelLoaded(){
console.log("Model Loaded");
}

function gotPoses(results){
    if(results){
console.log(results);
console.log("Nose x ="+results[0].pose.nose.x);
console.log("Nose y ="+results[0].pose.nose.y);
nose_x=results[0].pose.nose.x-100;
nose_y=results[0].pose.nose.y-90;
    }
}