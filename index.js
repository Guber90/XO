var activPlayer="x";
var selectedO=[];
var selectedX=[];
var crossed;

function winnerO(){
    disableBoxes();
    if(document.getElementById("player1Mark").textContent==="O"){
	var player1Score=document.getElementById("player1Score");
	player1Score.textContent=parseInt(document.getElementById("player1Score").textContent)+1;
	var winnerText=document.getElementById("player1Name").textContent+" won the game!";
	document.getElementById("winner").textContent=winnerText;
	document.getElementById("winner").style.display="block";
    }
    else{
	var player2Score=document.getElementById("player2Score");
	player2Score.textContent=parseInt(document.getElementById("player2Score").textContent)+1;
	var winnerText=document.getElementById("player2Name").textContent+" won the game!";
	document.getElementById("winner").textContent=winnerText;
	document.getElementById("winner").style.display="block";
    }
}

function winnerX(){
    disableBoxes();
    if(document.getElementById("player1Mark").textContent==="X"){
	var player1Score=document.getElementById("player1Score");
	player1Score.textContent=parseInt(document.getElementById("player1Score").textContent)+1;
	var winnerText=document.getElementById("player1Name").textContent+" won the game!";
	document.getElementById("winner").textContent=winnerText;
	document.getElementById("winner").style.display="block";
    }
    else{
	var player2Score=document.getElementById("player2Score");
	player2Score.textContent=parseInt(document.getElementById("player2Score").textContent)+1;
	var winnerText=document.getElementById("player2Name").textContent+" won the game!";
	document.getElementById("winner").textContent=winnerText;
	document.getElementById("winner").style.display="block";
    }
}
function checkForWin(){
    if (selectedO.includes("b21") && selectedO.includes("b22") && selectedO.includes("b23"))
	{
	    document.getElementById("crossLine").classList.add("horizontal2");
	    crossed="horizontal2";
	    winnerX();
	}
    if(selectedO.includes("b11") && selectedO.includes("b12") && selectedO.includes("b13"))
	{
	    document.getElementById("crossLine").classList.add("horizontal1");
	    crossed="horizontal1";
	    winnerO();
	}
    if(selectedO.includes("b31") && selectedO.includes("b32") && selectedO.includes("b33"))
	{
	    document.getElementById("crossLine").classList.add("horizontal3");
	    crossed="horizontal3";
	    winnerO();
	}
    if(selectedO.includes("b11") && selectedO.includes("b22") && selectedO.includes("b33"))
	{
	    document.getElementById("crossLine").classList.add("diagonal2");
	    crossed="diagonal2";
	    winnerO();
	}
    if(selectedO.includes("b13") && selectedO.includes("b22") && selectedO.includes("b31"))
	{
	    document.getElementById("crossLine").classList.add("diagonal1");
	    crossed="diagonal1";
	    winnerO();
	}
    if(selectedO.includes("b11") && selectedO.includes("b21") && selectedO.includes("b31"))
	{
	    document.getElementById("crossLine").classList.add("vertical1");
	    crossed="vertical1";
	    winnerO();
	}
    if(selectedO.includes("b12") && selectedO.includes("b22") && selectedO.includes("b32"))
	{
	    document.getElementById("crossLine").classList.add("vertical2");
	    crossed="vertical2";
	    winnerO();
	}
    if(selectedO.includes("b13") && selectedO.includes("b23") && selectedO.includes("b33"))
	{
	    document.getElementById("crossLine").classList.add("vertical3");
	    crossed="vertical3";
	    winnerO();
	}
    
    if (selectedX.includes("b11") && selectedX.includes("b12") && selectedX.includes("b13"))
	{
	    document.getElementById("crossLine").classList.add("horizontal1");
	    crossed="horizontal1";
	    winnerX();
	}
    if (selectedX.includes("b21") && selectedX.includes("b22") && selectedX.includes("b23"))
	{
	    document.getElementById("crossLine").classList.add("horizontal2");
	    crossed="horizontal2";
	    winnerX();
	}
    if (selectedX.includes("b31") && selectedX.includes("b32") && selectedX.includes("b33"))
	{
	    document.getElementById("crossLine").classList.add("horizontal3");
	    crossed="horizontal3";
	    winnerX();
	}
    if (selectedX.includes("b11") && selectedX.includes("b22") && selectedX.includes("b33"))
	{
	    document.getElementById("crossLine").classList.add("diagonal2");
	    crossed="diagonal2";
	    winnerX();
	}
    if (selectedX.includes("b13") && selectedX.includes("b22") && selectedX.includes("b31"))
	{
	    document.getElementById("crossLine").classList.add("diagonal1");
	    crossed="diagonal1";
	    winnerX();
	}
    if (selectedX.includes("b11") && selectedX.includes("b21") && selectedX.includes("b31"))
	{
	    document.getElementById("crossLine").classList.add("vertical1");
	    crossed="vertical1";
	    winnerX();
	}
    if (selectedX.includes("b12") && selectedX.includes("b22") && selectedX.includes("b32"))
	{
	    document.getElementById("crossLine").classList.add("vertical2");
	    crossed="vertical2";
	    winnerX();
	}
    if (selectedX.includes("b13") && selectedX.includes("b23") && selectedX.includes("b33"))
	{
	    document.getElementById("crossLine").classList.add("vertical3");
	    crossed="vertical3";
	    winnerX();
	}
}


