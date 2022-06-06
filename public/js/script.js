var imageButton = document.getElementById('imageButton');
var container = document.getElementById('background-image-div');
var save = document.getElementById('save');
var currentIndex = 0;
var jokeBtn = document.getElementById('jokeBtn');


var imgArray = [
 './images/ballons.jpeg',
 './images/beaker.jpg',
 './images/bridge.jpg',
 './images/cat.jpg',
 './images/chicken.jpg',
 './images/cow.jpg',
 './images/face.jpg',
 './images/face2.jpg',
 './images/fellowship.webp',
'./images/food.jpg',
'./images/handy.jpg',
'./images/keys.png',
'./images/lovepik.jpeg',
'./images/mordor.webp',
'./images/rocks.jpg',
'./images/standing.jpeg',
'./images/ties.jpg',
'./images/tools.jpg',
'./images/tools2.jpg',
'./images/tow-mater.jpeg',
'./images/trooper.jpg',
'./images/witcher.webp'
]

imageButton.addEventListener('click', function() {
    // for(var i=0;i<imgArray.length;i++) {
        // var img = new Image();
    if(currentIndex < imgArray.length) {
        currentIndex++;
        var imageEl = document.getElementById('background-image');
            imageEl.src = imgArray[currentIndex]     
    } else {
        currentIndex = 0;
        var imageEl = document.getElementById('background-image');
            imageEl.src = imgArray[currentIndex]
    }       
})

save.addEventListener('click', function() {
    var imageToSave = document.getElementById('background-image').src;
    var JokeToSave = document.getElementById('dadJoke').textContent;
    fetch("/api/jokes", {
        method: "POST",
        body: JSON.stringify({ 
            image: imageToSave,
            dad_joke: JokeToSave
        })
    })
})

jokeBtn.addEventListener('click', function() {
    fetch("/generate/dadjoke")
    .then(response => response.json())
    .then(data => {
        var dadJoke = document.getElementById("dadJoke");
        dadJoke.textContent = data.joke;
    })
})


