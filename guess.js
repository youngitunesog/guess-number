const scores = document.getElementById('scores');
const result = document.getElementById('res');
let gnum = document.getElementById("gnum");
let snum = document.getElementById("snum");
let form = document.getElementById("form");
const sub = document.getElementById('snum');
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const resul = document.getElementById('result');
  let sound = new Audio('./img/correct.mp3'); 
  let soundi = new Audio('./img/wrong.mp3');
 let score = 0;
window.addEventListener('load',()=>{
  
snum.addEventListener('click',
(e)=>{
    e.preventDefault();

      computer()
}
)
}
)
function computer(){
    let ran = Math.floor(Math.random()*5 +1);
    if(ran == gnum.value){
        gnum.value="";
        result.innerHTML=ran;
        resul.style.borderColor="green";
        form.style.borderColor="green";
       setTimeout(play, 1000)
       correct.style.display="inline";
       wrong.style.display="none";
        scores.innerHTML = sco();   pause1()
       
    }else{
        gnum.value="";
        result.innerHTML=ran;
        form.style.borderColor="red";
        resul.style.borderColor="red";
        setTimeout(play1, 1000)
        wrong.style.display="inline";
        correct.style.display="none";
  pause()
  scor()
    }

}
let sco = (
function (){
 score 
    return function (){
        score +=1;
        return score;
    }
}
)()
let scor = (
    function (){
        score
        return function (){
            if(score >= 1){
                score -=1;
return score;
            }else{
                alert("Game Over")
                setTimeout(window.location.reload(), 2000)
            }
            
            
        }
    }
    )()
function play(){
    sound.loop =false;
   return sound.play()
}


function play1(){
    soundi.loop =false;
   return soundi.play()
}

function pause(){
    sound.loop =false;
   return sound.pause()
}


function pause1(){
    soundi.loop =false;
   return soundi.pause()
}