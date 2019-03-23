function is_palindrom(pal) {
    last=pal.length-1;
    if(last<1) {
        return true
    } else {
        firscode=pal.charCodeAt(0);
        lastcode=pal.charCodeAt(last);
        if(firscode<65 || (firscode>90 && firscode<97) || (firscode>123 && firscode<191)) {
            return is_palindrom(pal.substring(1))
        } else if(lastcode<65 || (lastcode>90 && lastcode<97) || (lastcode>123 && lastcode<191)) {
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