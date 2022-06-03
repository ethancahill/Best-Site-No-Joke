const jokeButton = document.getElementById('jokeButton');


jokeButton.addEventListener('click', function() {
    fetch('/api/jokes/dadjoke', {
        method: 'GET'
    })
    .then(res => res.json())
    .then(joke => {
        let jokeBox = document.getElementById('joke-id');
        jokeBox.innerText = JSON.stringify(joke);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});