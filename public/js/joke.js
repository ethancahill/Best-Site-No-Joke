const jokeButton = document.getElementById('jokeButton');


async function getJokeHandler(event) {
    event.preventDefault();

    const response = await fetch('/api/jokes/dadjoke', {
        method: 'GET',
        headers: { 'Content-Type' : 'application/json' }
    })
    .then(res => res.json())
    .then(joke => {
        let jokeBox = document.getElementById('dadJoke');
        jokeBox.innerText = JSON.stringify(joke.joke);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
};


jokeButton.addEventListener('click', getJokeHandler);