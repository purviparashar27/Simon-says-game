let gameseq=[];
let userseq=[];

let btns=["yellow","red","green","blue"];

let started= false;
let level=0;

let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomindex=Math.floor(Math.random()*3);
    let randcolor=btns[randomindex];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq)
    gameflash(randbtn);
}


function checkbtn(index){
    //console.log("curr level: ",level);
    if(userseq[index]==gameseq[index]){
        if(userseq.length== gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`game over!Your score was <b>${level}<b><br> Press any key to restart`; 
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },300);
        reset();
    }
}


function btnpress(){
    let btn= this;
    userflash(btn);
    

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkbtn(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}