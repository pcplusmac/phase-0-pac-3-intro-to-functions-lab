function shout(a) {
    let str= a.toUpperCase();
    return str;

}

function whisper(string){
    return(string.toLowerCase());
}

function logShout(string){
    const spy = string.toUpperCase();
    console.log(spy);

}

function logWhisper(string){
    const spy = string.toLowerCase();
    console.log(spy);

}