const domSeletors = {
    'container': '.container',
    'navigation': '.navbtn'
}
let movies = []
let leftbutton = `<div class="navbtn">
    <button class="leftbtn" onclick="previousMovie()">&lt;</button>
    </div>`;
let rightbutton = `<div class="navbtn">
    <button class="rightbtn" onclick="nextMovie()">&gt;</button>
    </div>`;


function getMovies() {
    return fetch('http://localhost:3000/movies')
        .then(response => response.json())
}
function renderMovies(movies) {
    const tmp = generateMovieList(movies); //convert movies to array of html code
    render(tmp)
}
function generateMovieList(movies) {
    for(let i=0; i<movies.length; i++)
    {
        movies[i] = generateMovieItem(movies[i])
    }
    return movies;
}
function generateMovieItem(movie) {
    return `<div id="movie-${movie.id}" class="movie-container">
        <img src="${movie.imgUrl}">
        <div class="name">${movie.name}</div>
        <div class="outline">${movie.outlineInfo}</div>`
}
function render(template) {
    const element = document.querySelector(domSeletors.container);
    element.innerHTML="";   //set page to blank before changing
    element.innerHTML+=leftbutton;
    for(let i=0; i<4; i++){
        element.innerHTML += template[i];
    }
    element.innerHTML+=rightbutton;
    
    checkButtons(movies);
}

function checkButtons(movies){
    const navClass = document.querySelector(domSeletors.navigation);
    if(movies[0].substring(15,16)==="1"){
        navClass.getElementsByClassName("leftbtn")[0].style.display="none"
    }
    else if(movies[3].substring(15,16)==="9"){
        document.getElementsByClassName("rightbtn")[0].style.display="none"
    }
}

// Check if right or left nav arrow should be hidden
function previousMovie(){
    let temp = movies.pop(); //let temp = first item in array
    movies.unshift(temp);
    render(movies)
}
function nextMovie(){
    let temp = movies.shift(); //let temp = last item in array
    movies.push(temp);
    render(movies)
}

/// init
getMovies().then(moviesData => {
    movies = moviesData;
    renderMovies(movies);
})