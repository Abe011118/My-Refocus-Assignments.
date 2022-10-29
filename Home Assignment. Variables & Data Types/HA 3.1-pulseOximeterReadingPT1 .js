// Task 1. Pulse oximeter reading (part 1)
// You are asked to develop a JavaScript app compatible with smartwatches. You use
// the sensor data of its pulse oximeter to tell a user that their oxygen level is normal
// or alarming. Write a function that alerts a user of their oxygen saturation.

// ≥ 96% Normal reading.
// 95% Acceptable to continue home monitoring.
// 93–94% Seek advice from health professionals.
// ≤ 92% Seek urgent medical advice.

var oximeterData = 92;

function oxygenLevel(oximeterData){
    if (oximeterData >= 96) {
        console.log("Normal reading.");
    }else if (oximeterData == 95){
        console.log("Acceptable to continue home monitoring");
    }else if ((oximeterData >= 93) && (oximeterData <= 94)) {
        console.log("Seek advice from health professionals")
    } else if (oximeterData <= 92) {
        console.log("Seek urgent medical advice.")
    }
}

oxygenLevel(oximeterData); 