menu = {
       "restaurantName" : "Resto ni Mang.Pedro",
       "dishes" : [
              {'dishID': 1,'dishName': 'Adobo', 'dishPrice' : 100, 'ingredients' : [
                     'Pork', 
                     'vinegar', 
                     'soy_sauce', 
                     'onion', 
                     'garlic', 
                     'salt', 
                     'black pepper'
              ]},
              {'dishID': 1,'dishName': 'Sinigang', 'dishPrice' : 120, 'ingredients' : [
                     'Shrimp', 
                     'Kangkong', 
                     'Sampaloc', 
                     'onion', 
                     'garlic', 
                     'salt', 
                     'black pepper'
              ]},
              {'dishID': 1,'dishName': 'Lechon', 'dishPrice' : 400, 'ingredients' : [
                     'Beef', 
                     'salt', 
                     'herbs'
              ]}
       ],
       "displayRestaurantName" : function(){
              console.log(this.restaurantName);  //print restaurant name
              console.log("");     //add row
       },
       "displayMenu" : function(){
              for (dish of this.dishes) {
                     console.log(dish.dishName + ", " + dish.dishPrice + " php.")
                     
                     let storage = "Contains ";
                     for (let i = 0; i < 7; i++) {
                            storage += dish.ingredients[i]; 
                            if(i !=7-1)
                            {
                                   storage += ", "
                            }else{
                                   storage += ".";  
                            }
                     }
                     console.log(storage);       //print ingredients 
                     console.log("");     //add row
              }
       }
}

menu.displayRestaurantName();
menu.displayMenu();


// console.log('dishID # ' + dishes.dishID + " is " + dishes.dishName + " that cost " + dishes.dishPrice + " php.");
// console.log("with the ingredient list of ");
// for (let index = 0; index < dishes.ingredients.length; index++) {
//        console.log(dishes.ingredients[index]);
// }
