const saveButton = document.getElementById('save');
// const jokeBox = document.getElementById('joke-id');
// const picture = document.getElementById('background-image-div');


async function saveFormHandler(event) {
    event.preventDefault();
    console.log('clicked');
    var image = document.getElementById('background-image').src;
    var dad_joke = document.getElementById('joke-id').textContent;


    const response = await fetch('/api/jokes', {
        method: 'post',
        body: JSON.stringify({
            dad_joke,
            image,
        }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        alert('Joke/Image saved successfully')
    } else {
        alert('Failed to save joke.');
    }
};


saveButton.addEventListener('click', saveFormHandler);