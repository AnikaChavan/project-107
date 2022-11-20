//https://teachablemachine.withgoogle.com/models/5DPZkwszT/

function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/5DPZkwszT/model.json",
    function(){
        console.log("Model loaded");
        classifier.classify(identifySound)
    });
}

function identifySound(error, result){
    console.log("found result")
}