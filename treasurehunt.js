function changeCursorHover() {
    document.getElementById("myButton");
    button.style.cursor = url('onhover2.png'), auto;
    button.innerHTML = "Button Hovered";
}

function changeCursorClick() {
    document.getElementById("myButton");
    button.style.cursor = url('onclick2.png'), auto;
}

var bomb = 0;
var attempts = 0;
var treasures = 0;

const treasure = (button) => {
    const parent = button.parentNode;
    const tdElements = parent.parentNode.getElementsByTagName('td');
    const randomNum = Math.random();
    let found = false;
    attempts++;
    // counter = bomb + 1
  
    if (Math.random() < 0.75 && attempts <= 8) {
        parent.innerHTML = '<img src="treasurepile.png" alt="treasure" class="treasure-image">';
        found = true;
        tresures++;
        // alert("You have found the treasure!");
      } else if (Math.random() > 0.8) {
        bomb++;
        } else if (attempts === 9 && !found) {
        parent.innerHTML = '<img src="treasurepile.png" alt="treasure" class="treasure-image">';
        found = true;
        // guarantee treasure on the 9th try if no treasure has been found
        } else if (bomb === 3) {
        return alert("You have exploded, Game Over!")
      }
    
      // bomb if no treasure has been found
      if (!found) {
        parent.innerHTML = '<img src="bomb.png" alt="bomb" class="bomb-image">';
      } else {

      }
}


  
        // alert("You have got a bomb, game over! Please Reset Game.")
        
    // }  else if(treas === bomb){
    //     alert("Neither a treasure or a bomb.")
    //     return(document.getElementById(location).innerHTML = "🌝")
    // }  else{

    // }