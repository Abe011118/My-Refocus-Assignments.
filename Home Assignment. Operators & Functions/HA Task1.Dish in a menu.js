
const sinigang = {
       'dishID': 0,
       'dishName': 'Sinigang', 
       'dishPrice' : 120, 
       'ingredients' : [
              'Shrimp', 
              'Kangkong', 
              'Sampaloc', 
              'onion', 
              'garlic', 
              'salt', 
              'black pepper'
       ]
}

const adobo = {
       'dishID': 1,
       'dishName': 'Adobo', 
       'dishPrice' : 100, 
       'ingredients' : [
              'Pork', 
              'vinegar', 
              'soy_sauce', 
              'onion', 
              'garlic', 
              'salt', 
              'black pepper'
       ]
}

const lechon = {
       'dishID': 2,
       'dishName': 'Lechon', 
       'dishPrice' : 400, 
       'ingredients' : [
              'Beef', 
              'salt', 
              'herbs'
       ]
}

const dishes = [sinigang, adobo, lechon] //array of dishes


console.log(dishes[2]);