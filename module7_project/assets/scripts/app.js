const addMovieModel = document.getElementById('add-modal');     // best performance
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModel.querySelector('.btn--passive');
const submitAddMovieButton = addMovieModel.querySelector('.btn--success');
const userInput = addMovieModel.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModel = document.getElementById('delete-modal');

const movies = [];


const closeMovieDeletionModel = () => {
    toggleBackdrop();
    deleteMovieModel.classList.remove('visible');
}

const deleteMovieHandler = MovieId => {
    movies.splice(MovieId, 1);
    const movieList = document.getElementById('movie-list');
    movieList.children[MovieId].remove();
    closeMovieDeletionModel()
    updateUI(null);

}

const startDeleteMovie = MovieId => {
    deleteMovieModel.classList.add('visible');
    toggleBackdrop();

    const cancelDeleteMovieButton = deleteMovieModel.querySelector('.btn--passive');
    let submitDeleteMovieButton = deleteMovieModel.querySelector('.btn--danger');

    submitDeleteMovieButton.replaceWith(submitDeleteMovieButton.cloneNode(true));
    submitDeleteMovieButton = deleteMovieModel.querySelector('.btn--danger');

    cancelDeleteMovieButton.removeEventListener('click', closeMovieDeletionModel);
    cancelDeleteMovieButton.addEventListener('click', closeMovieDeletionModel);

    submitDeleteMovieButton.addEventListener('click', deleteMovieHandler.bind(null, MovieId));
}


const closeMovieModal = () => {
    addMovieModel.classList.remove('visible');
}

const showMovieModel = () => {
    addMovieModel.classList.add('visible');
    toggleBackdrop();
};

const updateUI = (movieId) => {
    if (movieId !== null) {
        entryTextSection.style.display = 'none';
        let id = 0;
        for (movie of movies) {
            if (movie.id === movieId) {
                break;
            }
            id++;
        }
        renderNewMovie(movies[id]);
    } else {
        console.log(movieId);
        entryTextSection.style.display = 'block';
    }
}

const renderNewMovie = (movieObject) => {
    const newMovie = document.createElement('li');
    newMovie.className = 'movie-element';
    newMovie.innerHTML = `
        <div class='movie-element__info'>
            <h2> ${movieObject.title} </h2>
            <p> ${movieObject.rating} </p>
        </div>
    `;
    newMovie.addEventListener('click', startDeleteMovie.bind(null, movieObject.id));

    const movieList = document.getElementById('movie-list');
    movieList.append(newMovie);
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModel();
}

const cancelAddMovie = () => {
    closeMovieModal();
    clearUserInput();
    toggleBackdrop();
}

const clearUserInput = () => {
    userInput[0].value = '';
    userInput[1].value = '';
    userInput[2].value = '';
}

const addMovie = () => {
    const title = userInput[0].value;
    const image = userInput[1].value;
    const rating = userInput[2].value;

    if (
        title.trim() === '' ||
        image.trim() === '' ||
        rating.trim() === '' ||
        parseInt(rating) < 1 ||
        parseInt(rating) > 5
    ) {
        alert("Please enter number between 1 and 5");
    } else {
        const newMovie = {
            id: Math.floor(Math.random() * 100),
            title: title,
            image: image,
            rating: rating
        };
        movies.push(newMovie);
        closeMovieModal();
        toggleBackdrop();
        clearUserInput();
        updateUI(newMovie.id);
    }
}



startAddMovieButton.addEventListener('click', showMovieModel);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
submitAddMovieButton.addEventListener('click', addMovie);