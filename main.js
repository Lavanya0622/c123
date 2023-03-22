function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(550,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);


}
function draw(){
    background('#969A97');
    document.getElementById("square_sides").innerHTML="Width & Height of the square will be -  "+difference+"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX , noseY,difference);
}
function modelLoaded(){
    console.log("PoseNet is initialized");

}
noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX+ "noseY= "+noseY)
        
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        console.log("Left Wrist=" + leftwristX+"Right Wrist=" + rightwristX);
        difference=Math.floor(leftwristX-rightwristX);
    }
}