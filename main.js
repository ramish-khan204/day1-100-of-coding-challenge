// Question 2
var personName = "Ramish";
console.log("Hello ".concat(personName, ", would you like to learn some typescript today?"));
//Question 3
//lower case
var PersonName = "Ramish";
console.log("lowercase:", PersonName.toLowerCase());
//Upper case 
console.log("uppercase:", PersonName.toLocaleUpperCase());
//title case
console.log("titlecase:", PersonName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
