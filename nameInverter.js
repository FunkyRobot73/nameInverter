const nameInverter = function(name) {
if(name.length === 0) return name;
if(name === " ") return (name = "")
name = name.trim(" ");
arr = name.split(" ") 
//console.log(arr);
if(arr.length === 1) return arr[0]; 
return `${arr[1]}, ${arr[0]}`
}

module.exports = nameInverter;

console.log("empty string:", nameInverter(""));
console.log("blank space:",nameInverter(" "));
console.log("White Space:",nameInverter(" Carlos "));
console.log("Single Name:",nameInverter("Adele"));
console.log("Full Name:",nameInverter("Carlos Sousa"));
