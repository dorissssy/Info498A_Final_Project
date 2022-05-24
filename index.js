let moods = ["Chill", "Falling In Love", "Energetic", "Inspiring", "Healing", "Sad", "Happy", "Angry", "Powerful"]

function generateMoods() {
    let parent = document.querySelector('.moodContainer');
    // console.log(parent);
    for (let i = 0; i < moods.length; i++) {
        let ele = document.createElement('button');
        ele.innerHTML = moods[i];
        ele.classList.add('mood');
        parent.appendChild(ele);
    }
    
}
generateMoods()


async function fetchData() {
    await fetch("data/song_mood.json")
    .then(response => response.json())
    // .then(json => data = json)
    .then(loadData);
    
}
fetchData()

let songJson;
function loadData(data) {
    console.log(data)
    songJson = data;
}

//pass in mood
let mood = document.querySelectorAll('.mood');

for (var i = 0; i < mood.length; i++) {
    mood[i].addEventListener('click', function(event) {
        loadSongs(this.innerHTML)
    });
}

function loadSongs(mood) {
    //remove all previous elements
    let songs = document.querySelectorAll('.song');
    let parent = document.querySelector('.songContainer');
    for (var i = 0; i < songs.length; i++) {
        parent.removeChild(songs[i]);
    }
    
    //append songs that match the selected mood
    for (let i = 0; i < songJson.length; i++) {
        if (songJson[i].mood == undefined) {
            console.log(songJson[i])
        }
        if (songJson[i].mood&&songJson[i].mood.includes(mood)) {
            let ele = document.createElement('p');
            ele.innerHTML = songJson[i].eng_track_title;
            ele.classList.add('song');
            parent.appendChild(ele);
        }
    }
}