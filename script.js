function genran() {
let num = 	parseInt(Math.random()*100);
	if(num < 47)
	{
		num+=47;
	}
	return num;
}
function makeid(l) {
  // write your code here
	let str = "";
	for(let i = 0; i<l; i++)
		{
	str = str + String.fromCharCode(genran());
		}
	return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
