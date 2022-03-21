// Filter
Array.prototype.filter = function(cb) {
    const result = []
    for(let i=0; i<this.length; i++){
        if(cb(this[i])){
            result.push(this[i])
        }
    }
    return result;
}
const words = ['spray', 'limit', 'elite', 'exhuberant','destruction', 'present'];
console.log(words.filter(word => word.length > 6))

// Reduce
Array.prototype.reduce = function(cb) {
    let result = 0;
    for(let i=0; i<this.length; i++){
        result+=this[i];
    }
    return result;
}
const array1 = [1, 2, 3, 4]; //1+2+3+4=10
console.log(array1.reduce(array1))

// Every
Array.prototype.every = function(cb) {
    let result = true;
    for(let i = 0; i<this.length; i++){
        if(cb(this[i])){} //Do nothing if true
        else{
            result = false;
        }
    }
    return result;
}
const array2 = [1, 30, 39, 29, 10, 13];
console.log(array2.every(arr => arr < 40));

// Some

Array.prototype.some = function(cb) {
    let result = false;
    for(let i = 0; i<this.length; i++){
        if(cb(this[i])){
            result = true;
        }
    }
    return result;
}
const array3 = [1, 30, 39, 29, 10, 13];
console.log(array3.some(arr => arr === 39));