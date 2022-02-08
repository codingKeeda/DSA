const string = 'Hi My Name Is Avinash';
reverseString = (str) => {
  if (!str || str.length < 2 || typeof str !== 'string' ) {
    return "that's bad input";
  }
  return str.split('').reverse().join('');
}
const reverseSt = (str) => [...str].reverse().join('');
console.log(reverseSt(string));