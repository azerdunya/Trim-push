function trim(string) {
    let newWord = ""
    let Start = 0;
    let End = string.length-1;
    while(Start < string.length && string[Start] === " " ) {
        Start ++;
    }
    while(End <= 0 && string[End] === " " ) {
        End ++;
    }

    for (let i = Start; i <= End; i++) {
        newWord += string[i]
    }
    return newWord
}

console.log(trim("   azer    "));