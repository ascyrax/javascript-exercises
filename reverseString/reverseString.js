const reverseString = function(word) {
let ans="";
let wlen=word.length;
for(let i=wlen-1;i>=0;i--){
  ans+=word[i];
}
return ans;
}

module.exports = reverseString
