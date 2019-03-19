

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
  },
  pad(string, length){
    if (length <= string.length){
      return string;
    }
    let startPaddingLength = Math.floor((length - string.length)/2);
    let endPaddingLength = length - string.length - startPaddingLength;
    const spaceChar = ' ';
    let paddedString = spaceChar.repeat(startPaddingLength)+string+spaceChar.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key){
    return object.hasOwnProperty(key);
  },
  invert(object){
    let invertedObject = [];
    for (let key in object) {
      let originalValue = object[key];
      invertedObject.originalValue = key;
    }
    return invertedObject;
  },
  findKey(object, predicate){
    for (let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return key;
      }
    }
    undefined
    return undefined;
  },
  drop(array, n){
    if (n === undefined){
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  },
  dropWhile(array, predicate){
    let index = array.findIndex((element,index)=> {
      return !predicate(element, index);
    });
    return this.drop(array, index);
  },
  chunk(array, num){
    if (num === undefined){
      num = 1;
    }
    if (num > array.length){
      return array; // if num of elements exceed the size of array.
    }
    let answerArray = [];
    for (let i = 0; i < array.length; i+=num){
      let arrayChunk = array.slice(i, i+num);
      answerArray.push(arrayChunk);
    }
    return answerArray;

  }


}








// Do not write or modify code below this line.
module.exports = _;
