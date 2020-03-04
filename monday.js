
function getRandomInt() {
    return Math.floor(Math.random() *6);
  }

function getRandomDice(){
    var pictureToSwitch = document.getElementById("picture");
    switch(getRandomInt()){
        case 0:
            pictureToSwitch.src = "d1.png";
            break;
        case 1:
            pictureToSwitch.src = "d2.png";
            break;
        case 2:
            pictureToSwitch.src = "d3.png";
            break;
        case 3:
            pictureToSwitch.src = "d4.png";
            break;
        case 4:
            pictureToSwitch.src = "d5.png";
            break;      
        case 5:
            pictureToSwitch.src = "d6.png";
            break;
        default:

    }
}