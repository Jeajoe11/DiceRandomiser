const Dice1 = document.getElementById("my1Dice");
const Dice2 = document.getElementById("my2Dice");
const Dice3 = document.getElementById("my3Dice");
const Dice4 = document.getElementById("my4Dice");
const Dice5 = document.getElementById("my5Dice");
const Dice6 = document.getElementById("my6Dice");

const Dice7 = document.getElementById("my7Dice");
const Dice8 = document.getElementById("my8Dice");
const Dice9 = document.getElementById("my9Dice");
const Dice10 = document.getElementById("my10Dice");
const Dice11 = document.getElementById("my11Dice");
const Dice12 = document.getElementById("my12Dice");

const Dice13 = document.getElementById("my13Dice");
const Dice14 = document.getElementById("my14Dice");
const Dice15 = document.getElementById("my15Dice");
const Dice16 = document.getElementById("my16Dice");
const Dice17 = document.getElementById("my17Dice");
const Dice18 = document.getElementById("my18Dice");

const rollButton = document.getElementById("myButton");
const my1H1 = document.getElementById("my1H1");
const my2H1 = document.getElementById("my2H1");
const my3H1 = document.getElementById("my3H1");
const mySkip = document.getElementById("mySkip");
const myEasy = document.getElementById("myEasy");
const myNormal = document.getElementById("myNormal");
const myHard = document.getElementById("myHard");
const myH2 = document.getElementById("myH2");

const my1Text = document.getElementById("my1Text");
const my2Text = document.getElementById("my2Text");
const my3Text = document.getElementById("my3Text");
const my1Label = document.getElementById("my1Label");
const my2Label = document.getElementById("my2Label");
const my3Label = document.getElementById("my3Label");

const my1Name = document.getElementById("my1Name");

myEasy.onclick = function(){
  myH2.textContent = "Easy";
};
myNormal.onclick = function(){
  myH2.textContent = "Normal";
};
myHard.onclick = function(){
  myH2.textContent = "Hard";
}
rollButton.onclick = function(){
  
       Dice1.textContent = Math.floor(Math.random() * 6 + 1);
       Dice2.textContent = Math.floor(Math.random() * 6 + 1);
       Dice3.textContent = Math.floor(Math.random() * 6 + 1);
       Dice4.textContent = Math.floor(Math.random() * 6 + 1);
       Dice5.textContent = Math.floor(Math.random() * 6 + 1);
       Dice6.textContent = Math.floor(Math.random() * 6 + 1);
  setTimeout(()=>{
      if(my1Text.value == Dice6.textContent){
          my1Label.textContent = "Congratulations, You have won!";
        
        if(my1Name.value == ""){
          window.alert(`Congratulations, You have won ${window.prompt("Enter Your Name")} !`);
        }
        else{
          window.alert(`Congratulations, You have won ${my1Name.value}`)
        };
        
      }
    else{
      my1Label.textContent = "You have answered Incorrectly";
      }
  }, 2500);
  
  setTimeout(()=>{
    my1Text.value = "";
    my2Text.value = "";
    my3Text.value = "";
  }, 2501);
     setTimeout(()=>{ 
       Dice7.textContent = Math.floor(Math.random() * 6 + 1);
       Dice8.textContent = Math.floor(Math.random() * 6 + 1);
       Dice9.textContent = Math.floor(Math.random() * 6 + 1);
       Dice10.textContent = Math.floor(Math.random() * 6 + 1);
       Dice11.textContent = Math.floor(Math.random() * 6 + 1);
       Dice12.textContent = Math.floor(Math.random() * 6 + 1);
      
       Dice13.textContent = Math.floor(Math.random() * 6 + 1);
       Dice14.textContent = Math.floor(Math.random() * 6 + 1);
       Dice15.textContent = Math.floor(Math.random() * 6 + 1);
       Dice16.textContent = Math.floor(Math.random() * 6 + 1);
       Dice17.textContent = Math.floor(Math.random() * 6 + 1);
       Dice18.textContent = Math.floor(Math.random() * 6 + 1);
    },1250);
  setTimeout(()=>{
    if(my2Text.value == Dice12.textContent){
          my2Label.textContent = "Congratulations, You have won!";
      if(my1Name.value == ""){
        window.alert(`Congratulations, You have won ${window.prompt("Enter Your Name")} !`);
      }
      else{
        window.alert(`Congratulations, You have won ${my1Name.value}`)
      };
    }
      
    else{
      my2Label.textContent= "You have answered Incorrectly";
      }
  }, 2500);
  
  setTimeout(()=>{
    
    if(my3Text.value == Dice18.textContent){
          my3Label.textContent = "Congratulations, You have won!";
      if(my1Name.value == ""){
        window.alert(`Congratulations, You have won ${window.prompt("Enter Your Name")} !`);
      }
      else{
        window.alert(`Congratulations, You have won ${my1Name.value}`)
      };
    }
      
    else{
      my3Label.textContent= "You have answered Incorrectly";
      }
  }, 2500);
  
    my1H1.textContent = `You got ...`;
    setTimeout(()=> {
       my1H1.textContent = `You got ${Dice6.textContent} !`;
    }
    ,2500);
     my2H1.textContent = `You got ...`;
     setTimeout(()=> {
        my2H1.textContent = `You got ${Dice12.textContent} !`;
     }
     ,2500);
    my3H1.textContent = `You got ...`;
    setTimeout(()=> {
       my3H1.textContent = `You got ${Dice18.textContent} !`;
    }
    ,2500);
  mySkip.textContent = 3;
  setTimeout(()=>{
    mySkip.textContent = 2;
                  }, 400);
  setTimeout(()=>{
    mySkip.textContent = 1;
                  }, 800);
  setTimeout(()=>{
    mySkip.textContent = "Skip";
                  }, 1250);
  setTimeout(()=>{
    mySkip.onclick = function(){
      my1H1.textContent = `You got ${Dice6.textContent} !`;
      my2H1.textContent = `You got ${Dice12.textContent} !`;
      my3H1.textContent = `You got ${Dice18.textContent} !`;
    }
  },1250)
  
}