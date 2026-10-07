const movies = [];

const numberOfMovies = Number(
  prompt("How many movies do you want to rate?")
);


for (let i = 0; i < numberOfMovies; i++) {

  const title = prompt(`Enter the title of movie ${i + 1}:`);

  const rating = Number(
    prompt(`Enter the rating for ${title} (1-5):`)
  );

  const movie = {
    title: title,
    rating: rating
  };

  movies.push(movie);
}


movies.sort((a, b) => b.rating - a.rating);


const highestRatedMovie = movies[0];


const result = document.querySelector("#result");

let movieList = "";

for (const movie of movies) {

  movieList += `
    <li>${movie.title} - Rating: ${movie.rating}</li>
  `;
}


result.innerHTML = `
  <h2>Movies Sorted by Rating</h2>

  <ul>
    ${movieList}
  </ul>

  <h2>Highest-Rated Movie</h2>

  <p>
    ${highestRatedMovie.title} - Rating: ${highestRatedMovie.rating}
  </p>
`;