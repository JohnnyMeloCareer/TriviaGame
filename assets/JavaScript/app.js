var i = -1;
var intervalId;
var wrongAnsTotal = 0;
var rightAnsTotal = 0;
var correctAns;
var wrongAns;
var Ans = [];
var time = 15;
var tim;
// Array of object questions
var questions = [

      ["What was the name of the final boss from Splatoon 2?","Octobot King I","DJ Octavio","Octobot King II"],

      ["How many Splatlings are in the Splatling category/family?","7","8","9"],

      ["What map is loved by most charger mains?","Skipper Pavilion","Camp triggerfish","Walleye Ware"],

      ["Who the final boss in the Octo Expansion DLC?","Agent 3","Marina","Telephone"],

      ["What the maximum level one can achieve?","99","99*","99*^99"],

      ["What was the max rank before rank x was released?","99","10","50"],

      ["How many sub chunks equals a main?","4","2","3"],

      ["How many maps are there as of date 11/18/2018","22","21","23"],

      ["When was Splatoon 1 released?","May27th2015","May26th2015","May28th2015"],

      ["When was Splatoon 2 released?","July22th2018","July23th2018","July21th2018"],

      ["What weapon require's no skills?","Blaster","Luna Blaster","Clash Blaster"],

      ["Predict the year Splatoon 3 will come out.","2020","2022","2021"]
];


function displayQuestion() {

	//display randomized question
	i++;
	$('#Question').html(questions[i][0]);

	//correct answer
	correctAns = questions[i][3]; 	
	
	//randomize the answers in array
	i2 = Math.floor(Math.random() * 3 + 1);
	i3 = 0; 
		for (let y = i2; y < 4; y++) {
			Ans[i3] = (questions[i][y]);
			i3++
		};
		for (let y = 1; y < i2; y++) {
			Ans[i3] = (questions[i][y]);
			i3++
		};
	//display randomized answers
	for (let y = 1; y < 4; y++) {
	 		$('#ans' + y).html(Ans[y - 1])
	};
	
	timer();
};

function timer() {
    tim = time + 1;
    clearInterval(intervalId);			
      intervalId = setInterval(decrement, 1000);
};
function decrement() {
    tim--;

    $("#timer").html(tim);
    if (tim === 0) {
        wrongAnsTotal++;
        clearInterval(intervalId);
        nextQuestion();
    };
};

function nextQuestion() {
	i++;
	scoreboard();
}
function scoreboard() {
	if (i >= questions.length) {
		clearInterval(intervalId);
		score();
	}
	
	else {
		displayQuestion(); 
	};
};

function score() {
	$('#scoreBoard').animate({opacity: '1'});
	$('#rightAns').html(rightAnsTotal);
	$('#wrongAns').html(wrongAnsTotal);
	
};

$('.ans').on('click', check);

function check(){
	console.log(event.target.innerHTML)
	const userAns = event.target.innerHTML;
	if(userAns === correctAns) {
		rightAnsTotal++
		nextQuestion();
	} else {
		wrongAnsTotal++;
		nextQuestion();	
	}
}

