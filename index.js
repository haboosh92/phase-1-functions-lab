// Code your solution in this file!

function   distanceFromHqInBlocks(pickupLocation){
    const scuberHeadquarters = 42;
    if(pickupLocation>42)
    return(pickupLocation-scuberHeadquarters);
    else return(scuberHeadquarters-pickupLocation);
}

function distanceFromHqInFeet(d) {
    const m = 264 * distanceFromHqInBlocks(d);
    return(m);
}

function distanceTravelledInFeet(start, destination){
   if(start>destination){
    const dInFeet= (start-destination)*264;
    return dInFeet;
    }
    else if(destination>start){
        const dInFeet= (destination-start)*264;
        return dInFeet;
    }
}
function calculatesFarePrice(start, destination){
    const calculate = distanceTravelledInFeet(start, destination);
    if(calculate<400)
    return 0;
    else if(calculate>400 && calculate<2000)
    return ((calculate-400)*0.02);
    else if(calculate>2000 && calculate<2500)
    return 25;
    else if (calculate>2500)
    return 'cannot travel that far';
}