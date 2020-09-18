function renderMovies(movieArray) {
var hell = movieArray.map(currentmovie => {
    return `<div id="movie${currentmovie.imdbID}" style="width:30%; background-color:cornflowerblue; color:cornsilk; margin: 10px; padding: 5px">
    <img style="width:100%" src = ${currentmovie.Poster}>
    <h2>${currentmovie.Title}</h2>
    <h3>${currentmovie.Year}</h3>
    <button id="add" onclick="saveToWatchlist('${currentmovie.imdbID}')" style="border-radius:50px; background-color: darkgoldenrod; color:blue">Add Movie</button></div>`;
});
return hell.join();
}

function saveToWatchlist(currentmovieimbd) {
    console.log(currentmovieimbd);
    }
    window.addEventListener('DOMContentLoaded', function() {
    
    var cinemaDiv = document.querySelector("#movies-container");
    //var movieDiv = document.querySelector('#movie');
    //var poster = document.querySelector('#poster');

    const myForm = document.getElementById('search-form')
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        cinemaDiv.innerHTML = renderMovies(movieData);
        renderMovies(movieData);
    });
})






//         var hell = movieArray.map(currentmovie => {
// //if(search.includes(currentmovie.Title) {
//               return `<div id ="movie${currentmovie.imdbID} `
            
//         })
//     });
// });

//needs: full website => database, log in, new company, no less than 3 pages and 1 must be product page, 1 must be about me page, some shade of red