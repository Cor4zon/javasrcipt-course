const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const inputTitle = document.getElementById('title');
const inputExtraName = document.getElementById('extra-name');
const inputExtraValue = document.getElementById('extra-value');
const movieList = document.getElementById('movie-list');

const movies = [];

const renderMovieList = (filterTitle='') => {
  if (!movies.length) {
    movieList.classList.remove('visible');
    return ;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';
  const filteredMovies = !filterTitle ? movies : movies.filter(movie => filterTitle === movie.info.title);

  filteredMovies.forEach(movie => {
    const movieElement = document.createElement('li');
    const { info } = movie;

    movieElement.textContent = movie.getFormattedTitle() + ' – ';
    for (const key in info) {
      if (key !== 'title') {
        movieElement.textContent += `${key}: ${info[key]}`;
      }
    }
    movieList.append(movieElement);
  })
}

const addMovieHandler = () => {
  const title = inputTitle.value;
  const extraName = inputExtraName.value;
  const extraValue = inputExtraValue.value;

  if (
      title.trim() === '' ||
      extraName.trim() === '' ||
      extraValue.trim() === '') {
    alert('incorrect input');
    return ;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.floor(Math.random() * 100),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    }
  }

  movies.push(newMovie);
  renderMovieList();
}

const SearchHandler = () => {
  const inputFilterTitle = document.getElementById('filter-title');
  const filterTitle = inputFilterTitle.value;
  renderMovieList(filterTitle);
}


addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', SearchHandler);