import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const savedTime = (data) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(player.on(data)))
    console.log(savedTime);
};
    

player.on('timeupdate', throttle(savedTime, 1000));


    // player.getVideoTitle().then(function(title) {
    //     console.log('title:', title);
    // });

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

// localStorage.setItem('videoplayer-current-time', JSON.stringify(player.getCurrentTime(seconds)));


// const parsedTime = JSON.parse(savedTime);
// console.log(savedTime, parsedTime);