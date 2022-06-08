generateGallery = () => {
  fetch("/api/jokes")
    .then((response) => response.json())
    .then((jokes) => {
      const galleryWall = document.getElementById("gallery-wall");
      jokes.forEach((joke) => {
        galleryWall.insertAdjacentHTML(
          "afterbegin",
          `
            <div class='joke-box'>
            <img src='${joke.image}'>
            <p>'${joke.dad_joke}'</p>
            </div>
            `
        );
      });
    });
};
generateGallery();
