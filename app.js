var char1 = new Object();
char1.name = '';
char1.strength = Math.ceil(Math.random()*5);
char1.armor = Math.ceil(Math.random()*5);
char1.resistance = Math.ceil(Math.random()*5);
char1.health = char1.resistance*5;

var char2 = new Object();
char2.name = '';
char2.strength = Math.ceil(Math.random()*5);
char2.armor = Math.ceil(Math.random()*5);
char2.resistance = Math.ceil(Math.random()*5);
char2.health = char2.resistance*5;


var battle = function(){
    'use strict';
    var attack = function (strength, armor) {
        var damage = 0,
            defense = 0,
            i = 0;
        
        for (i = 0; i < strength; i += 1) {
            damage += Math.ceil(Math.random() * 6);
        }
        for (i = 0; i < armor; i += 1) {
            defense += Math.ceil(Math.random() * 6);
        }
        if (damage > defense) {
            return damage - defense;
        }
        return 0;
    }
    var turn = 'char1';
    while(char1.health >= 0 && char2.health >= 0){
        if(turn == 'char1'){
            var result = attack(char1.strength, char2.armor);
            char2.health -= result;
            turn = 'char2';
        }
        if(turn == 'char2'){
            var result = attack(char2.strength, char1.armor);
            char1.health -= result;
            turn = 'char1';
        }
    }
    if(char1.health <= 0){
        return "char2";
    }
    if(char2.health <= 0){
        return "char1";
    }
}


/*exerc. 2
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
}*/

