function mark(char) {
    if(char<"A" || (char>"Z" && char<"a") || (char>"z" && char<"À")) {
        return true
    } else {
        return false
    }
}
function is_palindrom(pal) {
    last=pal.length-1;
    if(last<1) {
        return true
    } else {
        if(mark(pal[0])) {
            return is_palindrom(pal.substring(1))
        } else if(mark(pal[last])) {
            return is_palindrom(pal.substring(0, last))
        } else {
            if(pal[0].toLowerCase() == pal[last].toLowerCase()) {
                return is_palindrom(pal.substring(1, last))
            } else {
                return false
            }
        }
    }
}

console.log(is_palindrom("ёА роза! упала, На -- лапу:      АзораЁ"))