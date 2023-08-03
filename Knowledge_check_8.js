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