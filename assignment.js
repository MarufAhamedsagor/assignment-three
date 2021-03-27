// https://github.com/MarufAhamedsagor/assignment-three


// converting to kilometer to meter
function kilometerToMeter(distance){
    displacement = distance * 1000;
    return  displacement ;
   
}
let kilometer = 7;
if ( kilometer >= 0) {
   let answer = kilometerToMeter(kilometer);
   console.log(answer);   
}



// Determinate the budgetCalculator 

function budgetCalculator(watch, phone, laptop){
 firstPart = watch * 50;
 secondPart = phone * 100;
 thirdPart = laptop * 500;
 sumMoney = firstPart + secondPart + thirdPart;
 return sumMoney;
}
let watch = 4;
phone  = 3;
laptop = 2;
if ( watch >= 0 && phone >= 0 && laptop >=0 ) {
  let sum = budgetCalculator(watch , phone, laptop);
  console.log(sum);
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

let amountTotal = hotelCost(24);

console.log(amountTotal);

// find the largest name from an array 

function megaFriend(arr){
          let longest = arr[0].length;
            let ans = arr[0];
          for (let i = 0; i < arr.length; i++) {
            let element = arr[i].length;

            if ( element > longest) {
                ans = arr[i];
                longest = element;
            }
          }
          return ans;
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
                 let result = megaFriend(friend);
                 console.log(result);

