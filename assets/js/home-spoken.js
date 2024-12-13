var icon = document.querySelector(".ri-mic-ai-line")
var btn1 = document.querySelector("#btn-sp");
var range1 = 0;

btn1.addEventListener("click", function() {
if (range1 == 0) {
  var spoken = document.querySelector("#paragraph").textContent;
  var utterance = new SpeechSynthesisUtterance(spoken);
  speechSynthesis.speak(utterance);
  btn1.innerHTML = "Stop";
  range1 = 1;
  utterance.onend = function() { 
    btn1.innerHTML = "Speak"; 
    range1 = 0;
  };
} else {
  speechSynthesis.cancel();
  btn1.innerHTML = "Speak";
  range1 = 0;
  icon.style = "display : none;"
}
});

var btn2 = document.querySelector("#btn-sp-2");
var range2 = 0;

btn2.addEventListener("click", function() {
if (range2 == 0) {
  var spoken = document.querySelector("#paragraph-2").textContent;
  var utterance = new SpeechSynthesisUtterance(spoken);
  
  speechSynthesis.speak(utterance);
  btn2.innerHTML = "Stop";
  range2 = 1;
  utterance.onend = function() { 
    btn2.innerHTML = "Speak"; 
    range2 = 0;
  };
} else {
  speechSynthesis.cancel();
  btn2.innerHTML = "Speak";
  range2 = 0;
}
});


var btn3 = document.querySelector("#btn-sp-3");
var range3 = 0;

btn3.addEventListener("click", function() {
if (range3 == 0) {
  var spoken = document.querySelector("#paragraph-3").textContent;
  var utterance = new SpeechSynthesisUtterance(spoken);
  speechSynthesis.speak(utterance);
  btn3.innerHTML = "Stop";
  range3 = 1;
  utterance.onend = function() { 
    btn3.innerHTML = "Speak"; 
    range3 = 0;
  };
} else {
  speechSynthesis.cancel();
  btn3.innerHTML = "Speak";
  range3 = 0;
}
});

var btn4 = document.querySelector("#btn-sp-4");
var range4 = 0;

btn4.addEventListener("click", function() {
if (range4 == 0) {
  var spoken = document.querySelector("#paragraph-4").textContent;
  var utterance = new SpeechSynthesisUtterance(spoken);
  speechSynthesis.speak(utterance);
  btn4.innerHTML = "Stop";
  range4 = 1;
  utterance.onend = function() { 
    btn4.innerHTML = "Speak"; 
    range4= 0;
  };
} else {
  speechSynthesis.cancel();
  btn4.innerHTML = "Speak";
  range4 = 0;
}
});



var btn5 = document.querySelector("#btn-sp-5");
var range5 = 0;

btn5.addEventListener("click", function() {
if (range5 == 0) {
  var spoken = document.querySelector("#paragraph-5").textContent;
  var utterance = new SpeechSynthesisUtterance(spoken);
  speechSynthesis.speak(utterance);
  btn5.innerHTML = "Stop";
  range5 = 1;
  utterance.onend = function() { 
    btn5.innerHTML = "Speak"; 
    range5 = 0;
  };
} else {
  speechSynthesis.cancel();
  btn5.innerHTML = "Speak";
  range5 = 0;
}
});