// Play the auio
document.getElementById("playAudioButton").onclick = function(){
    console.log("button clicked");
    var audio = new Audio("https://drive.google.com/uc?export=download&id=1hPPyIayYAuEr2cHuR9n5G6c_khDbEIvt");
    audio.play();
}