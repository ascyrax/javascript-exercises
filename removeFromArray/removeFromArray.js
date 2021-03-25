const removeFromArray = function() {
let args=Array.from(arguments);
let arr=args[0];
let rem=args.splice(1);
for(let i=0;i<rem.length;i++){
    for(let j=0;j<arr.length;j++){
	if(arr[j]===rem[i]){
	    //delete arr[j]; //it creates holes containing undefined value
	    arr.splice(j,1);
	    break;
	}
    } 
}
return arr;
}

module.exports = removeFromArray
