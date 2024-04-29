let salaries = { Jarik: 2000, Anna: 2000, Mika: 3000 };
let sum = 0;
for (let salary in salaries) {
  sum += salaries[salary];
}
console.log(sum);

function multiplyNumeric(obj) {
  for (let salary in obj) {
    if (typeof obj[salary] === 'numeric') {
      obj[salary] *= 2;
    }
  }
}
multiplyNumeric(salaries);
console.log('object after multiplication', salaries)