const repeatString = function(word,num) {
	let ans="";
	if(num==-1) return 'ERROR';
	for(let i=0;i<num;i++){
	    ans+=word;
	}
	return ans;	
}

module.exports = repeatString
