const rick = document.getElementById("rick")

rick.onclick = () => {
    
    const roll = new Audio("./tudum.mp3");
    roll.play();
    classList.add("roll");
}

