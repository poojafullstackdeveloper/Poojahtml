let currentCount=1;
let brickArray =['<div class="brick"></div>'];

function addBrick(){
    currentCount++;
    brickArray.push('<div class="brick"></div>');
    document.getElementById("right-container").innerHTML=brickArray;
    document.getElementById("count").innerHTML= currentCount;
    document.getElementById("count").style.color="blue"


}
function removeBrick(){

    if (currentCount>=1){
        currentCount--;
    }  
    // process+ //
    brickArray.pop('<div class="brick"></div>');
    document.getElementById("right-container").innerHTML=brickArray;
    
    // 
    document.getElementById("count").innerHTML= currentCount;
    document.getElementById("count").style.color="black"
}