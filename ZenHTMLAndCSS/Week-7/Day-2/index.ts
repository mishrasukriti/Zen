

let videosArray = [ 
    {
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "name" : 'Big Buck Bunny'
    },
    {
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "name" : "For Bigger Fun"
    },
    {
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        "name": "For Bigger Rides"
    },
    {
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        "name": "Sintel"
    },
    {
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        "name": "Subaru Outback "
    },
    {
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        "name": "Volkswagen Channel"
    },
    {
        "sources": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "name": "Elephant Dream"
    },
    
    
];

let myVideo = (document.getElementById('video') as HTMLVideoElement);
let playList = (document.getElementById('playList') as HTMLElement);
let playButton = (document.getElementById('playButton') as HTMLElement);
let pauseButton = (document.getElementById('pauseButton') as HTMLElement);
let stopButton = (document.getElementById('stopButton') as HTMLElement);
let resumeButton = (document.getElementById('resumeButton') as HTMLElement);
let prevButton = (document.getElementById('prevButton') as HTMLElement);
let nextButton = (document.getElementById('nextButton') as HTMLElement);
let timeOut = (document.getElementById('timeOut')as HTMLOutputElement);
let vidNumOut = (document.getElementById('vidNumber')as HTMLOutputElement);
let source = (document.getElementById('source') as HTMLSourceElement);
let vidPlaying = 0;

 for(let i=0; i<videosArray.length; i++){
     let videoDiv = document.createElement('div');
     videoDiv.setAttribute('class','row m-2');
     let videoDivCol = document.createElement('div');
     videoDivCol.classList.add('col','rounded','border','border-secondary','p-2');
     videoDivCol.innerText = videosArray[i].name;
     videoDivCol.setAttribute('style','background-color:#8B008B; color:white');
     videoDivCol.addEventListener('click',function(event){
         console.log("On CLicking button number:" + i + " CHanging source to:" + videosArray[i].sources);
         console.log('playing video' + ' with source as:' + myVideo.children[0].getAttribute('src'));

        let videoElement = (document.getElementById('video') as HTMLVideoElement);
        var newSource = document.createElement('source');
        newSource.setAttribute('src', videosArray[i].sources);

        videoElement.replaceChild(newSource, videoElement.childNodes[0]);
        videoElement.load();
        videoElement.play();
        timer = setInterval(update, 100);

     });
     videoDiv.append(videoDivCol);
     playList.append(videoDiv);

    
 }

 /**
  * EventListener for play button
  */
 playButton.addEventListener('click',vidAction);
 pauseButton.addEventListener('click',vidAction);
 stopButton.addEventListener('click',vidAction);
 prevButton.addEventListener('click',prevVideo);
 nextButton.addEventListener('click',vidEnded);
 resumeButton.addEventListener('click',vidAction);

 let timer  = null;

 function vidAction(event){
     switch(event.target.id){
         case 'playButton':
             playVideo();
             timer = setInterval(update, 100);
             break;
        case 'pauseButton':
            myVideo.pause();
            break;
        case 'stopButton':
            myVideo.pause();
            myVideo.currentTime= 0;
            break;
        case 'resumeButton':
            myVideo.play();
            // myVideo.currentTime= 0;
            break;
     }
 }

 function playVideo(){
    console.log('playing video' + ' with source as:' + myVideo.children[0].getAttribute('src'));

    let videoElement = (document.getElementById('video') as HTMLVideoElement);
    var newSource = document.createElement('source');
    newSource.setAttribute('src', videoElement.children[0].getAttribute('src'));

    videoElement.appendChild(source);
    // videoElement.load();
    videoElement.play();
     timer = setInterval(update, 100);
 }

 function update(){
     timeOut.innerHTML = 'Time: ' + myTime(myVideo.currentTime) + '/'+ myTime(myVideo.duration); 
 }

 function myTime(time:number){
     let hr = ~~(time/3600);
    let min = ~~((time%3600)/60);
    let sec = time%60;
    let sec_min = '';
    if(hr>0){
        sec_min+= ''+ hr +':'+(min<10?'0':'');
    }
    sec_min+= '' + min + ":"+ (sec<10?'0':'');
    sec_min+=  ''+ Math.round(sec);
    return sec_min;
 }

 function vidEnded(){
     clearInterval(timer);
     timeOut.innerHTML = "Timer: 0";
     nextVideo();
     playVideo();
 }

 function nextVideo(){
     if(vidPlaying<videosArray.length){
         vidPlaying++;
     }
     else   vidPlaying = 0;
     let videoElement = (document.getElementById('video') as HTMLVideoElement);
        var newSource = document.createElement('source');
        newSource.setAttribute('src', videosArray[vidPlaying].sources);

        videoElement.replaceChild(newSource, videoElement.childNodes[0]);
        videoElement.load();
        videoElement.play();
        timer = setInterval(update, 100);
        vidNumOut.innerHTML = (vidPlaying+1)+'/7';
 }

 function prevVideo(){
    if(vidPlaying>0){
        vidPlaying--;
    }
    else   vidPlaying = videosArray.length-1;
    let videoElement = (document.getElementById('video') as HTMLVideoElement);
       var newSource = document.createElement('source');
       newSource.setAttribute('src', videosArray[vidPlaying].sources);

       videoElement.replaceChild(newSource, videoElement.childNodes[0]);
       videoElement.load();
       videoElement.play();
       timer = setInterval(update, 100);
    vidNumOut.innerHTML = (vidPlaying+1)+'/7';
}
