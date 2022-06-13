function shout(string){
    return string.toUpperCase();
}


function whisper(string){
    return string.toLowerCase();
}


function logShout(string){
    console.log(shout(string)
    )}


function logWhisper(string){
    console.log(whisper(string))
}

function sayHiToHeadphonedRoommate(string){
    if (string === whisper(string)){
        return "I can\'t hear you!"
    }
    if (string ===  shout(string)){
        return "YES INDEED!"
    }
    if (string === "Let's have dinner together!"){
        return "I would love to!"
    }
}
