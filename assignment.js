// https://github.com/MarufAhamedsagor/assignment-three


// converting to kilometer to meter
function kilometerToMeter(kiloMeter){
    meter = kiloMeter * 1000;
    return  meter;
   
}
let kilometer = 7;
if ( kilometer >= 0 && kilometer !== "string") {
   let answer = kilometerToMeter(kilometer);
   console.log(answer);   
}



// Determinate the budgetCalculator 

function budgetCalculator(watch, phone, laptop){
 watchCost = watch * 50;
 phoneCost = phone * 100;
 laptopCost = laptop * 500;
 totalBil = watchCost + phoneCost + laptopCost;
 return totalBil;
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
 totalCost = 0;
 if (days <= 10){
   totalCost = days * 100;
 }
 else if (days <= 20){
    first10Cost = 10 * 100;
    dayRemain = days - 10;
    second10Cost = dayRemain * 80;
    totalCost = first10Cost + second10Cost;

 }
 else {
   first10Cost = 10 * 100;
   second10Cost = 10 * 80;
   dayRemain = days - 20;
   thirdCost = dayRemain * 50;
   
 }
  totalCost = first10Cost + second10Cost + thirdCost;
  return totalCost;
}

let numberOfDay = 25;
if (numberOfDay < 0) {
      console.log("please enter positive number")
}
else{
  let totalAmount = hotelCost(numberOfDay);
  console.log(totalAmount);
}

// find the largest name from an array 

function megaFriend(friendsName){

          let longestName = friendsName[0].length;
            let ans = friendsName[0];
          for (let i = 0; i < friendsName.length; i++) {
            let elementName = friendsName[i].length;

            if ( elementName > longestName) {
                ans = friendsName[i];
                longestName = elementName;
            }
          }
          return ans;
    }
                 
        // let declare an array 
                 let  friends = [
                   'MD Shanto Islam',
                   'Md Shariful Islam',
                   'Maruf Ahamed Sagor',
                   'Jannatul Ferdous Nodhi',
                   'Sumaiya Akter Bonna',
                   'Mst Nishat Anjum',
                   'Mst Morium Begum'
                 ];
                 let result = megaFriend(friends);
                 console.log(result);

