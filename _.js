

const _ = {
  clamp(curr,lower,upper){
  	let num = Math.max(curr,lower);
  	num = Math.min(num, upper);
  	return num;
	},
  inRange(num,start,end){
    if (typeof end==='undefined'){
      end = start;
      start = 0;
    }
    if (start > end){
      let orgstart = start;
      start=end;
      end=orgstart;
    }
    return ((num >= start)&&(num < end));
  },
  words(str){
    const answer = str.split(' ');
    return answer;
  }


}







// Do not write or modify code below this line.
module.exports = _;
