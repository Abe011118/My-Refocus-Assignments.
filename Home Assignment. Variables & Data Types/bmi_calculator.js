// <!-- BMI = kg/m2 where kg is a person's weight in kilograms and m2 is their height in metres squared. -->

const BMI = (weightInkg, heightIncm) => {
    let heightInMeters = heightIncm / 100;
    let sqHt = heightInMeters * heightInMeters;
    console.log('Your BMI for the height of ' + heightIncm + ' cm. and the weight of ' + weightInkg + ' kg. is ' + Math.round(weightInkg/sqHt * 10) / 10); 
    return  Math.round(weightInkg/sqHt * 10) / 10;
};

// BMI(60, 152);

// this is a manual testing

function test(){
    const result = BMI(65, 169);
    const expected = 22.8;

    console.assert(
        result === expected, 
            `The result ${result} doesn't match the expected value ${expected}.`
    )
}
test();
