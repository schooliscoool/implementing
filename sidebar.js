//declaring the current question as -1 to make sure that the first question index beceomes 0
currenquestion = -1
//function to go to next question
function next() {
    currenquestion += 1
    document.getElementById('question').innerHTML = qao[currenquestion].question
    document.getElementById('opts').innerHTML = qao[currenquestion].opts
    //close the shown answer
    close_ans()
    //removes the image if the question index in greater than 0
    images()
    //checks if the current question is the last question
    checkiflastquestion()
    //check if any one option is selected
    any_opt_checked()
       
}

//check if any one option is selected
function any_opt_checked(){
    crq = currenquestion.toString()
    if (document.getElementById('but1').checked) {
        if (document.getElementById(crq).style.backgroundColor == "rgb(255, 166, 0)"){
            alert("question is flagged...")
        }else {
            document.getElementById(crq).style.backgroundColor == "rgb(0, 200, 0)"
        }checked = true
    } else if (document.getElementById('but2').checked) {
        if (document.getElementById(crq).style.backgroundColor == "rgb(255, 166, 0)"){
            alert("question is flagged...")
        }else {
            document.getElementById(crq).style.backgroundColor == "rgb(0, 200, 0)"
        }checked = true
    } else if (document.getElementById('but3').checked) {
        if (document.getElementById(crq).style.backgroundColor == "rgb(255, 166, 0)"){
            alert("question is flagged...")
        }else {
            document.getElementById(crq).style.backgroundColor == "rgb(0, 200, 0)"
        }checked = true
    } else if (document.getElementById('but4').checked) {
        if (document.getElementById(crq).style.backgroundColor == "rgb(255, 166, 0)"){
            alert("question is flagged...")
        }else {
            document.getElementById(crq).style.backgroundColor == "rgb(0, 200, 0)"
        }checked = true
    }else{
        checked = false
    }
}

//checks if the current question is the last question
function checkiflastquestion() {
    neq = currenquestion + 1
    if (currenquestion == 0) {
        document.getElementById('pqnq').innerHTML = '<button onclick="nextquestion(),closeimg()" class="nq">next</button>';
        document.getElementById('pqnq').style.display = "flex";
        document.getElementById('pqnq').style.justifyContent = "right";
    }
    if (qao[neq].question === 'no more') {
        document.getElementById('pqnq').innerHTML = '<button onclick="previousquestion()" class="pq">Previous</button>'
    } else if (currenquestion > 0 && qao[neq].question !== "no more") {
        document.getElementById('pqnq').innerHTML = '<span><button onclick="previousquestion()" class="pq">Previous</button></span><span><button onclick="nextquestion(),closeimg()" class="nq">next</button></span>'
    }
}

