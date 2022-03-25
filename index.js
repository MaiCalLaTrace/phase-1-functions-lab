// Code your solution in this file!

const blocks = 42 
function  distanceFromHqInBlocks(street){
    return Math.abs(blocks - street)
}   
function  distanceFromHqInFeet(street){
    return Math.abs((blocks - street) * 264)
}
function  distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264)
}


 function calculatesFarePrice(start, destination){
    let distanceInFeet;
    if (start < destination){
        distanceInFeet = ((destination - start) * 264)
    } else {
        distanceInFeet = ((start - destination) * 264)
    }
const distanceFare = (distanceInFeet);
if (distanceFare <= 400) {
    return 0 
}
else if (distanceFare > 400 && distanceFare <= 2000){
    return ((distanceFare - 400)* 0.02)
}
else if (distanceFare > 2000 && distanceFare <= 2500){
    return 25
}
else if (distanceFare > 2500){
    return "cannot travel that far"

}
}