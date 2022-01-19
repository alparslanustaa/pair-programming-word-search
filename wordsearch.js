const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const verticalJoin = letters.map(ls => ls.join(''))
    for (i of verticalJoin) {
        if(i.includes(word)) return true;
    }
    return false;
};

module.exports = wordSearch

