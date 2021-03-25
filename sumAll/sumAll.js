const sumAll = function(a,b) {
let sum =0;
if(a<0||b<0)
return 'ERROR';
else if(!(Number.isInteger(a)&&Number.isInteger(b)))
return 'ERROR';
for(let small=Math.min(a,b);small<=Math.max(a,b);small++){
sum+=small;
}
return sum;
}

module.exports = sumAll
