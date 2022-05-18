let moods = ["Falling In Love Vibe", "Sad", "Energetic", "Ready For The Day"]

function generateMoods() {
    console.log(111)
    let parent = document.querySelector('.moodContainer');
    // console.log(parent);
    for (let i = 0; i < moods.length; i++) {
        let ele = document.createElement('span');
        ele.innerHTML = moods[i] + " | ";
        parent.appendChild(ele);
    }
}
generateMoods()

