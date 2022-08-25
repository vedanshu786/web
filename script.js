console.log("Welcome to GaNNa");


let songindex=0;
let audioelement = new Audio("1.mp3");
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName : "kun faya kun", filePath: "1.mp3",cover :"1.jpg"},
    {songName : "aashique aa gayi", filePath:"2.mp3",cover:"2.jpg"},
    {songName : "mere rashke quamar", filePath:"3.mp3",cover:"3.jpg"},
    {songName : "tere rang", filePath:"4.mp3",cover:"4.jpg"},
    
    
]



masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        

    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');

    }
})

audioelement.addEventListener('timeupdate',()=>{

    
    //Upadate Seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;

})
const makeallplays  = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src =  `${songindex+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>3){
        songindex=0;
    }
    else{
                songindex+=1;
}
        audioelement.src =  `${songindex+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
} )

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
                songindex-=1;
}
        audioelement.src =  `${songindex+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
} )
