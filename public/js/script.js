var imageButton = document.getElementById('imageButton');
var container = document.getElementById('background-image-div')


// var imgArray = [];

// imgArray[0].src = './images/ballons.jpeg';
// imgArray[1].src = './images/beaker.jpg';
// imgArray[2].src = './images/bridge.jpg';
// imgArray[3].src = '../../images/cat.jpg';
// imgArray[4].src = '../../images/chicken.jpg';
// imgArray[5].src = '../../images/cow.jpg';
// imgArray[6].src = '../../images/dark-souls.jpeg';
// imgArray[7].src = '../../images/face.jpg';
// imgArray[8].src = '../../images/face2.jpg';
// imgArray[9].src = '../../images/fellowship.webp';
// imgArray[10].src = '../../images/food.jpg';
// imgArray[11].src = '../../images/handy.jpg';
// imgArray[12].src = '../../images/keys.png';
// imgArray[13].src = '../../images/lovepik.jpeg';
// imgArray[14].src = '../../images/mordor.webp';
// imgArray[15].src = '../../images/rocks.jpg';
// imgArray[16].src = '../../images/standing.jpeg';
// imgArray[17].src = '../../images/ties.jpg';
// imgArray[18].src = '../../images/tools.jpg';
// imgArray[19].src = '../../images/tools2.jpg';
// imgArray[20].src = '../../images/tow-mater.jpeg';
// imgArray[21].src = '../../images/trooper.jpg';
// imgArray[23].src = '../../images/witcher.webp';

var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src ='../../images/beaker.jpg';

imageButton.addEventListener('click', function() {
    document.getElementById('joke-id').textContent = dadJokes.random();
    console.log(dadJokes.random());
    for(var i=0;i<imgArray.length;i++) {
        var img = new Image();
        var imageEl = document.getElementById('background-image-div');
            imageEl.src = imgArray[i];
            img.width = "300";
            img.style.margin = "10px"
            container.appendChild(img);
    }
})

module.exports = imgArray;