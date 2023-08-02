let car1 = {
    manufacturer: "Mazda",
    model: "6",
    year: "2021",
    averageSpeed: "120"
}
let car2 = {
    manufacturer: "Volkswagen",
    model: "passat",
    year: "2023",
    averageSpeed: "55"
}

console.log(car1, car2)

function calculateTravelTime(distance, averageSpeed) {
    const breakEveryHours = 4;
    const breakDuration = 1;

    const timeWithoutBreaks = distance / averageSpeed;
   
    const numberOfBreaks = Math.floor(timeWithoutBreaks / breakEveryHours);
    
    const totalBreakTime = numberOfBreaks * breakDuration;

    const totalTimeWithBreaks = timeWithoutBreaks + totalBreakTime;

    return totalTimeWithBreaks;
}

let distance1 = 500
let time1 =  calculateTravelTime(distance1, car1.averageSpeed)
console.log(time1)
