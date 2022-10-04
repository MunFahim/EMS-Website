
let check = true;

function showDrop(){
    const dBtn = document.getElementById("icon");
    const dContent = document.getElementById("dropDownContent");
    if (check){
        dBtn.style.rotate = "90deg";
        dContent.style.visibility = "visible";
        
    }else {
        dBtn.style.rotate = "0deg";
        dContent.style.visibility = "hidden";
        
    }
    check = !check;
}