function push(string) {
    let newWord = ""
    for (let i = 0; i < string.length; i++) {
        newWord += string[i];
    }
    return newWord
}

console.log(push("salam"));