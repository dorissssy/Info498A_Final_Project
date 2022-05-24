let moods = ["Chill", "Falling In Love", "Energetic", "Inspiring", "Healing", "Sad", "Happy", "Angry", "Powerful"]
// let colors = ["#A8DEF1", "#F2ADB7", "#F3B103", "#C7E7BB", "#BCA6C7", "#94AAD0", "#F1C3E9", "#FA8170", "#FADACD"]
function generateMoods() {
    let parent = document.querySelector('.moodContainer');
    // console.log(parent);
    for (let i = 0; i < moods.length; i++) {
        let ele = document.createElement('button');
        ele.innerHTML = moods[i];
        ele.classList.add('mood_btn');
        ele.classList.add('btn');
        ele.classList.add('btn-secondary');
        // ele.style.background = colors[i];
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
    // console.log(data)
    songJson = data;
}

//pass in mood
let mood = document.querySelectorAll('.mood_btn');

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
    if (document.querySelector('.tip')) {
        parent.removeChild(document.querySelector('.tip'))
    }
    let song_arr = []
    // let src_arr = []
    //append songs that match the selected mood
    for (let i = 0; i < songJson.length; i++) {
        // if (songJson[i].mood == undefined) {
        //     console.log(songJson[i])
        // }
        
        if (songJson[i].mood&&songJson[i].mood.includes(mood)) {
            song_arr.push(songJson[i].eng_track_title)
            // src_arr.push(songJson[i].embed_link)
            // let ele = document.createElement('p');
            // ele.innerHTML = songJson[i].eng_track_title;
            // ele.classList.add('song');
            // parent.appendChild(ele);
        }
    }

    //generate random songs from the chosen mood and number
    let dropdownVal = document.querySelector('#numbers').value;
    if (dropdownVal === "all") {
        dropdownVal = song_arr.length;
        for (let i = 0; i < dropdownVal; i++) {
            // let songID = Math.floor(Math.random() * song_arr.length);
            // let songTitle = song_arr[songID];
            let ele = document.createElement('h4');
            let inner = document.createElement('span')
            inner.innerHTML = song_arr[i];
            ele.appendChild(inner);
            ele.classList.add('song');
            parent.appendChild(ele);
        }
    } else {
        for (let i = 0; i < dropdownVal; i++) {
            let songID = Math.floor(Math.random() * song_arr.length);
            let songTitle = song_arr[songID];
            let ele = document.createElement('h4');
            let inner = document.createElement('span')
            inner.innerHTML = songTitle;
            ele.appendChild(inner);
            ele.classList.add('song');
            parent.appendChild(ele);
        }
    }

    //generate tips
    let tip = document.createElement('p');
    tip.innerHTML = "Not satisfied? Click button again or try a different number"
    tip.style.color = '#C2C2C2';
    tip.classList.add('tip')
    parent.appendChild(tip)
}
