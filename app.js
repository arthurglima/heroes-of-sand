
var battle = function (forca, armadura){
	if (typeof(forca)!="number" || typeof(armadura)!="number"){
		alert("Valores devem ser inteiros");
		return null;
	}
	
	if(forca > armadura){
		return 'First';
	}else{
		return 'Second';
	}
}