function disableBoxes(){
    var boxes=document.getElementsByClassName("box");
    for(var i=0;i<boxes.length;i++){
	boxes[i].style.pointerEvents="none";
    }
}

function enableBoxes(){
    var boxes=document.getElementsByClassName("box");
    for(var i=0;i<boxes.length;i++){
	boxes[i].style.pointerEvents="auto";
	boxes[i].textContent="";
    }
}

document.getElementById("b11").addEventListener("click",function(){
    if(activPlayer==="o"){
	document.getElementById("b11").innerHTML="O";
	activPlayer="x";
	selectedO.push("b11");
	checkForWin();
    }
    else{
	document.getElementById("b11").innerHTML="X";
	activPlayer="o";
	selectedX.push("b11");
	checkForWin();
    }
    document.getElementById("b11").style.pointerEvents="none";    
}
);


document.getElementById("b12").addEventListener("click",function(){
    if(activPlayer==="o"){
	document.getElementById("b12").innerHTML="O";
	activPlayer="x";
	selectedO.push("b12")
	checkForWin();
    }
    else{
	document.getElementById("b12").innerHTML="X";
	activPlayer="o";
	selectedX.push("b12");
	checkForWin();
    }
    document.getElementById("b12").style.pointerEvents="none";    
}
);

document.getElementById("b13").addEventListener("click",function(){
    if(activPlayer==="o"){
	document.getElementById("b13").innerHTML="O";
	activPlayer="x";
	selectedO.push("b13");
	checkForWin();
    }
    else{
	document.getElementById("b13").innerHTML="X";
	activPlayer="o";
	selectedX.push("b13");
	checkForWin();
    }
    document.getElementById("b13").style.pointerEvents="none";    
}
);


document.getElementById("b21").addEventListener("click",function(){
    if(activPlayer==="o"){
	document.getElementById("b21").innerHTML="O";
	activPlayer="x";
	selectedO.push("b21")
	checkForWin();
	
    }
    else{
	document.getElementById("b21").innerHTML="X";
	activPlayer="o";
	selectedX.push("b21");
	checkForWin();
    }
    document.getElementById("b21").style.pointerEvents="none";    
}
);

document.getElementById("b22").addEventListener("click",function(){
    if(activPlayer==="o"){
	document.getElementById("b22").innerHTML="O";
	activPlayer="x";
	selectedO.push("b22");
	checkForWin();
    }
    else{
	document.getElementById("b22").innerHTML="X";
	activPlayer="o";
	selectedX.push("b22");
	checkForWin();
    }
    document.getElementById("b22").style.pointerEvents="none";    
}
);

document.getElementById("b23").addEventListener("click",function(){
    if(activPlayer==="o"){
	document.getElementById("b23").innerHTML="O";
	activPlayer="x";
	selectedO.push("b23");
	checkForWin();
    }
    else{
	document.getElementById("b23").innerHTML="X";
	activPlayer="o";
	selectedX.push("b23");
	checkForWin();
    }
    document.getElementById("b23").style.pointerEvents="none";    
}
);

document.getElementById("b31").addEventListener("click",function(){
    if(activPlayer==="o"){
	document.getElementById("b31").innerHTML="O";
	activPlayer="x";
	selectedO.push("b31");
	checkForWin();
    }
    else{
	document.getElementById("b31").innerHTML="X";
	activPlayer="o";
	selectedX.push("b31");
	checkForWin();
    }
    document.getElementById("b31").style.pointerEvents="none";    
}
);

document.getElementById("b32").addEventListener("click",function(){
    if(activPlayer==="o"){
	document.getElementById("b32").innerHTML="O";
	activPlayer="x";
	selectedO.push("b32");
	checkForWin();
    }
    else{
	document.getElementById("b32").innerHTML="X";
	activPlayer="o";
	selectedX.push("b32");
	checkForWin();
    }
    document.getElementById("b32").style.pointerEvents="none";      
}
);

document.getElementById("b33").addEventListener("click",function(){
    if(activPlayer==="o"){
	document.getElementById("b33").innerHTML="O";
	activPlayer="x";
	selectedO.push("b33");
	checkForWin();
    }
    else{
	document.getElementById("b33").innerHTML="X";
	activPlayer="o";
	selectedX.push("b33");
	checkForWin();
    }
    document.getElementById("b33").style.pointerEvents="none";    
}
);

document.getElementById("startGame").addEventListener("click",function(){
    if(document.getElementById("player1").value.length===0 || document.getElementById("player2").value.length===0 ){
	alert("Player name missing!");
    }
    else {
	document.getElementById("board").classList.add("game-board");
	document.getElementById("players").style.display="none";
	document.getElementById("resultsID").classList.add("results");
	document.getElementById("player1Name").textContent=document.getElementById("player1").value;
	document.getElementById("player2Name").textContent=document.getElementById("player2").value;
    }
})

document.getElementById("nextGame").addEventListener("click",function(){

    enableBoxes();
    selectedO=[];
    selectedX=[];
    activPlayer="x";
    document.getElementById("crossLine").classList.remove(crossed);
    document.getElementById("winner").style.display="none";
    if(document.getElementById("player1Mark").textContent==="O"){
	document.getElementById("player1Mark").textContent="X"
	document.getElementById("player2Mark").textContent="O"
    }
    else{
	document.getElementById("player2Mark").textContent="X"
	document.getElementById("player1Mark").textContent="O"
    }
})

document.getElementById("resetBoard").addEventListener("click",function(){
    window.location.href="index.html";
})
