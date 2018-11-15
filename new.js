
function evaluar(){
	var score = 0;
	var group = document.getElementsByName("group");
	var group2 = document.getElementsByName("group2");
	var group3 = document.getElementsByName("group3");
	var group4 = document.getElementsByName("group4");
	var group5 = document.getElementsByName("group5");
	if(group[1].checked){
		score = score +20;
	}
	if(group2[0].checked){
		score = score + 20;
	}
	if(group3[2].checked){
		score =score + 20;
	}
	if(group4[0].checked){
		score =score + 20;
	}
	if(group5[2].checked){
			score =score + 20;
		}
	if(score == 100){
		score = 100;
	}
	
	$("#Valor").text(score);
}