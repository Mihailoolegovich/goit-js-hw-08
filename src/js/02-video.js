const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const TIME_UP_DATE = 'videoplayer-current-time';
//  videoplayer-current-time

// player.on('play', function (data) {
//   console.log('played the video!');
//   console.log('player', data.seconds);
// });
// getTimeVideo();
player.on('timeupdate', throttle(saveTimeVideo, 1000));

// player.setCurrentTime(132.11);

//

// localStorage.getItem(TIME_UP_DATE);

// function cashTimeVideo() {}

function saveTimeVideo(params) {
  localStorage.setItem(TIME_UP_DATE, params.seconds);
//   getTimeVideo()
}

// function getTimeVideo() {
//   console.log('getTimeVideo', localStorage.getItem(TIME_UP_DATE));
//   localStorage.getItem(TIME_UP_DATE);
// }
player.setCurrentTime(localStorage.getItem(TIME_UP_DATE));
