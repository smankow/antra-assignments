const domSeletors = {
    'albumsBody': '.albums__results',
    'albumsCards': '.albums__results__body',
    'albumsHeader': '.albums__results-num'
}
const element = document.querySelector(domSeletors.albumsBody);
const subheader = document.querySelector(domSeletors.albumsHeader);

let albums = []
let inputBox = document.getElementById("searchinput")

function renderAlbums(albums){
    let searchText=document.getElementById("searchinput").value

    element.innerHTML="";
    element.innerHTML=`<h2 class="albums__results-num">${albums.resultCount} results for ${searchText}</h2>
    <img src="loading.gif" id="spinner" style="display:none">
    <hr>
    <div class="albums__results__body"></div>`; 
    //document.getElementById("spinner").style.display="none"
    const subelement = document.querySelector(domSeletors.albumsCards)
    
    let albumsToHTML = [];
    for(let i=0; i<albums.results.length; i++)
    {
        albumsToHTML[i] = generateAlbumItem(albums.results[i])
        subelement.innerHTML+=albumsToHTML[i]
    }
}

function generateAlbumItem(entry){
    return `<div class="albums__results__body__card">
        <img class="albumCover" src="${entry.artworkUrl100}">
        <div class="albumName">${entry.collectionName}</div>
        </div>`
}

function getAlbums() {
    let searchText=document.getElementById("searchinput").value
    
    return fetch(`https://itunes.apple.com/search?term=${searchText}&media=music&entity=album&attribute=artistTerm&limit=200`)
        .then(response => response.json())
}


inputBox.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        inputReceived(e);
    }
});

function inputReceived(){
    let searchText=document.getElementById("searchinput").value
    if(searchText){
        changeToSpinner();
        isValidInput();
    }
    else{
        alert("Invalid Text Entry")
    }
}

function changeToSpinner(){
    const subheader = document.querySelector(domSeletors.albumsHeader);
    subheader.innerHTML="";
    document.getElementById("spinner").style.display="block"
}
function isValidInput(){
    getAlbums().then(albumsData => {
        albums = albumsData;
        renderAlbums(albums);
    })
}