setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);
setTimeout(() => {
  process.stdout.write('\r/  he  ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-  hel  ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  hell  ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|  hello  ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/  hello f  ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-  hello fr  ');
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  hell fro  ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|  hello from  ');
}, 1700);
setTimeout(() => {
  process.stdout.write('\r/  hello from s  ');
}, 1900);

setTimeout(() => {
  process.stdout.write('\r-  hello from sp  ');
}, 2100);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  hello from spi  ');
}, 2300);

setTimeout(() => {
  process.stdout.write('\r|  hello from spinn ');
}, 2500);
setTimeout(() => {
  process.stdout.write('\r/  hello from spinne ');
}, 2700);

setTimeout(() => {
  process.stdout.write('\r-  hello from spinner  ');
}, 2900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  hello from spinner1  ');
}, 3100);
setTimeout(() => {
  process.stdout.write('\r|  hello from spinner1. ');
}, 3300);
setTimeout(() => {
  process.stdout.write('\r/  hello from spinner1.j  ');
}, 3500);

setTimeout(() => {
  process.stdout.write('\r-  hello from spinner1.js  ');
}, 3700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  hello from spinner1.js.  ');
}, 3900);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r->  hello from spinner1.js...  \r\n');
}, 4100);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r->   \r\n');
}, 4300);

module.exports = spinner1; //