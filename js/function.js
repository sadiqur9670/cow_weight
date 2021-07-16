function calc(){
	var n1 = parseInt(document.querySelector('#n1').value);
	var n2 = parseInt(document.querySelector('#n2').value);
	var opar = document.querySelector('#operatiors').value;

	
	if (opar === '.') {
		document.querySelector('#result').value = (n1*n2*n2)/660;

	}
}