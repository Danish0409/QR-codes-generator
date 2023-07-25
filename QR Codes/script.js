let inputBox = document.getElementById("text");
let first = document.getElementById("first");
let image = document.getElementById("img");
 function generateQR(){
    if(inputBox.value.length>0){
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputBox.value;
    }
    else{
        inputBox.classList.add("error");
        setTimeout (()=>{
            inputBox.classList.remove("error");
        },1000);
    }
 }