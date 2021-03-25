const ftoc = function(f) {
let c=Number(f)-32;
c=c/9*5;
c=Number(c);
if(Number.isInteger(c))return Number(c);
else 
return Number(c.toFixed(1));
}

const ctof = function(c) {
let f=Number(c)/5*9;
f+=32;
f=Number(f);
if(Number.isInteger(f))return Number(f);
else
return Number(f.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
