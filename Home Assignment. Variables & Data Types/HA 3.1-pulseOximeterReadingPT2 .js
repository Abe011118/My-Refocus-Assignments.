// Task 2. Pulse oximeter reading (part 2)
// Continue with the last task, and provide more observations based on the pulse
// rate.

// 40 - 100 Normal reading.
// 101 - 109 Acceptable to continue home monitoring.
// 110 - 130 Seek advice from health professionals.
// ≥ 131 Seek urgent medical advice

var oximeterData = 131;

function oxygenLevel(oximeterData){
    if ((oximeterData >= 40) && (oximeterData <= 100)) {
        console.log("Normal reading.");
    }else if ((oximeterData >= 101) && (oximeterData <= 109)){
        console.log("Acceptable to continue home monitoring");
    }else if ((oximeterData >= 110) && (oximeterData <= 130)) {
        console.log("Seek advice from health professionals")
    } else if (oximeterData >= 131) {
        console.log("Seek urgent medical advice.")
    }
}

oxygenLevel(oximeterData); 