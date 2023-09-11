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

function sayHiToHeadphonedRoommate(string){
    
    const upstr = string.toUpperCase();
    const lwstr = string.toLowerCase();
    let msg;

    if (string === lwstr) {
        msg = "I can't hear you!";
    }
    else if (string === upstr) {
        msg = "YES INDEED!";
    }
    else if (string === "Let's have dinner together!") {
        msg = "I would love to!";
    }
    else {
        return;
    }

    return msg;
 
}