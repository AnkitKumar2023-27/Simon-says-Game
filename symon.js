let gameseq= [];
let userseq= [];
let btns= ["yellow","red","purple","green"];
let started=false;
let level=0;
 let h3=document.querySelector("h3");


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")},250);
   
};87
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
       levelup();  
   
}})

function levelup(){
    userseq=[]
    level++;
    h3.innerHTML=`You are on level=${level}`;
    let r=Math.floor(Math.random()*3);
    let randcolor=btns[r];
    console.log(randcolor);
    let randbtn=document.querySelector(`.${randcolor}`);
    console.log(randbtn); 
     gameseq.push(randcolor)
    console.log(gameseq);
    btnflash(randbtn);
 

}; 
 function checkans(idx){
        console.log(" level",level)
      
        if(userseq[idx]===gameseq[idx]){
            if(userseq.length==gameseq.length){
             setTimeout( levelup,1000)  
                }  
            
        }else{
            h3.innerHTML=`Game Over! <b> Your Score Was  ${level}</b> <br> Again refresh and start the game`
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(
                    function(){
                        document.querySelector("body").style.backgroundColor="aqua";
                    },150        
            );
            reset()    
        }}

let allbtns=document.querySelectorAll(".btn")
for( button of allbtns){
    button .addEventListener("click",btnPress);
} 
          
           

function btnPress(){
    console.log(this)
    let btn=this;
    btnflash(btn);
    usercolor=btn.getAttribute("id")
    userseq.push(usercolor);
    console.log(userseq)
    checkans(userseq.length-1);
}
              
 function reset(){
    
    gameseq=[];
    userseq=[];
    level=0; 

 }   





    
     
