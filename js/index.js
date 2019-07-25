var age = parseInt(prompt("digite sua idade"));

if(age>=65){
	document.body.append("voce e idoso")
} 
else {		
	if(age>=18) {
		document.body.append("voce e maior de idade")
	} else {
		if(age<=12)	{
			document.body.append("voce e crianca")
		} else {
			document.body.append("voce e adolescente")
	}	

}
}