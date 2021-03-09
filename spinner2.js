const sentence = "hello there from lighthouse labs";

const P = ["\\  ", "|  ", "/  ", "-  "];
let x = 0;
const spinner = setInterval(() => {
  process.stdout.write("\r" + P[x++]);
  x % P.length;
}, 250);


// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write(sentence + '\r\n');
// }, 100);
setTimeout(() => {
  clearInterval(spinner);
}, 10000);


// for (let i = 0; i < sentence.length; i++) {

//   setTimeout(() => {
//     process.stdout.write('\r|  ' + sentence[i]);
//   }, 100 * i);

//   setTimeout(() => {
//     process.stdout.write('\r/  ' + sentence[i + 1]);
//   }, 100 * (i + 1));

//   setTimeout(() => {
//     process.stdout.write('\r-  ' + sentence[i + 2]);
//   }, 100 * (i + 2));

//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\ ' + sentence[i + 3]);
//   }, 100 * (i + 3));
// }

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\  ' + sentence + '\r\n');
// }, 3000);