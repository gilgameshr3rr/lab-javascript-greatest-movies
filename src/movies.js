// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map(element => element.director);;
}  
console.log(getAllDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(element => element.genre.includes('Drama') && element.director === 'Steven Spielberg'
  ).length;
}
console.log(howManyMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;  
  }


  let allScores = movies.map((movie) => movie.score ? movie.score : 0);
  let avg = allScores.reduce((total, current) => total + current) / movies.length;
  return parseFloat(avg.toFixed(2));
  
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMovies = moviesArr.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  
  return scoresAverage(dramaMovies);  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
  return moviesArr
  .map(function (movie) {
    return movie;
  })
  .sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }

    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {
  const onlyTitles = moviesArr.map(function (movie) {
    return movie.title;
  });

  onlyTitles.sort(function (a, b) {
    return a.localeCompare(b);
  });

  const top20 = onlyTitles.splice(0, 20);

  return top20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
