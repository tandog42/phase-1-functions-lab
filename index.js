
function distanceFromHqInBlocks (destination) {
    if(destination >= 42) {
    return destination - 42 }
    {
   if(destination < 42) {
    return 42 - destination; }
    }
 }
 function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    }
    
    function distanceTravelledInFeet(start, destination) {
       return Math.abs ((destination - start)* 264)
}

 function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination) 
    if(distance - start <= 400 )
     { return 0 }
 if(distance <= 2000)
{
return(distance - 400) * 0.02 }

else if (distance <= 2500)
   
  { return 25 }

else
   
   { return 'cannot travel that far' }
}
