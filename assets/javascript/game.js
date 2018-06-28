$(document).ready(function(){
	var random=Math.floor(Math.random()*101+19)
	// Selects a random number to be shown at the start of the game
	// 
	//
	$('#randomNumber').text(Random);
	
	//
	var num1= Math.floor(Math.random()*11+1)
	var num2= Math.floor(Math.random()*11+1)
	var num3= Math.floor(Math.random()*11+1)
	var num4= Math.floor(Math.random()*11+1)
	// Setting up random numbers for each jewel
	// Random number has to be between 1 - 12
	// 
	var userTotal= 0; 
	var wins= 0;
	var losses = 0;
	//  Decaring variables
  $('#numberWins').text(wins);
	$('#numberLosses').text(losses);
	
  //resets the game
  function reset(){
		random=Math.floor(Math.random()*101+19);
		console.log(random)
		$('#randomNumber').text(random);
		num1= Math.floor(Math.random()*11+1);
		num2= Math.floor(Math.random()*11+1);
		num3= Math.floor(Math.random()*11+1);
		num4= Math.floor(Math.random()*11+1);
		userTotal= 0;
		$('#finalTotal').text(userTotal);
		};

  //adds the wins to the userTotal
  	function yay(){
  		alert("You won!");
			wins++; 
		$('#numberWins').text(wins);
			reset();
	};
	

  //addes the losses to the userTotal
  	function loser(){
  		alert ("You lose!");
			losses++;
		$('#numberLosses').text(losses);
			reset()
	};
	

  //sets up click for jewels
	$('#crystal').on ('click', function(){
	  userTotal = userTotal + num1;
	  console.log("userTotal=" + userTotal);
	  $('#finalTotal').text(userTotal); 
			//sets win/lose condition
		  if (userTotal == random){
			yay();
		  }
		  else if ( userTotal > random){
			loser();
		  }   
	});
	  
	$('#crystalOne').on ('click', function(){
	  userTotal = userTotal + num2;
	  console.log("userTotal=" + userTotal);
	  $('#finalTotal').text(userTotal); 
		  if (userTotal ==random){
			yay();
		  }
		  else if ( userTotal > random){
			loser();
		  } 
	});  
	$('#crystalTwo').on ('click', function(){
	  userTotal = userTotal + num3;
	  console.log("userTotal=" + userTotal);
	  $('#finalTotal').text(userTotal);

			if (userTotal == random){
			yay();
		  }
		  else if ( userTotal > random){
			loser();
		  } 
	});  
	$('#crystalThree').on ('click', function(){
	  userTotal = userTotal + num4;
	  console.log("userTotal=" + userTotal);
	  $('#finalTotal').text(userTotal); 
		
			if (userTotal == random){
			yay();
		  }
		  else if ( userTotal > random){
			loser();
		  }
	});   
  }); 