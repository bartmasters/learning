function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;

  arr.forEach(element => {
    let name = element.name;
    let avgAlt = element.avgAlt;

    let numerator = Math.pow(earthRadius + avgAlt, 3);
    let divisor = numerator / GM;
    let result = Math.round(2 * Math.PI * Math.sqrt(divisor));
    element.orbitalPeriod = result;
    delete element.avgAlt;
  });

  return arr;
}

let bob = orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
let bob2 = orbitalPeriod([
  { name: 'iss', avgAlt: 413.6 },
  { name: 'hubble', avgAlt: 556.7 },
  { name: 'moon', avgAlt: 378632.553 }
]);
console.log(bob);
