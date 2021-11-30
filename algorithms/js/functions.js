function filterByValue(arr, key){
  return arr.filter(function(value){
		return key in value;	
	});
}

function find(arr, searchValue){
    var fArr = arr.filter(function(value){
		return value === searchValue;	
	});    
	if (fArr.length>0) return fArr[0];
}

function findInObj(arr, key, searchValue){
	var newArr =arr.filter(function(value){
		return key in value && value[key] === searchValue;	
	});
	if (newArr.length > 0) return newArr[0];
}

function removeVowels(str){
	var arr = str.split('');
	var vowels = ['a','e','i','u'];
	return arr.filter(function(value){
		return vowels.indexOf(value.toLowerCase()) === -1;	
	}).join('').toLowerCase();
}

function doubleOddNumbers(arr){
	return arr.filter(function(value){
		return value%2 !==0;	
	}).map(function(val){
			return val*2;
});
}

function extractKey(arr, key){
	return arr.map(function(val){

        return val[key];

    })
}

function extractValue(arr, key){
	return arr.map(function(val){

        return val[key];

    })
}

function vowelCount(input) {
	//to get vowel count using string.match
	var arrVowels =input.match(/[aeiouAEIOU]+?/g);

	//acc=accumulator, curr=current value
	return arrVowels.reduce(function (acc, curr) {

	   if (typeof acc[curr.toLowerCase()] == 'undefined') {
		   acc[curr.toLowerCase()] = 1;
	   } 
	   else {
		   acc[curr.toLowerCase()] += 1;
	   }
	   return acc;

	   // the blank object below is default value of the acc (accumulator)
	   }, {});           
  }

function hasNoDuplicates(arr){  
	return arr.every(function(val){
		return arr.indexOf(val) === arr.lastIndexOf(val)
	  })
}

function addKeyAndValue(arr, key, value){  
	arr.forEach(function(val) {
		val[key] = value;
	  });
	  return arr;
}

function partition(arr, callback){  
	return arr.reduce(
		(acc, next, i) => {
		  if (callback(next)) {
			acc[0].push(next);
		  } else {
			acc[1].push(next);
		  }
		  return acc;
		},
		[[], []]
	  );
}

function hasCertainKey(arr, key){
    return arr.every(function(value){
		return key in value;
	});
}

var inputFilterByValue = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}];
var resulFilterByValue = filterByValue(inputFilterByValue, 'isCatOwner');
document.getElementById("dataFilterByValue").innerHTML = JSON.stringify(inputFilterByValue);
document.getElementById("answerFilterByValue").innerHTML = JSON.stringify(resulFilterByValue);


var inputFind = [1,2,3,4,5];
//find([1,2,3,4,5], 10) // undefined
var resulFind = find(inputFind, 3);
document.getElementById("dataFind").innerHTML = JSON.stringify(inputFind);
document.getElementById("answerFind").innerHTML = JSON.stringify(resulFind);

var inputFindInObj = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}];
var resulFindInObj = findInObj(inputFindInObj, 'isCatOwner',true) ;
document.getElementById("dataFindInObj").innerHTML = JSON.stringify(inputFindInObj);
document.getElementById("answerFindInObj").innerHTML = JSON.stringify(resulFindInObj);

var inputRemoveVowels = 'Elie';
var resulRemoveVowels = removeVowels(inputRemoveVowels);
//removeVowels('TIM') // ('tm')
//removeVowels('ZZZZZZ') // ('zzzzzz')
document.getElementById("dataRemoveVowels").innerHTML = JSON.stringify(inputRemoveVowels);
document.getElementById("answerRemoveVowels").innerHTML = JSON.stringify(resulRemoveVowels);

var inputDoubleOddNumbers = [1,2,3,4,5];
var resulDoubleOddNumbers = doubleOddNumbers(inputDoubleOddNumbers);
//doubleOddNumbers([4,4,4,4,4]) // []
document.getElementById("dataDoubleOddNumbers").innerHTML = JSON.stringify(inputDoubleOddNumbers);
document.getElementById("answerDoubleOddNumbers").innerHTML = JSON.stringify(resulDoubleOddNumbers);

var inputExtractKey = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
var resulExtractKey = extractKey(inputExtractKey, 'name');
document.getElementById("dataExtractKey").innerHTML = JSON.stringify(inputExtractKey);
document.getElementById("answerExtractKey").innerHTML = JSON.stringify(resulExtractKey);

var inputExtractValue = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
var resulExtractValue = extractValue(inputExtractValue,'name');
document.getElementById("dataExtractValue").innerHTML = JSON.stringify(inputExtractValue);
document.getElementById("answerExtractValue").innerHTML = JSON.stringify(resulExtractValue);

var inputVowelCount = 'Elie';
var resulVowelCount = vowelCount(inputVowelCount);
//vowelCount('Tim') // {i:1};
//vowelCount('Matt') // {a:1})
//vowelCount('hmmm') // {};
//vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
document.getElementById("dataVowelCount").innerHTML = JSON.stringify(inputVowelCount);
document.getElementById("answerVowelCount").innerHTML = JSON.stringify(resulVowelCount);


var inputHasNoDuplicates = [1,2,3,2];
var resulHasNoDuplicates = hasNoDuplicates(inputHasNoDuplicates);
 //   hasNoDuplicates([1,2,3]) // true
document.getElementById("dataHasNoDuplicates").innerHTML = JSON.stringify(inputHasNoDuplicates);
document.getElementById("answerHasNoDuplicates").innerHTML = JSON.stringify(resulHasNoDuplicates);

var inputAddKeyAndValue = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
var resulAddKeyAndValue = addKeyAndValue(inputAddKeyAndValue, 'title', 'Instructor') ;
document.getElementById("dataAddKeyAndValue").innerHTML = JSON.stringify(inputAddKeyAndValue);
document.getElementById("answerAddKeyAndValue").innerHTML = JSON.stringify(resulAddKeyAndValue);


function isEven(val){
        return val % 2 === 0;
    }
    var arr = [1,2,3,4,5,6,7,8];
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]

var inputPartition = ['Elie', 'Colt', 'Tim', 'Matt'];
var resulPartition = partition(names, isLongerThanThreeCharacters);
//var resulPartition = partition(inputPartition, '');
document.getElementById("dataPartition").innerHTML = JSON.stringify(names);
document.getElementById("answerPartition").innerHTML = JSON.stringify(resulPartition);

var inputHasCertainKey = [
	{title: "Instructor", first: 'Elie', last:"Schoppik"}, 
	{title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
	{title: "Instructor", first: 'Matt', last:"Lane"}, 
	{title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
];
var resulHasCertainKey = hasCertainKey(inputHasCertainKey,'first');
//hasCertainKey(arr,'isCatOwner') // false
document.getElementById("dataHasCertainKey").innerHTML = JSON.stringify(inputHasCertainKey);
document.getElementById("answerHasCertainKey").innerHTML = JSON.stringify(resulHasCertainKey);
