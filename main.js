var dog= 0;
var cat= 0;
var cow= 0;
var elehant= 0;
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/txNdNaStd/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() *255) + 1;
        random_number_g = Math.floor(Math.random() *255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("number_of_animals").innerHTML ="I Can Hear = Cat "+cat ;
        document.getElementById("name_of_sound").innerHTML ="Sound Of Animal  = " + results[0].label;

        document.getElementById("number_of_animals").style.color="rgb("+ random_number_r +", "+ random_number_g +" , "+ random_number_b +")";
        document.getElementById("number_of_sound").style.color="rgb("+ random_number_r +", "+ random_number_g +" , "+ random_number_b +")";


        if(results[0].label == "MEOWING"){
            img.src("cat.jpg");
            cat = cat + 1;
        }
        else if(results[0].label == "BARKING"){
            img.src("dog.jpg");
            dog = dog + 1;
        }
        else if(results[0].label == "MOOING"){
            img.src("cow.jpg");
            cow= cow + 1;
        }
        else if(results[0].label == "ELEPHANT"){
            img.src("20-amazing-facts-about-the-majestic-elephant-1.jpg");
            elephant= elephant +1;
        }
        else{
            img.src("listen.gif")
        }

    }
}
