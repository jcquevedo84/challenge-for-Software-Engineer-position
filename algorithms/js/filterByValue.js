function filterByValue(arr, key){
  return arr.filter(function(value){
		return key in value;	
	});
}

var inputFilterByValue = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}];
var resulFilterByValue = filterByValue(inputFilterByValue, 'isCatOwner');
document.getElementById("dataFilterByValue").innerHTML = JSON.stringify(inputFilterByValue);
document.getElementById("resultadoFilterByValue").innerHTML = JSON.stringify(resulFilterByValue);
