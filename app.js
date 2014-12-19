
var gerarPersonagem = function (){
    var obj = new Object();
    var numPontos = 10;
    var valido = false;
    
    do{
        obj.nome = prompt("Nome Personagem");
    }while(obj.nome === null);
    do{
        numPontos = 10;
        do{
            obj.strength = parseInt(prompt("Valor força"));
        }while( parseInt(obj.strength)>5 || obj.strength===null);
        numPontos -= obj.strength;

        do{
            obj.resistance = parseInt(prompt("Valor resistance: \nrestam: "+numPontos));
        }while( parseInt(obj.resistance)>5 || ( (numPontos-parseInt(obj.resistance)) <= 0 ) || obj.strength===null);    
        numPontos -= obj.resistance;

        do{
            obj.armor = parseInt(prompt("Valor armadura: \nrestam: "+numPontos));
        }while(obj.armor>5 || ( (numPontos-parseInt(obj.armor)) < 0 ) || obj.strength===null );
        numPontos -= obj.armor;
        
    }while(numPontos != 0);
    obj.health = parseInt(obj.resistance * 5);
    
    return obj; 
}

var battle = function(){
    'use strict';
    var char1 = gerarPersonagem();
    var char2 = gerarPersonagem();
    
    
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
        return "vencedor "+char2.nome;
    }
    if(char2.health <= 0){
        return "vencedor "+char1.nome;
        
    }
}


/*exerc. 2
var battle = function (strength, armor){
	if (typeof(strength)!="number" || typeof(armor)!="number"){
		alert("Valores devem ser inteiros");
		return null;
	}
	
	if(strength > armor){
		return 'First';
	}else{
		return 'Second';
	}
}*/

