// * Create an object that describes a car (manufacturer, model, year of production, average speed, fuel tank volume, average fuel consumption per 100 km, drivers),
const carInfo = {
    manufacturer: 'Infinity',
    model: 'Q60',
    yearOfBuild: '2017',
    middleSpeed: 120,
    volumeFuelTank: 60,
    fuelConsuption: 9.3, 
    driverName: 'Kostya',
};
// Notification car info by alert
const showCarInfo = alert(
  `
  Manufacturer: ${carInfo.manufacturer}
  Model: ${carInfo.model}
  Driver name: ${carInfo.driverName}
  Year of build: ${carInfo.yearOfBuild}
  Middle speed: ${carInfo.middleSpeed}
  Volume Fuel Tank: ${carInfo.volumeFuelTank}
  Fuel consuption: ${carInfo.fuelConsuption}
  `
)
// function for add new driver
newDriver = (newDriver) => carInfo.newDriver = newDriver;
// Add new driver
newDriver("Dmitry");

// * Task 2 - Create an object that describes time (hours, minutes, seconds)
const date = new Date();
// Object with separeted time
const time = {
  hours: date.getHours(),
  minutes: date.getMinutes(),
  second: date.getSeconds(),
};
// Notification time by alert
const showTime = () => {
  alert(time.hours + ":" + time.minutes + ":" + time.second);
};
// For check result 
/* showTime() */
// Variables for ask user how much hours/min/sec he want to add
const newHours = prompt('Add new hours');
const newMinutes = prompt('Add new minutes');
const newSecond = prompt('Add new second');
// Add users result to current time
date.setHours(
  date.getHours() + newHours,
  date.getMinutes() + newMinutes,
  date.getSeconds() + newSecond,
);
// Notification 
alert(date);
console.log(date)

