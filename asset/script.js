var timeLeft = 120;
var timerTextEL = document.querySelector(".timer_sec")
var timerEL = document.querySelector("#timer")




const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");


start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");//show the quiz box
    startTimer();
    showQuestions(0);
    queCounter(1);
}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

//if next button is clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb );
    } else{
        console.log("Questions completed");
    }

}

//the questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].numb+ "." + questions[index].question + '</span>';
    let option_tag = '<div class=option>'+ questions[index].option[0] +'<span></span></div>'
                  + '<div class=option>'+ questions[index].option[1] + '<span></span></div>'
                  + '<div class=option>' + questions[index].option[2] + '<span></span></div>'
                  + '<div class=option>' + questions[index].option[3] + '<span></span></div>';
    console.log(option_tag);
       que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}

function queCounter(index){
const bottom_ques_counter =quiz_box.querySelector(".total_que");
let totalQuesCountTag = '<span><p>'+ que_count +'</p>of<p>' + questions.length + '</p>Questions</span>';
bottom_ques_counter.innerHTML = totalQuesCountTag;

 }

  
 function startTimer(){
     console.log("Anything")
    var timer = setInterval(function(){
      
        if(timeLeft > 1){
            timerTextEL.textContent = timeLeft
            timeLeft--;
        }
    },1000);
    
}