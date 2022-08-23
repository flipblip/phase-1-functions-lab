function distanceFromHqInBlocks(pickupLocation){
    let distanceFromHq;
    if (pickupLocation > 42){
        distanceFromHq = pickupLocation - 42;
        return distanceFromHq;
    } else {
        distanceFromHq = 42 - pickupLocation;
        return distanceFromHq;
    }
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startBlock, destinationBlock){
    let distance;
    if (destinationBlock > 42){
        distance = (destinationBlock - startBlock) * 264;
        return distance;
    } else {
        distance = (startBlock - destinationBlock) * 264;
        return distance;
    }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    // let price;
    
    if (distance <= 400){
        return 0;
    } else if (distance >= 400 && distance <=  2000){
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else if (distance > 2500){
        return 'cannot travel that far';
    }
}
