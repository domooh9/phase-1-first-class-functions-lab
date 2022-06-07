const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
    let driverOne = [];
    for(let i = 0; i < 2; i++){
        driverOne.push(drivers[i]);
    }

    return driverOne;
}

const returnLastTwoDrivers = (drivers) => { 
    let driverTwo = [];
    for (let i = 2; i > 0 ; i--){
        driverTwo.push(drivers[drivers.length - i])
    }
    return driverTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = fare => function fareMultiplier(m){
    return fare * m
}

const fareQuintupler = (fare) =>  fare * 5;

const fareDoubler = (fare) => {
    return fare * 2;
}

const fareTripler = (fare) => fare * 3;


const selectDifferentDrivers = (drivers, myFunc) => {
    return myFunc(drivers);
}