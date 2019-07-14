string = "ABBCCD";

let matchFound = false;
for(let i = 0; i < string.length; i++){
    for(let j = 0; j < string.length; j++){
		if (string[i] === string[j]){
		matchFound = true;
		console.log(string[j])
		break;
        }
    }
	if(matchFound) break;
}