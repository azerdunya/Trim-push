function unshift(string,unshiftWord) {
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        newString += string[i];
    }
    newString -= unshiftWord
    return newString
}

console.log(unshift("salam","Azer"));