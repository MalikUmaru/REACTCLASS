function greetUser() {
  const firstName = prompt("First Name: ");
  const lastName = prompt("Last Name: ");

  return firstName + " " + lastName;
}

//conditional renderring
let date = new Date();
let hour = date.getHours();
let day = date.getDay();
let message = "";
console.log(hour);
let period = "";

if (hour < 12) {
    period = "Morning";
}else if (hour > 12 && hour <17){
    period = "Afternoon";
}else if (hour > 17 && hour < 20){
    period = "Evenning"
}else if (hour > 20 && hour < 23){
    period = "Night"
}

//using switch 
// switch(day) {
//     case 0:
//         message = "Happy Sunday";
//         break;
//     case 1:
//         message = "Happy Monday";
//         break;
//     case 2:
//         message = "Happy Tuesday";
//         break;
//     case 3:
//         message = "Happy Wednesday";
//         break;
//     case 4:
//         message = "Happy Thursday";
//         break;
//     case 5:
//         message = "Happy Friday";
//         break;
//     case 6:
//         message = "Happy Saturday ";
//         break;
//     default:
//         message = "Hello";
//   }

  //using if statement
  if(day == 0){
    message = "Today is Sunday";
  }else if(day== 1){
    message = "Today is Monday";
  }else if(day== 2){
    message = "Today is Tuesday";
  }else if(day== 3){
    message = "Today is Wednesday";
  }else if (day == 4){
    message = "Today is Thursday";
  }else if (day ==5){
    message = "Today is Friday";
  }else if(day == 6){
    message = "Today is Saturday"
  }


let userName = greetUser()
function EE() {
  return <div> {period} {userName} {message} </div>;
}

export default EE;
