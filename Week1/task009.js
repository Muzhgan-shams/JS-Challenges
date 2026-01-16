// Convert total seconds into hours, minutes, and seconds
// Description: Convert a given number of seconds into hours, minutes, and seconds format.
// 1 hour is 60 minutes and 3600 seconds

function formatSeconds(totalSeconds) {
  if (totalSeconds < 0) {
    return "Please enter a valid number";
  }
  {
    let hours = Math.floor(
      totalSeconds / 3600
    ); /* In time, age, and progress, we only care about completed units.Math.floor(): Always rounds down. It chops off the decimal */
    let remainingSeconds = totalSeconds % 3600;
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;
    return `It is ${hours} hr, ${minutes} min, ${seconds} sec`;
  }
}
console.log(formatSeconds(24466));
