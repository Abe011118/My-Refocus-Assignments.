// 

const myText = "there is a storm coming to the East of the Philippines";

for (var i = 0; i < myText.length; i++) {
    if (myText.charAt(i) === myText.charAt(i).toUpperCase()) {
        if(myText.charAt(i) != " "){
            console.log("the upper case is " + myText.charAt(i) + " at position " + i);
        }
    }
}

const newText = myText.toLowerCase();
console.log(newText);
