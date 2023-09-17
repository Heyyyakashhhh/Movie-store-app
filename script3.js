const favList = document.querySelector(".fav-cards");

const displayFavorites = async () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));

  try {
    if (favorites) {
      // Create a string to hold the HTML content
      let html = "";

      favorites.forEach((favorite, index) => {
        // Build the HTML for each favorite movie
        html += `
         
            <div class="card mt-5">
              <div class="card-body">
                <img class="img-fluid" src="${favorite.poster}" width="20px" alt="Moive poster">
                <h5 class="card-title">${favorite.title}</h5>
                <p class="card-text">Your Favourite Movie</p>
                <a href="#" class="btn btn-primary" onclick="removeFavMovie(${index})">Remove Favourite</a>
              </div>
          
          </div>`;
      });

      // Set the innerHTML of the favList element
      favList.innerHTML = html;
    } else {
      // If no favorites found in localStorage, set an appropriate message
      favList.innerHTML = "No favorites found.";
    }
  } catch (err) {
    console.log("error in favlist movie list area", err);
  }
};

const removeFavMovie = (index) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (index >= 0 && index < favorites.length) {
    // Remove the movie at the specified index
    favorites.splice(index, 1);

    // Save the updated favorites back to localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // Update the displayed favorites
    displayFavorites();
  }
};

// Call displayFavorites to populate favList with the HTML
displayFavorites();
