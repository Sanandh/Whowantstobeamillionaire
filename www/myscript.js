$(document).ready(function() {
 
   //var modalDialog = $(this).find(".modal-dialog");
        
    // Applying the top margin on modal dialog to align it vertically center
    //modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 3));
   $("#Description").modal('show');
});


function PlaySound(path) 
{
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', path);
      audioElement.play();
 
}
		
function answerCheck(answer){
  var GameStatus = document.getElementById("GameStatus").innerHTML.trim();
	var answerAfter = "d";
	var correctAnswer = document.getElementById("CorrectAnswer").innerHTML.trim();
	//alert(correctAnswer);
  document.getElementById("results").style.visibility = "visible";
  //Lock the answers
  $("#choice1").css("pointer-events","none");
  $("#choice2").css("pointer-events","none");
  $("#choice3").css("pointer-events","none");
  $("#choice4").css("pointer-events","none");
  
  
  
  
	if(correctAnswer == answer){
//Is this not the last question?
					//Play the sound
					PlaySound('correctanswer.mp3');
					document.getElementById("results").innerHTML = 
					"<center><h2>Correct!<br>Ready for the Next Question?</h2><a href=javascript:UpdateQuestions() type=\"button\" class=\"btn-lg btn-success\">Yes</button></center>";
					document.getElementById("results").scrollIntoView();
					
				if (GameStatus=="Gameend"){
					//Play the sound for winning the whole thing
					PlaySound('correctanswer.mp3');
					document.getElementById("results").innerHTML = "<center><h1>You won the game with 0 incorrect responses!</h1><h2>Try this game again?</h2><a href=\"?startover=yes\" type=\"button\" class=\"btn-lg btn-danger\">Yes</button></center>";
					document.getElementById("results").scrollIntoView();
					
						var PlayerName1=document.getElementById("PlayerName").value;
			  var prize="1000000$";
        document.getElementById("PrizeDetailsBody").innerHTML
        ="Hi" +"   " + PlayerName1 +",  "+" You have recieved" + "  " + prize;
        			 
        setTimeout(function(){
       $('#PrizeDetails').modal('show');
         }, 1000);
				document.getElementById("PrizeDetails").scrollIntoView();	
				} //End of last question check
				
			}
			else{
				PlaySound('wrong.mp3');
				document.getElementById("results").innerHTML = "<center><h2>That was not correct!<br>Try this game again?</h2><a href=\"?startover=yes\" type=\"button\" class=\"btn-lg btn-danger\">Yes</button></center>";
				
				//Show prize details
			//	$("#PrizeDetails").modal('show');
			var PlayerName1=document.getElementById("PlayerName").value;
			  var prize=document.getElementById("Prizemoney").innerHTML.trim();
        document.getElementById("PrizeDetailsBody").innerHTML
        ="Hi" +"   " + PlayerName1 +",  "+" You have recieved" + "  " + prize;
        			 
        setTimeout(function(){
       $('#PrizeDetails').modal('show');
         }, 1000);
         
         //Lock the options
         	document.getElementById("PrizeDetails").scrollIntoView();	
         $("#choice1").css("pointer-events","none");
         $("#choice2").css("pointer-events","none");
         $("#choice3").css("pointer-events","none");
         $("#choice4").css("pointer-events","none");

				//Mark it shamefully red
				if(answer == "a"){
				  $('#choice1').addClass('wrongChoice');
				}
				if(answer == "b"){
				  $('#choice2').addClass('wrongChoice');
				}
				if(answer == "c"){
				  $('#choice3').addClass('wrongChoice');
				}
				if(answer == "d"){
				  $('#choice4').addClass('wrongChoice');
				}
			}
			//Make it green right or wong
			if(correctAnswer == "a"){
			  $('#choice1').addClass('correctChoice');
			}
			if(correctAnswer == "b"){
			  $('#choice2').addClass('correctChoice');
			}
			if(correctAnswer == "c"){
			  $('#choice3').addClass('correctChoice');
			}
			if(correctAnswer == "d"){
			  $('#choice4').addClass('correctChoice');
			}
			
			document.getElementById("results").scrollIntoView();
			
		}
		
		function FiftyFifty()
		{
		     
 			  var correctAnswer = document.getElementById("CorrectAnswer").innerHTML.trim();
 			  var Chance = document.getElementById("5050").innerHTML.trim();
 			  if (Chance==="0")
 			  {
			  if(correctAnswer == "a" || correctAnswer == "c"){
				  $('#choice2').addClass('removeChoice');
				  $('#choice4').addClass('removeChoice');
			  }
			  else if(correctAnswer == "b" || correctAnswer == "d"){
				  $('#choice1').addClass('removeChoice');
				  $('#choice3').addClass('removeChoice');
			  }
 			  }
 			  document.getElementById("5050").innerHTML="1";
		}
		
		function Audiance()
		{
		     
 			  var Chance = document.getElementById("aud").innerHTML.trim();
 			  if (Chance==1)
 			  {
 			    $('#llask').attr('data-target', '#myModalaudience1');
 			  }
 			  document.getElementById("aud").innerHTML=1;

		}

		function SkipQ(){
			  var correctAnswer = document.getElementById("CorrectAnswer").innerHTML.trim();
			  var Chance1 = document.getElementById("skip").innerHTML.trim();
			 // alert(correctAnswer);
			  if(Chance1==="0")
			  {
		    document.getElementById("skip").innerHTML="1";
			  if(correctAnswer == "a"){
				  $('#choice2').addClass('removeChoice');
				  $('#choice3').addClass('removeChoice');
				  $('#choice4').addClass('removeChoice');
			  }
			  else if(correctAnswer == "b"){
				  $('#choice1').addClass('removeChoice');
				  $('#choice3').addClass('removeChoice');
				  $('#choice4').addClass('removeChoice');
			  }
			  else if(correctAnswer == "c"){
				  $('#choice1').addClass('removeChoice');
				  $('#choice2').addClass('removeChoice');
				  $('#choice4').addClass('removeChoice');
			  }
			  else if(correctAnswer == "d"){
				  $('#choice1').addClass('removeChoice');
				  $('#choice2').addClass('removeChoice');
				  $('#choice3').addClass('removeChoice');
			  }
			  
			  }
		}
		
