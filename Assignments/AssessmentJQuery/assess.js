// const domSeletors = {
//     'albumsBody': '.albums__results',
//     'albumsCards': '.albums__results__body',
//     'albumsHeader': '.albums__results-num'
// }
// const element = document.querySelector(domSeletors.albumsBody);
// const subheader = document.querySelector(domSeletors.albumsHeader);

//let albums = []
let inputBox = document.getElementById("searchinput")
let albumsToHTML =[];

const $$ = (selector) => {
    return new JQuery(selector)
}
class JQuery {
    constructor(selector) {
        this.elements = document.querySelector(selector);
    }
    blank(){
        return this.elements.innerHTML=""
    }
    val() {
        return this.elements.value
    }
    show() {
        
        return this.elements.style.display="block"
    }
    write(input){
        
        return this.elements.innerHTML += input
    }
    ajax(textInput) {
        return fetch(`https://itunes.apple.com/search?term=${textInput}&media=music&entity=album&attribute=artistTerm&limit=200`)
        .then(response => response.json())
    }
}

function renderAlbums(albums){
    let searchText=document.getElementById("searchinput").value

    //element.innerHTML="";
    $$(".albums__results").blank()
    // element.innerHTML=`<h2 class="albums__results-num">${albums.resultCount} results for ${searchText}</h2>
    // <img src="loading.gif" id="spinner" style="display:none">
    // <hr>
    // <div class="albums__results__body"></div>`;
    let template = `<h2 class="albums__results-num">${albums.resultCount} results for ${searchText}</h2>
                    <img src="loading.gif" id="spinner" style="display:none">
                    <hr>
                    <div class="albums__results__body"></div>` 
    $$(".albums__results").write(template)
        
    //document.getElementById("spinner").style.display="none"
    //const subelement = document.querySelector(domSeletors.albumsCards)
    
    
    for(let i=0; i<albums.results.length; i++)
    {
        albumsToHTML[i] = generateAlbumItem(albums.results[i])
        // subelement.innerHTML+=albumsToHTML[i]
    }
    print20Results()
}

function generateAlbumItem(entry){
    return `<div class="albums__results__body__card">
        <img class="albumCover" src="${entry.artworkUrl100}">
        <div class="albumName">${entry.collectionName}</div>
        </div>`
}

function print20Results(){
    
    for(let i=0; i<20; i++){
        //subelement.innerHTML+=albumsToHTML.shift()
        $$(".albums__results__body").write(albumsToHTML.shift())
    }
}

function addMoreResults(){
    //const subelement = document.querySelector(domSeletors.albumsCards)
    if(albumsToHTML.length===0){
        alert("End of results")
    }
    else if(albumsToHTML.length<20){
        let temp = albumsToHTML.length
        for(let i=0; i<temp; i++){
            //subelement.innerHTML+=albumsToHTML.shift()
            $$(".albums__results__body").write(albumsToHTML.shift())
        }
    }
    else{
        print20Results()
    }
}



function getAlbums() {
    //let searchText=document.getElementById("searchinput").value
    let searchText = $$('#searchinput').val()
    return $$().ajax(searchText)
    // return fetch(`https://itunes.apple.com/search?term=${searchText}&media=music&entity=album&attribute=artistTerm&limit=200`)
    //     .then(response => response.json())
}


inputBox.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        inputReceived(e);
    }
});

// inputBox.addEventListener("keydown", setTimeout(function() {
//     inputReceived()},3000))

function inputReceived(){
    //let searchText=document.getElementById("searchinput").value
    //if(searchText){
        if($$('#searchinput').val()){
        changeToSpinner();
        isValidInput();
    }
    else{
        alert("Invalid Text Entry")
    }
}

function changeToSpinner(){
    //const subheader = document.querySelector(domSeletors.albumsHeader);
    //subheader.innerHTML="";
    $$(".albums__results-num").blank()
    //document.getElementById("spinner").style.display="block"
    $$("#spinner").show()
}

function isValidInput(){
    getAlbums().then(albumsData => {
        albums = albumsData;
        renderAlbums(albums);
    })
}


