// https://github.com/MarufAhamedsagor/assignment-three


// converting to kilometer to meter
function kilometerToMeter(distance){
    displacement = distance * 1000;
    return  displacement ;
   
}



// Determinate the budgetCalculator 

function budgetCalculator(watch, phone, laptop){
sumMoney = (watch * 50) + (phone * 100) + (laptop * 500);
return sumMoney;
}


//Determine the cost of how long I have been in the hotel

function hotelCost(days){
 cost = 0;
 if (days <= 10){
   cost = days * 100;
 }
 else if (days <= 20){
    firstCost = 10 * 100;
    dayRemain = days - 10;
    secondCost = dayRemain * 80;
    cost = firstCost + secondCost;

 }
 else {
   firstCost = 10 * 100;
   secondCost = 10 * 80;
   dayRemain = days - 20;
   thirdCost = dayRemain * 50;
   
 }
  totalCost = firstCost + secondCost + thirdCost;
  return totalCost;
}

// find the largest name from an array 



function megaFriend(arr){
var long = arr[0];
for (let i = 0; i < arr.length; i++) {
 const element = arr[i];
     if( long.length < element.length){
         long = element
         }
              }
             return long
                 }
                 
        // let declare an array 
                 let  friend = [
                   'MD Shanto Islam',
                   'Md Shariful Islam',
                   'Maruf Ahamed Sagor',
                   'Jannatul Ferdous Nodhi',
                   'Sumaiya Akter Bonna',
                   'Mst Nishat Anjum',
                   'Mst Morium Begum'
                 ];

