const arr = [
       "Web Developer",
       "Refocus",
       "Web Developer",
       "Web Developer",
       "Refocus",
       "Awesome",
];

function countStrings (word){
       let count = 0;
       arr.forEach(function(value){
              if(value==word){
                     count++;
              }
       });
       return count;
}

const strCount = [];

strCount[0] = countStrings("Web Developer");
strCount[1] = countStrings("Refocus");
strCount[2] = countStrings("Awesome");

const newObject = [
       {
              "Web Developer": strCount[0],
              "Refocus": strCount[1],
              "Awesome": strCount[2]
       }
];

console.log(newObject);