function UpdateQuestions() 
{
  
      //Unlock the answers
      $("#choice1").css("pointer-events","auto");
      $("#choice2").css("pointer-events","auto");
      $("#choice3").css("pointer-events","auto");
      $("#choice4").css("pointer-events","auto");
      
      
      document.getElementById("qbox1").scrollIntoView();
      var id =document.getElementById("QuestionId").innerHTML;
     // alert(id);
      document.getElementById("choice1").className = "millbox2";
      document.getElementById("choice2").className = "millbox2";
      document.getElementById("choice3").className = "millbox2";
      document.getElementById("choice4").className = "millbox2";
      document.getElementById('results').style.visibility = 'hidden';
 
     if(id==2)
     {
       document.getElementById("qbox1").innerHTML="Which is the highest mountain peakin the world?";
       document.getElementById("choice1").innerHTML="A.K2";
       document.getElementById("choice2").innerHTML="B.Kanchenjunga";
       document.getElementById("choice3").innerHTML="C.Mount Everest";
       document.getElementById("choice4").innerHTML="D.Lhotse";
       document.getElementById("QuestionId").innerHTML=3;
       document.getElementById("CorrectAnswer").innerHTML="c";
       document.getElementById("AskAudience").src = "choicec3.png";
       $('#Question2').addClass('currentround');
       $('#Question2PrizeMoney').addClass('prizemoneycurrent');
       $('#Question2').removeClass('openround');
       $('#Question2PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="100$";
     }

     if(id==3)
     {
       
       document.getElementById("qbox1").innerHTML="Which is the longest river in the world?";
        document.getElementById("choice1").innerHTML="A.Amazon";
       document.getElementById("choice2").innerHTML="B.Nile";
       document.getElementById("choice3").innerHTML="C.Yangtze";
       document.getElementById("choice4").innerHTML="D.Brahamputra";
       document.getElementById("QuestionId").innerHTML=4;
       document.getElementById("CorrectAnswer").innerHTML="b";
      document.getElementById("AskAudience").src = "choiceb1.png";
      $('#Question3').addClass('currentround');
       $('#Question3PrizeMoney').addClass('prizemoneycurrent');
       $('#Question3').removeClass('openround');
       $('#Question3PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="200$";
     }
  
      else if(id==4)
     {
       document.getElementById("qbox1").innerHTML="Which is the largest country in the world by area?";
        document.getElementById("choice1").innerHTML="A.China";
       document.getElementById("choice2").innerHTML="B.Canada";
       document.getElementById("choice3").innerHTML="C.USA";
       document.getElementById("choice4").innerHTML="D.Russia";
       document.getElementById("QuestionId").innerHTML=5;
       document.getElementById("CorrectAnswer").innerHTML="d";
       document.getElementById("AskAudience").src = "choiced1.png";
       $('#Question4').addClass('currentround');
       $('#Question4PrizeMoney').addClass('prizemoneycurrent');
       $('#Question4').removeClass('openround');
       $('#Question4PrizeMoney').removeClass('prizemoney');
        document.getElementById("Prizemoney").innerHTML="300$";
     }
       else if(id==5)
     {
       document.getElementById("qbox1").innerHTML="Which is the largest Ocean in the world?";
        document.getElementById("choice1").innerHTML="A.Pacific Ocean";
       document.getElementById("choice2").innerHTML="B.Atlantic Ocean";
       document.getElementById("choice3").innerHTML="C.Indian Ocean";
       document.getElementById("choice4").innerHTML="D.Artic Ocean";
       document.getElementById("QuestionId").innerHTML=6;
       document.getElementById("CorrectAnswer").innerHTML="a";
       document.getElementById("AskAudience").src = "choicea2.png";
       $('#Question5').addClass('currentround');
       $('#Question5PrizeMoney').addClass('prizemoneycurrent');
       $('#Question5').removeClass('openround');
       $('#Question5PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="500$";
     }
     
       else if(id==6)
     {
       document.getElementById("qbox1").innerHTML="Which is the largest continent by area?";
        document.getElementById("choice1").innerHTML="A.Africa";
       document.getElementById("choice2").innerHTML="B.Asia";
       document.getElementById("choice3").innerHTML="C.North America";
       document.getElementById("choice4").innerHTML="D.Europe";
       document.getElementById("QuestionId").innerHTML=7;
       document.getElementById("CorrectAnswer").innerHTML="b";
        document.getElementById("AskAudience").src = "choiceb1.png";
        $('#Question6').addClass('currentround');
       $('#Question6PrizeMoney').addClass('prizemoneycurrent');
       $('#Question6').removeClass('openround');
       $('#Question6PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="1000$";
     }
      else if(id==7)
     {
       document.getElementById("qbox1").innerHTML="Which country/region has the highest population density in the world?";
        document.getElementById("choice1").innerHTML="A.Monaco";
       document.getElementById("choice2").innerHTML="B.Singapore";
       document.getElementById("choice3").innerHTML="C.Macao";
       document.getElementById("choice4").innerHTML="D.Hong Kong";
       document.getElementById("QuestionId").innerHTML=8;
       document.getElementById("CorrectAnswer").innerHTML="a";
       document.getElementById("AskAudience").src = "choicea2.png";
       $('#Question7').addClass('currentround');
       $('#Question7PrizeMoney').addClass('prizemoneycurrent');
       $('#Question7').removeClass('openround');
       $('#Question7PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="2000$";
     }
      else if(id==8)
     {
       document.getElementById("qbox1").innerHTML="Which country has the highest population.";
        document.getElementById("choice1").innerHTML="A.India";
       document.getElementById("choice2").innerHTML="B.China";
       document.getElementById("choice3").innerHTML="C.USA";
       document.getElementById("choice4").innerHTML="D.Russia";
       document.getElementById("QuestionId").innerHTML=9;
       document.getElementById("CorrectAnswer").innerHTML="b";
       document.getElementById("AskAudience").src = "choiceb1.png";
        $('#Question8').addClass('currentround');
       $('#Question8PrizeMoney').addClass('prizemoneycurrent');
       $('#Question8').removeClass('openround');
       $('#Question8PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="4000$";
     }
    else if(id==9)
     {
       document.getElementById("qbox1").innerHTML="Which is the tallest building in the world?";
        document.getElementById("choice1").innerHTML="A.Eiffel tower";
       document.getElementById("choice2").innerHTML="B.Sanghai tower";
       document.getElementById("choice3").innerHTML="C.Burj Khalifa";
       document.getElementById("choice4").innerHTML="D.Petronas twin towers";
       document.getElementById("QuestionId").innerHTML=10;
       document.getElementById("CorrectAnswer").innerHTML="c";
       document.getElementById("AskAudience").src = "choicec3.png";
       $('#Question9').addClass('currentround');
       $('#Question9PrizeMoney').addClass('prizemoneycurrent');
       $('#Question9').removeClass('openround');
       $('#Question9PrizeMoney').removeClass('prizemoney');
        document.getElementById("Prizemoney").innerHTML="8000$";
     }
      else if(id==10)
     {
       document.getElementById("qbox1").innerHTML="Which is the longest train rout in the world? (Without train change)?";
        document.getElementById("choice1").innerHTML="A.Moscow-Pyongyang";
       document.getElementById("choice2").innerHTML="B.Moscow-Vladivostok";
       document.getElementById("choice3").innerHTML="C.Moscow-Beijing";
       document.getElementById("choice4").innerHTML="D.Toronto-Vancouver";
       document.getElementById("QuestionId").innerHTML=11;
       document.getElementById("CorrectAnswer").innerHTML="a";
       document.getElementById("AskAudience").src = "choicea2.png";
       $('#Question10').addClass('currentround');
       $('#Question10PrizeMoney').addClass('prizemoneycurrent');
       $('#Question10').removeClass('openround');
       $('#Question10PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="16000$";
     }
      else if(id==11)
     {
       document.getElementById("qbox1").innerHTML="Which is the largest fresh water lake in the world?";
        document.getElementById("choice1").innerHTML="A.Lake Superior";
       document.getElementById("choice2").innerHTML="B.Lake Huron";
       document.getElementById("choice3").innerHTML="C.Lake Victoria";
       document.getElementById("choice4").innerHTML="D.Lake Baikal";
       document.getElementById("QuestionId").innerHTML=12;
       document.getElementById("CorrectAnswer").innerHTML="d";
       document.getElementById("AskAudience").src = "choiced1.png";
        $('#Question11').addClass('currentround');
       $('#Question11PrizeMoney').addClass('prizemoneycurrent');
       $('#Question11').removeClass('openround');
       $('#Question11PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="32000$";
     }
     else if(id==12)
     {
       document.getElementById("qbox1").innerHTML="Which is the largest city in the world by area?";
        document.getElementById("choice1").innerHTML="A.New York";
       document.getElementById("choice2").innerHTML="B.New Delhi";
       document.getElementById("choice3").innerHTML="C.Moscow";
       document.getElementById("choice4").innerHTML="D.Paris";
       document.getElementById("QuestionId").innerHTML=13;
       document.getElementById("CorrectAnswer").innerHTML="a";
       document.getElementById("AskAudience").src = "choicea2.png";
       $('#Question12').addClass('currentround');
       $('#Question12PrizeMoney').addClass('prizemoneycurrent');
       $('#Question12').removeClass('openround');
       $('#Question12PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="64000$";
     }
    else if(id==13)
     {
       document.getElementById("qbox1").innerHTML="Which is the coldest inhabited place on earth?";
        document.getElementById("choice1").innerHTML="A.Oymyakon, Russia";
       document.getElementById("choice2").innerHTML="B.Toronto, Canada";
       document.getElementById("choice3").innerHTML="C.Moscow – Russia";
       document.getElementById("choice4").innerHTML="D.Antartica";
       document.getElementById("QuestionId").innerHTML="14";
        document.getElementById("CorrectAnswer").innerHTML="a";
       document.getElementById("AskAudience").src = "choicea2.png";
       $('#Question13').addClass('currentround');
       $('#Question13PrizeMoney').addClass('prizemoneycurrent');
       $('#Question13').removeClass('openround');
       $('#Question13PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="125000$";
     }
      else if(id==14)
     {
       document.getElementById("qbox1").innerHTML="Which is the hottest inhabited place on earth?";
        document.getElementById("choice1").innerHTML="A.CERN, Geneva";
       document.getElementById("choice2").innerHTML="B.Lut Desert, Iran";
       document.getElementById("choice3").innerHTML="C.Bangkok, Thailand";
       document.getElementById("choice4").innerHTML="D.Dallol, Ethopia";
       document.getElementById("QuestionId").innerHTML=15;
       document.getElementById("CorrectAnswer").innerHTML="d";
       document.getElementById("AskAudience").src = "choiced1.png";
        $('#Question14').addClass('currentround');
       $('#Question14PrizeMoney').addClass('prizemoneycurrent');
       $('#Question14').removeClass('openround');
       $('#Question14PrizeMoney').removeClass('prizemoney');
       document.getElementById("Prizemoney").innerHTML="250000$";
     }
     else if(id==15)
     {
       
       document.getElementById("qbox1").innerHTML="Which airport is located at the highest altitude?";
        document.getElementById("choice1").innerHTML="A.Bangda airport, Tibet";
       document.getElementById("choice2").innerHTML="B.Daocheng Yading airport, China";
       document.getElementById("choice3").innerHTML="C.Leh airport, India";
       document.getElementById("choice4").innerHTML="D.Bagdogra airport, India";
       document.getElementById("QuestionId").innerHTML=16;
       document.getElementById("CorrectAnswer").innerHTML="b";
       document.getElementById("AskAudience").src = "choiceb1.png";
        $('#Question15').addClass('currentround');
       $('#Question15PrizeMoney').addClass('prizemoneycurrent');
       $('#Question15').removeClass('openround');
       $('#Question15PrizeMoney').removeClass('prizemoney');
       document.getElementById("GameStatus").innerHTML="Gameend";
       document.getElementById("Prizemoney").innerHTML="500000$";
     }
}

function UpdateUserName()
{
  var PlayerName=document.getElementById("PlayerName").value;
  PlayerName="Hi  "  +PlayerName;
  document.getElementById("UserName").innerHTML=PlayerName ;
}



		
		
