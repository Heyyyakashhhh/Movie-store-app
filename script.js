// // http://www.omdbapi.com/?i=tt3896198&apikey=242a6b18
// https://omdbapi.com/?s=${searchQuery}&page=1&apikey=242a6b18`;

const searchUrl = "https://omdbapi.com/?s=thor&page=1&apikey=242a6b18";
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const cards = document.querySelector(".cards");
const p = document.querySelector(".b");

//movie show here
const showMovies = async (movieData) => {
  try {
    let data = "";
    movieData.forEach((element) => {
      data += `<div class="card ">
            <img src="${element.Poster}" alt="Movie poster not found">
              <h1 class="movie-title">${element.Title}</h1>
              <p class="movie-type">${element.Year}</p>
              <button> <a href="more.html" onclick= "movieInfo('${element.imdbID}')"  class="btn btn-primary">More info</a></button>
            </div>`;
    });

    cards.innerHTML = data;
  } catch (error) {
    return `<h1>Movie not found</h1>`;
  }
};

//getmmovie fetch the data and send to the shomovies function here
const getMovies = async (api) => {
  try {
    const response = await fetch(api);
    const jsonData = await response.json();
    showMovies(jsonData.Search);
  } catch (error) {
    console.log("getmovie err ", error);
  }
};

//Search using keypressing
searchInput.addEventListener("keyup", function (event) {
  const searchUrl = `https://omdbapi.com/?s=${event.target.value}&page=1&apikey=242a6b18`;
  getMovies(searchUrl); //call the getmovie function
});

const movieInfo = (movieId) => {
  const local = localStorage.setItem("movieId", JSON.stringify(movieId));
  // Attempt to retrieve the movie ID from localStorage
};
