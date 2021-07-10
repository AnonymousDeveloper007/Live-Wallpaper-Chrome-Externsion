
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
let output = '';
output += `${hours}:${minutes}`;
console.log(output);
document.getElementById('jsdate').innerHTML = output;

