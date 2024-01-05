const letters = document.querySelectorAll('.scoreboard-letter');
console.log(letters);
const loadingDiv = document.querySelector('.infobar');

async function init(){


  document.addEventListener('keydown',function handleKeyPress (event){
    const action = event.key;
    console.log(action);

    if(action === 'Enter'){
      commit();
    }else if(action=== 'Backspace'){
      backspace();
    } else if(isLetter(action)){
      addLetter(action.toUpperCase())
    }else{
      // donothing
    }
  });

}

function isLetter(letter){
  return /^[a-zA-z]$/.test(letter);
}

init();
