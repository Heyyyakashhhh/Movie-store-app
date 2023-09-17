const storedMovieId = localStorage.getItem("movieId");
const movieId = JSON.parse(storedMovieId);
const mainDetails = document.querySelector(".mainDetails");

//Display on Hmtl page
const shomovies = async (movies) => {
  try {
    mainDetails.innerHTML = `<div class="col-md-5 mt-3" >
    <h1 class="movie-title display-1 text-wa">${movies.Title}</h1>
    <p><strong>Year:</strong> ${movies.Year} <strong><i class="fa-solid fa-star" style="color: #f3e335;"></i></strong> ${movies.imdbRating}</p>
    <p><strong>Genre:</strong>${movies.Genre}</p>
    <p><strong>Writer:</strong> ${movies.Writer}</p>
    <p><strong>Cast:</strong>
    ${movies.Actors}</</p>
        <p><strong>Plot:</strong> ${movies.Plot}</</p>
        <p><strong class="text-warning"><i>Languages: </i></strong>${movies.Language}</</p>
        <div class="navButton d-flex gap-5 justify-content-sm-center justify-content-lg-start ">
        <button type="button" class="btn btn-outline-danger fav-btn" onclick="favourite('${movies.Poster}', '${movies.Title}')">Add to favourite</button>


      
        </div>
      
    </div>
    <div class="col-md-5 mt-5 d-flex justify-content-center">
        <img class="img-fluid mx-sm-auto" src="${movies.Poster}" style="width: 300px;" alt="Movie poster">
    </div>
</div>`;
  } catch (err) {
    console.log(err);
  }
};

//get movie via API
const getMovies = async () => {
  try {
    const url = await fetch(
      `http://www.omdbapi.com/?i=${movieId}&apikey=242a6b18`
    );
    const res = await url.json();

    shomovies(res);
  } catch (error) {
    console.log("more info ", error);
  }
};

//favourite movie function fire here
const favourite = (moviesPoster, moviesTitle) => {
  document.querySelector(".fav-btn").innerHTML = "Added to favourite";
  let data = JSON.parse(localStorage.getItem("favorites")) || []; // Get the current favorites or create an empty array
  data.push({ poster: moviesPoster, title: moviesTitle }); // Push the new movie data
  localStorage.setItem("favorites", JSON.stringify(data));
};

getMovies();
