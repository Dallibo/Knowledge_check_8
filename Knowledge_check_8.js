let car1 = {
    manufacturer:"Mazda",
    model:"3",
    year:"2023",
    speed:"65"
}
let car2 = {
    manufacturer:"Mercedes",
    model:"E-class",
    year:"2020",
    speed:"30"
}

console.log(car1,car2)

function calculateTravelTime(distance, speed){
    const pause = 1
    const pauseH = 4
    const avgSpeedNoPuuse = distance / speed 
    const pauseInHour = Math.floor(avgSpeedNoPuuse/pauseH)
    const pause1 = pauseInHour * pause
    const avgSpeed = avgSpeedNoPuuse + pause1
    return avgSpeed
}
let distanceToTravel = 300
const timeCar1 = calculateTravelTime(distanceToTravel, car1.speed)
const timeCar2 = calculateTravelTime(distanceToTravel, car2.speed)
console.log(timeCar1)
console.log(timeCar2)

const Fraction = {
    create(numerator, denominator) {
      return { numerator, denominator };
    },
  
    add(fraction1, fraction2) {
      const commonDenominator = fraction1.denominator * fraction2.denominator;
      const newNumerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
      return this.create(newNumerator, commonDenominator);
    },
  
    gcd(a, b) {
      return b === 0 ? a : this.gcd(b, a % b);
    },
  
    simplify(fraction) {
      const gcd = this.gcd(fraction.numerator, fraction.denominator);
      fraction.numerator /= gcd;
      fraction.denominator /= gcd;
    },
  
    toString(fraction) {
      return `${fraction.numerator}/${fraction.denominator}`;
    },
  };2
  
  const fraction1 = Fraction.create(1, 6);
  const fraction2 = Fraction.create(1, 5);
  
  const result = Fraction.add(fraction1, fraction2);
  Fraction.simplify(result);
  console.log(Fraction.toString(result));