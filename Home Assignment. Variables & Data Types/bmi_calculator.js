// <!-- BMI = kg/m2 where kg is a person's weight in kilograms and m2 is their height in metres squared. -->

function BMI(weightInkg, heightIncm){
    let heightInMeters = heightIncm / 100;
    let sqHt = heightInMeters * heightInMeters;
    console.log('Your BMI for the height of ' + heightIncm + ' cm. and the weight of ' + weightInkg + ' kg. is ' + weightInkg/sqHt);   
}

BMI(60, 152);