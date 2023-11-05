const returnFirstTwoDrivers = function(driverNames){
    return driverNames.slice(0, 2)
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(driverNames){
    return driverNames.slice(2, 4)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareMultiplier){
    return function (fare) {
            return fare * fareMultiplier;
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(driverNames, returnDrivers){
    return returnDrivers(driverNames)
}