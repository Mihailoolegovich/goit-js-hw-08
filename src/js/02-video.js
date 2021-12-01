const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const TIME_UP_DATE = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveTimeVideo, 1000));


function saveTimeVideo(params) {
  localStorage.setItem(TIME_UP_DATE, params.seconds);
}

if (localStorage.getItem(TIME_UP_DATE)) {
  player.setCurrentTime(localStorage.getItem(TIME_UP_DATE));
  
  console.log('save time video', localStorage.getItem(TIME_UP_DATE));
}else{
  console.log("Not have local storege");
}

