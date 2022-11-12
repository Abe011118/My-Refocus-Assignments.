// <!-- BMI = kg/m2 where kg is a person's weight in kilograms and m2 is their height in metres squared. -->

const BMI = (weightInkg, heightIncm) => {
    let heightInMeters = heightIncm / 100;
    let sqHt = heightInMeters * heightInMeters;
    console.log('Your BMI for the height of ' + heightIncm + ' cm. and the weight of ' + weightInkg + ' kg. is ' + Math.round(weightInkg/sqHt * 10) / 10); 
    return  Math.round(weightInkg/sqHt * 10) / 10;
};

BMI(65, 169);
