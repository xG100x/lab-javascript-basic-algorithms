
let hacker1 = "Jose";
console.log("the driver is", hacker1);

let hacker2 = "Pepe";
console.log("the navigator name is ", hacker2);

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has, ${hacker1.length}, characters.`);
    
   } else if (hacker2.length > hacker1.length){
    console.log("It seems that the navigator has the longest name, it has", `${hacker2.length} characters.`);
   }

   else {
      console.log(`Wow, you both have equally long names, , ${hacker1.length}, characters`);
   }
  

   let newHacker = "";
   for (let char of hacker1){
    newHacker += char.toUpperCase() + " ";
   }
console.log(newHacker);