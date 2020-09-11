function moduloOperation(dividend,divisor){
	//Primitive way
	let maxFactor;
	let modulo;
	
	for(let i = 1; i<dividend;i++){

		if(divisor*i < dividend){
			maxFactor = divisor*i;
		}

	}
	
	modulo = dividend - maxFactor;
	return modulo;
}

console.log(moduloOperation(534,60));

function modulo(a,b){
	//More efficient way
	return a-(Math.floor(a/b)*b);
}

console.log(modulo(534,60));