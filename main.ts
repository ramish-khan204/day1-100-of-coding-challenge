// Question 2
let personName: string="Ramish";
console.log(`Hello ${personName}, would you like to learn some typescript today?`);


//Question 3

//lower case
let PersonName: string="Ramish";
console.log("lowercase:", PersonName.toLowerCase());

//Upper case 
console.log("uppercase:", PersonName.toLocaleUpperCase());

//title case
console.log("titlecase:", PersonName.replace(/\bw/g,c => c.toUpperCase()));