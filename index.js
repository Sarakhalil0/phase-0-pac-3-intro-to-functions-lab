function shout(string) {
    return string.toUpperCase()
}
function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log(string.toUpperCase())
}// we make it lower case by toLowerCase()

function logWhisper(string) {
    console.log(string.toLowerCase())
}
//we can use if else inside functio
function sayHiToHeadphonedRoommate(string) {
    if (string === 'hello')
        return "I can\'t hear you!"
    else if (string === 'HELLO')
        return "YES INDEED!"
    else (string === "Let's have dinner together!")
    return "I would love to!"
}