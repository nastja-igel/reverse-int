module.exports = function reverse (n) {
    string = n.toString().replace(/-/g,'');
    return [...string].reverse().join('');
}