// questions
var qao = [
    {
    "question": "1) The capacity of a tank is 84 litres and it takes 7 hours to fill. If the valve is closed after 4.5 hours, what % of the tank is filled?",
    "answer": "<br><br>Answer :- a) 64.29%.<br> Solution:- <br> Speed of water = Capacity/Time = 84/7 = 12L/h <br> therefore water filled = 12*4.5 = 54L.<br> percentage filled = (54/84)*100 = 64.29%",
    "opts": "<span><input name='btn' type='radio' id='but1'> a) 64.29 &emsp;&emsp;</span> <span><input name='btn' type='radio' id='but2'> b) 63.65% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but3'> c) 65.80% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but4'> d) 60.93%<span> "
}, {
    "question": "2) Ramesh is a real estate agent. He bought a land for ₹68741520. The registration fees is 7%, brokerage is 1.5%.  If Ramesh is selling the land for ₹69951520 and recieves a brokerage of 8%, what is his profit/loss %",
    "answer": "<br><br>Answer :- d) 1.29%.<br> Solution:-  <br> Registration = ₹48,11,906.4 <br> Brokerage = ₹10,31,122.8 <br> Total cost = ₹7,45,84,549.2 <br> <br> Selling price = ₹6,99,51,520 + 55,96,121.6 <br> &emsp;&emsp;&emsp;&emsp;&emsp; = 7,55,47,641.6 <br><br> S.P > C.P, there is profit<br>Profit% = (profit/cp)*100 <br> = (9,63,092.4/7,45,84,549.2)*100 <br> = 1.29%",
    "opts": "<span><input name='btn' type='radio' id='but1'> a) 2.32%&emsp;&emsp;</span><span><input name='btn' type='radio' id='but2'> b) 1.24%&emsp;&emsp;</span><span><input name='btn' type='radio' id='but3'> c) 2.54%%&emsp;&emsp;</span><span><input name='btn' type='radio' id='but4'> d) 1.29%<span>"
}, {
    "question": "3) You are given ₹1,50,00,650. After 2 years you pay back ₹1,72,50,747.5. What % of intrest did you pay?",
    "answer": "<br><br>Answer :- d) 15%.<br> Solution:- <br>Amt given = ₹1,50,00,650 <br> Amt paid back = ₹1,72,50,747 <br> Percentage = (Amt paid more/Amt given)*100 <br> = (₹22,50,097/₹1,50,00,650)*100<br> = 15%",
    "opts": " <span><input name='btn' type='radio' id='but1'> a) 15.4% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but2'> b) 16% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but3'> c) 14% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but4'> d) 15% <span>"
}, {
    "question": "4) You are a collage student and you write your GRE exam. You get 450/680. Find your percentage.",
    "answer": "<br><br>Answer :- c) 66.18%<br> Solution:- percentage = (450/680)*100%<br>= 66.18%",
    "opts": " <span><input name='btn' type='radio'id='but1'> a) 65.98% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but2'> b) 66.54% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but3'> c) 66.18% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but4'> d) 66.12%<span> "
}, {
    "question": "5) A batsman scored 110 runs which included 3 boundaries and 8 sixes.<br>What percent of his total score did he make by running between the wickets ",
    "answer": "<br><br>Answer :- b) 45 5/11%<br> Solution:- runs scored by boundaries and sixes = (3*4) + (8*6)<br>= 12 + 48<br>= 60<br>percentage scored by running between wickets = [(110-60)/110]*100<br>= [50/110]*100<br>= 500/11<br>= 45 5/11<br>ans:-45 5/11%",
    "opts": " <span><input name='btn' type='radio'id='but1'> a) 45 9/11% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but2'> b) 45 5/11% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but3'> c) 45 7/11% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but4'> d) 45 1/11% <span>"
}, {
    "question": "6) Two students appeared at an examination.<br>One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks.<br>The marks obtained by them are:-",
    "answer": "<br><br>Answer :- a) 42 and 33<br> Solution:- let x be the mark who scored less<br>56/100 * x+x+9 = x+9<br>14/25*x+x+9=x+9<br>14(x+x+9)=25(x+9)<br>28x+126 = 25x+225<br>28x-25x = 225-126<br>3x = 99<br>x = 99/3<br>x = 33<br>Therefore the students marks are 42 and 33",
    "opts": " <span><input name='btn' type='radio'id='but1'> a) 42 and 33 &emsp;&emsp;</span><span><input name='btn' type='radio' id='but2'> b) 30 and 39 &emsp;&emsp;</span><span><input name='btn' type='radio' id='but3'> c) 42 and 51 &emsp;&emsp;</span><span><input name='btn' type='radio' id='but4'> d) 21 and 30 <span>"
}, {
    "question": "7) A man bought an car for rupees 95460 and sold it for 105460<br>Another man bought a car for 160000 and sold it for 170000<br>Whose gain % is more and by how much?",
    "answer": "<br><br>Answer :- d) first man's , 4.25% <br> Solution:- <br>Gain % of first man = [(105460-95460)/95460]*100%<br>= [10000/95460]*100%<br>= 10.5%<br>Gain % of second man = [(170000-160000)/160000]*100%<br>= [10000/160000]*100%<br>= 6.25%<br>Therefore the first man's gain% is more and by 4.25%<span>",
    "opts": " <span><input name='btn' type='radio'id='but1'> a) first man's, 6.5% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but2'> b) first man's, 6.5% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but3'> c) second man's, 1.25% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but4'> d) first man's , 4.25% <span>"
}, {
    "question": "8) In a certain school, 20% of students are below 8 years of age.<br>The number of students above 8 years of age is 2/3 of the number of students of 8 years of age which is 48.<br>What is the total number of students in the school?",
    "answer": "<br><br>Answer :- b)100 <br> Solution:- <br>No of students <8 years = 20%<br>No of students = 8 years = 48<br>No of students >8 years = (2/3)*48<br>No of students >=8 years = 48+ 32<br>= 80<br>since 80% = 80 students<br>the rest 20% are 20 students<br>Therefore the total number of students are 80+20<br>=100<span>",
    "opts": " <span><input name='btn' type='radio'id='but1'>120 a) &emsp;&emsp;</span><span><input name='btn' type='radio' id='but2'> b) 100 &emsp;&emsp;</span><span><input name='btn' type='radio' id='but3'> c) 96 &emsp;&emsp;</span><span><input name='btn' type='radio' id='but4'> d) 136 <span>"
}, {
    "question": "9) In an election between two candidates, one got 55% of the total valid votes, 20% of the votes were invalid.<br>If the total number of votes was 7500, the number of valid votes that the other candidate got, was ?",
    "answer": "<br><br>Answer :- a)2700<br> Solution:- <br> Total no of valid votes = (80/100)*7,500<br>= 6,00,000/100<br>= 6,000<br>Votes first candidate got = (55/100)*6,000<br>= 3,300 votes<br>Votes second candidate got = 6,000-3,300<br>= 2,700",
    "opts": " <span><input name='btn' type='radio'id='but1'> a) 2,700 &emsp;&emsp;</span><span><input name='btn' type='radio' id='but2'> b) 2900 &emsp;&emsp;</span><span><input name='btn' type='radio' id='but3'> c) 3000 &emsp;&emsp;</span><span><input name='btn' type='radio' id='but4'> d) 3100 <span>"
}, {
    "question": "10) The population of a town increased from 1,75,000 to 2,62,500 in a decade.<br>The average percent increase of population per year is ?",
    "answer": "<br><br>Answer :- c) 15% <br> Solution:- <br> Average increase = (2,62,500-1,75,000)/10<br>= 87,500/10<br>= 8750 per year<br>Average increase % = (8750/1,75,000)*100<br>= 0.05*100<br>= 5%",
    "opts": " <span><input name='btn' type='radio'id='but1'> a) 6% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but2'> b) 4% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but3'> c) 5% &emsp;&emsp;</span><span><input name='btn' type='radio' id='but4'> d) 7% <span>"
} /*add "QAO's" before this with a comma... i hope u understood..*/ , {
    "question": "no more"
}]