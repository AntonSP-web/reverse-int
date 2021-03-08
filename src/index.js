module.exports = function reverse (n) {
    n = Math.abs(n);
    let str = String(n);
    let arr = str.split('');
    let myNum = +(arr.reverse().join(''));
    return myNum;
}
