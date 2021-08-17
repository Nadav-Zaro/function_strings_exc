//1
// var firstName = prompt("enter firstname");
// var lastName = prompt(`hi ${firstName}, enter last name`);
// function printLongName(firstName, lastName) {
//     if (firstName.length > lastName.length) {
//         return firstName;
//     }
//     else{
//         return lastName;
//     }
// }
// console.log(printLongName("nadav", "zaro"));

//2
// function isAExist(somestring){
//     if (somestring.indexOf("a") > -1) {
//          return "exist";
//     }
//         return "not exist";
// }

// function isApiExist(somestring) {
//     if (somestring.indexOf("api") > -1){
//          return "exist";
//     }
//         return "not exist";
// }
// console.log(isAExist("nadav"));
// console.log(isApiExist("zaro"));

// function isExistGeneral(string1,string2) {
//     var result1 = isAExist(string1);
//     var result2 = isApiExist(string2);
//     return result1 || result2;
// }
// console.log(isExistGeneral("nadav", "zaro")); 

//3
// var userInput = prompt("put your full name in");
// function getStringLength(strToCheck) {
//     return strToCheck.length;
// }
// console.log(getStringLength(userInput));

// function isSpace(strToCheck) {
//     if(strToCheck.indexOf(" ")>-1){
//        return true;
//     }
// }
// console.log(isSpace(userInput));

// function getFirstHalf(strToCheck) {
//     var firstHalf = strToCheck.substring(0,strToCheck.indexOf(" "));
//     return firstHalf;
// }

// function getSecondHalf(strToCheck) {
//     return strToCheck.substring(strToCheck.indexOf(" ")+1, strToCheck.length);
// }
// console.log(getFirstHalf(userInput));
// console.log(getSecondHalf(userInput));

//4
// function isLongerOrShoter(userString) {
//     if (userString.length >= 5) {
//         return "long";
//     }
//     return "short";
// }

//5
// function getYesOrNo(countryName) {
//     if (countryName.length >=3) {
//         return "yes";
//     }
//     return "no";
// }

//6
// function getStringOrChart(string, char) {
//     if (string.length >= 6) {
//         return string;
//     }
//     return string.indexOf(char);
// }

//7
// function getCharOfString(string, char) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == char) {
//             return string.indexOf(char);
//         }
//     }
//     return string;
// }

//8
// function getOfficalName(firstName,Lastname) {
//     return firstName[0]+ ". " +Lastname.toUpperCase();
// }

//9
// function getLongerLast(lastName1, lastName2) {
//     if(lastName1.length < lastName2.length){
//         console.log(lastName1.toLowerCase());
//         return lastName2;
//     }
//     console.log(lastName2.toLowerCase());
//     return lastName1;
// }

//10
// function getNameOrElse(name, letter) {
//     for (let i = 0; i < name.length; i++) {
//         if (name[i] == letter) {
//             return name;
//         }
//     }
//     return "wrong letter entered"
// }