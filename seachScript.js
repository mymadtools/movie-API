function onSearchOfMovie(){
    let myMovieSearchName = document.getElementById("mySearchName").value;
    const apiUrl = `https://www.omdbapi.com/?apikey=a02ffa55&s=${myMovieSearchName}&plot=full`;
    if(myMovieSearchName == ""){
        alert("Please Enter Movie name");
    } else{
        fetch(apiUrl)
        .then(response=>response.json())
        .then(moviesData =>{
            console.log(moviesData);
            let movieResponse = moviesData.Response;
            let typeOfVideo = moviesData.Type;
            let totalSeason = moviesData.totalSeasons;
            let movieTitle = moviesData.Title;
            let movieYear = moviesData.Year;
            let movieRated = moviesData.Rated;
            let movieReleased = moviesData.Released;
            let movieRuntime = moviesData.Runtime;
            let movieGenre = moviesData.Genre;
            let movieDirector = moviesData.Director;
            let movieWriter = moviesData.Writer;
            let movieActors = moviesData.Actors;
            let moviePlot = moviesData.Plot;
            let movieLanguage = moviesData.Language;
            let movieCountry = moviesData.Country;
            let movieAwards = moviesData.Awards;
            let moviePoster = moviesData.Poster;
            let movieimdbRating = moviesData.imdbRating;
            let movieBoxOffice = moviesData.BoxOffice;
            const errMessage = "No result available... <br> Search another movie";                                         
            if(movieResponse == "False"){
                document.getElementById("shelf").innerHTML = `<h4>${errMessage}</h4>`;
            } else if(movieResponse == "True") {

                if(typeOfVideo == "movie"){
                    const card = document.createElement("div");

                    let dataCard = `
                                    <div class="container p-2">
                                        <div class="card p-2 bg-light">
                                            <div class="row">
                                                <div>
                                                    <p class="badge bg-danger text-wrap">Movie</p>
                                                </div>    
                                            </div>
                                            <div class="row g-0">
                                                <div class="col-md-2">
                                                    <br>
                                                    <img src="${moviePoster}"
                                                        alt="${movieTitle}" class="card-img-top  border border-dark rounded-2" height="260px"
                                                        width="165px">
                                                </div>
                                                <div class="col-md-10 ">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${movieTitle}</h5>
                                                        <p class="badge bg-danger">${movieRated}</p>
                                                        <p class="badge bg-warning">${movieYear}</p>
                                                        <p class="badge bg-primary">${movieRuntime}</p>
                                                        <p class="badge bg-success">${movieGenre}</p>
                                                        <p class="badge" style="background-color:#f5c518; color:#161202;">IMDb Rating : ${movieimdbRating}</p>
                                                        <p class="badge bg-success">${movieLanguage}</p>
                                                    </div>
                                                    <ul class="list-group flush px-3">
                                                        <li class="list-group-item">Director : ${movieDirector}</li>
                                                        <li class="list-group-item">Writer : ${movieWriter}</li>
                                                        <li class="list-group-item">Actor : ${movieActors}</li>
                                                        <li class="list-group-item">Awards : ${movieAwards}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row g-0">
                                                <div>
                                                    <p class="badge bg-danger text-wrap">Plot</p>
                                                </div>                                                                        
                                            </div>
                                            <div class="row g-0">
                                                <p> ${moviePlot} </p>
                                            </div>
                                            <div class="row g-0">
                                                <div>
                                                    <p class="badge" style="background-color:#222831;">Country : ${movieCountry}</p>
                                                    <p class="badge" style="background-color:#222831;">Release Date : ${movieReleased}</p>
                                                    <p class="badge" style="background-color:#222831;">Box Office : ${movieBoxOffice}</p>
                                                <div>
                                            </div>
                                        </div>
                                    </div>
                                    `
                    document.getElementById("shelf").innerHTML = dataCard;
                } else if(typeOfVideo == "series") {
                    const card = document.createElement("div");
                    document.getElementById("episodeButtons").innerHTML = "";

                    let dataCard = `
                                    <div class="container p-2">
                                        <div class="card p-2 bg-light">
                                            <div class="row">
                                                <div>
                                                    <p class="badge bg-danger text-wrap">Series</p>
                                                </div>
                                            </div>
                                            <div class="row g-0">
                                                <div class="col-md-2">
                                                    <br>
                                                    <img src="${moviePoster}"
                                                        alt="${movieTitle}" class="card-img-top  border border-dark rounded-2" height="260px"
                                                        width="165px">
                                                </div>
                                                <div class="col-md-10 ">
                                                    <div class="card-body">
                                                        <h5 class="card-title">${movieTitle}</h5>
                                                        <p class="badge bg-danger">${movieRated}</p>
                                                        <p class="badge bg-warning">${movieYear}</p>
                                                        <p class="badge bg-primary">${movieRuntime}</p>
                                                        <p class="badge bg-success">${movieGenre}</p>
                                                        <p class="badge" style="background-color:#f5c518; color:#161202;">IMDb Rating : ${movieimdbRating}</p>
                                                        <p class="badge bg-success">${movieLanguage}</p>
                                                    </div>
                                                    <ul class="list-group flush px-3">
                                                        <li class="list-group-item">Seasons : ${totalSeason}</li>
                                                        <li class="list-group-item">Director : ${movieDirector}</li>
                                                        <li class="list-group-item">Writer : ${movieWriter}</li>
                                                        <li class="list-group-item">Actor : ${movieActors}</li>
                                                        <li class="list-group-item">Awards : ${movieAwards}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <br>
                                            <div class="row g-0">
                                                <div>
                                                    <p class="badge bg-danger text-wrap">Plot</p>
                                                </div>                                                                        
                                            </div>
                                            <div class="row g-0">
                                                <p> ${moviePlot} </p>
                                            </div>
                                            <div class="row g-0">
                                                <div>
                                                    <p class="badge" style="background-color:#222831;">Country : ${movieCountry}</p>
                                                    <p class="badge" style="background-color:#222831;">Release Date : ${movieReleased}</p>
                                                <div>
                                            </div>                                
                                        </div>
                                    </div>
                                    `
                    let episodeButtonCard = "";
                    for(let i = 1; i<=totalSeason; i++){

                        fetch(`https://www.omdbapi.com/?apikey=a02ffa55&t=${myMovieSearchName}&Season=${i}`)
                        .then(response=>response.json())
                        .then(moviesData =>{

                            let totalEpisodes = moviesData.Episodes.length;
                            
                            for(let j = 1; j<=totalEpisodes; j++){


                                fetch(`https://www.omdbapi.com/?apikey=a02ffa55&t=${myMovieSearchName}&Season=${i}&Episode=${j}`)
                                .then(response=>response.json())
                                .then(moviesData =>{

                                    let typeOfVideo = moviesData.Type;
                                    let totalSeason = moviesData.totalSeasons;
                                    let movieTitle = moviesData.Title;
                                    let movieYear = moviesData.Year;
                                    let movieRated = moviesData.Rated;
                                    let movieReleased = moviesData.Released;
                                    let movieRuntime = moviesData.Runtime;
                                    let movieGenre = moviesData.Genre;
                                    let movieDirector = moviesData.Director;
                                    let movieWriter = moviesData.Writer;
                                    let movieActors = moviesData.Actors;
                                    let moviePlot = moviesData.Plot;
                                    let movieLanguage = moviesData.Language;
                                    let movieCountry = moviesData.Country;
                                    let movieAwards = moviesData.Awards;
                                    let moviePoster = moviesData.Poster;
                                    let movieimdbRating = moviesData.imdbRating;
                                    let movieBoxOffice = moviesData.BoxOffice;
                                    

                                    episodeButtonCard = `
                                                        <div class="p-2 bg-light" >                                                                    
                                                            <div>                                                            
                                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    Season ${i} Episode ${j}
                                                                </button>
                                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                    <div class="modal-dialog modal-lg modal-dialog-scrollable">
                                                                        <div class="modal-content">
                                                                            <div class="container p-2">
                                                                                <div class=" p-2 bg-light">
                                                                                    <div class="row">
                                                                                        <div>
                                                                                            <p class="badge bg-danger text-wrap">Episode</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row g-0">
                                                                                        <div class="col-md-2">
                                                                                            <br>
                                                                                            <img src="${moviePoster}" alt="${movieTitle}" class="card-img-top  border border-dark rounded-2"
                                                                                                height="260px" width="165px">
                                                                                        </div>
                                                                                        <div class="col-md-10 ">
                                                                                            <div class="card-body">
                                                                                                <h5 class="card-title">${movieTitle}</h5>
                                                                                                <p class="badge bg-danger">${movieRated}</p>
                                                                                                <p class="badge bg-warning">${movieYear}</p>
                                                                                                <p class="badge bg-primary">${movieRuntime}</p>
                                                                                                <p class="badge bg-success">${movieGenre}</p>
                                                                                                <p class="badge" style="background-color:#f5c518; color:#161202;">IMDb Rating : ${movieimdbRating}
                                                                                                </p>
                                                                                                <p class="badge bg-success">${movieLanguage}</p>
                                                                                            </div>
                                                                                            <ul class="list-group flush px-3">
                                                                                                <li class="list-group-item">Seasons : ${totalSeason}</li>
                                                                                                <li class="list-group-item">Director : ${movieDirector}</li>
                                                                                                <li class="list-group-item">Writer : ${movieWriter}</li>
                                                                                                <li class="list-group-item">Actor : ${movieActors}</li>
                                                                                                <li class="list-group-item">Awards : ${movieAwards}</li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <br>
                                                                                    <div class="row g-0">
                                                                                        <div>
                                                                                            <p class="badge bg-danger text-wrap">Plot</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row g-0">
                                                                                        <p> ${moviePlot} </p>
                                                                                    </div>
                                                                                    <div class="row g-0">
                                                                                        <div>
                                                                                            <p class="badge" style="background-color:#222831;">Country : ${movieCountry}</p>
                                                                                            <p class="badge" style="background-color:#222831;">Release Date : ${movieReleased}</p>
                                                                                        <div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>                                            
                                                        `
                                    document.getElementById("episodeButtons").innerHTML+= episodeButtonCard;
                                })






                                
                            }                            
                        })
                    }
                    document.getElementById("shelf").innerHTML = dataCard;
                }                
            }                
        })
    }
}