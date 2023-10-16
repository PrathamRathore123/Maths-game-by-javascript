let checkAnswerButton=document.getElementById('check')
let input1=document.getElementById('input1')
let input2=document.getElementById('input2')
let userInput=document.getElementById('userInput')
let operator_element=document.getElementById('operator')
let score =document.getElementById('score')
let user_score=0 
let count_down=50000
let count_down_element=document.getElementById('countDown')
count_down_element.innerHTML=count_down
let inputted=false


function randomNum(){
return Math.ceil(Math.random()*50)
}
function randomOperator(){
let operators=['-','+',]
let randOp=operators[Math.floor(Math.random()*operators.length)]
return randOp    
}
randomOperator()
randomNum()
function display() {
let num1 =randomNum()
let num2 =randomNum()
let operator =randomOperator()
let finalAnswer=eval(num1+operator+num2)
operator_element.innerHTML=operator
input1.value=num1
input2.value=num2
if (operator=='%' && num1<num2) {
input1.value=num2
input2.value=num1
}
if (finalAnswer>200 || finalAnswer<0) {
display()
}
}
display()
function validate() {
let sum = parseInt(input1.value)+parseInt(input2.value)
let correct_answer=eval (input1.value+operator_element.innerHTML+input2.value)
let user_value = parseFloat(userInput.value)
if (user_value == correct_answer) {
display()
user_score++
score.innerHTML=`Score:<br>${user_score}`
}
else if(user_value==''){
    alert('Enter a value')
}
else{
    alert(`Incorrect, it was ${correct_answer}`)
    display()
    user_score --
    score.innerHTML=`Score: ${user_score}`
    if(user_score<0){
        alert("score can't be negative,game over!")
        location.reload()
    }
}
userInput.value=""
}
function runInterval() {
let timerInterval = setInterval(()=>{
count_down -=100
count_down_element.innerHTML=count_down
if (count_down== -100) {
    alert(`Game over. you scored ${user_score} points`)
    location.reload()
    }
},100)

}
checkAnswerButton.addEventListener('click',validate)
userInput.addEventListener('keyup',(e)=>{
if (!inputted){
runInterval()
inputted=true
}
if (e.keyCode ==13) {
validate()

}
})