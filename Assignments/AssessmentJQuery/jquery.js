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