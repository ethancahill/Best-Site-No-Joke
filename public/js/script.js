var imageButton = document.getElementById('imageButton');
var container = document.getElementById('background-image-div');
var save = document.getElementById('save');
var currentIndex = 0;


var imgArray = [
 './images/ballons.jpeg',
 './images/beaker.jpg',
 './images/bridge.jpg',
 './images/cat.jpg',
 './images/chicken.jpg',
 './images/cow.jpg',
 './images/dark-souls.jpeg',
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
});

save.addEventListener('click', function() {
    var imageToSave = document.getElementById('background-image').src;
    var JokeToSave = document.getElementById('joke').textContent;
    fetch("/api/jokes", {
        method: "POST",
        body: JSON.stringify({ 
            image: imageToSave,
            dad_joke: JokeToSave
        })
    });
});


