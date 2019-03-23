function is_palindrom(pal) {
    last=pal.length-1;
    if(last<1) {
        return true
    } else {
        if(pal[0] == pal[last]) {
            return is_palindrom(pal.substring(1, last))
        } else {
            return false
        }

    }
}

console.log(is_palindrom("фыввыф"))