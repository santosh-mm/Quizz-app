import { useState } from "react";
function App(){
  const questions=[
    {
      questionText:"which is the frontend frame work used for creating SPA?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"Mongo Db",isCorrect:false},
        {answerText:"React",isCorrect:true},
      ],
    },
    {
      questionText:"React is a?",
      answerOption:[
        {answerText:"library of js",isCorrect:true},
        {answerText:"frame work of js",isCorrect:false},
        {answerText:"Runtime of js",isCorrect:false},
        {answerText:"Data base",isCorrect:false},

      ]
    },
    {
      questionText:"express js is a?",
      answerOption:[
        {answerText:"library of js",isCorrect:false},
        {answerText:"frame work of Node js",isCorrect:true},
        {answerText:"Runtime of js",isCorrect:false},
        {answerText:"Data base of js",isCorrect:false},
      ]
    },
    {
      questionText:"what is MONGO DB?",
      answerOption:[
        {answerText:"library of js",isCorrect:false},
        {answerText:"frame work of Node js",isCorrect:false},
        {answerText:"Runtime of js",isCorrect:false},
        {answerText:"Data base",isCorrect:true},
      ]
    },
    {
      questionText:"props in react reffers to?",
      answerOption:[
        {answerText:"proper",isCorrect:false},
        {answerText:"preposition",isCorrect:false},
        {answerText:"purpose",isCorrect:false},
        {answerText:"properties",isCorrect:true},
      ]
    },
    {
        questionText:"props used to?",
        answerOption:[
          {answerText:"add data",isCorrect:false},
          {answerText:"remove data",isCorrect:false},
          {answerText:"update data ",isCorrect:false},
          {answerText:"pass data",isCorrect:true},
        ]
    },
    {
      questionText:"Node built on?",
      answerOption:[
        {answerText:"microsoft edge",isCorrect:false},
        {answerText:"express js",isCorrect:false},
        {answerText:"spider monkey ",isCorrect:false},
        {answerText:"google v8 engine",isCorrect:true},
      ]
    },
    {
    questionText:"states used to?",
    answerOption:[
      {answerText:"add data",isCorrect:false},
      {answerText:"remove data",isCorrect:false},
      {answerText:"update data ",isCorrect:true},
      {answerText:"delete",isCorrect:false},
     ]
    },
    {
  questionText:"React used in?",
  answerOption:[
    {answerText:"front end",isCorrect:true},
    {answerText:"server side",isCorrect:false},
    {answerText:"in data base ",isCorrect:false},
    {answerText:"none of the above",isCorrect:false},
     ]
    },
    {
  questionText:"abbrivation of M IN MERN stack?",
  answerOption:[
    {answerText:"MONGO DB",isCorrect:true},
    {answerText:"MANGO",isCorrect:false},
    {answerText:"MULTIPLE",isCorrect:false},
    {answerText:"none of the above",isCorrect:false},
     ]
    },



  ]


   
    const[currentQuestion,setCurrentQuestion]=useState(0)
    const[showScore,setShowScore]=useState(false)
    const[score,setScore]=useState(0)
    const handle=(isCorrect)=>{
      if(isCorrect)
      {
        setScore(score+1)
      }
      const nextQuestion=currentQuestion+1;
      if(nextQuestion<questions.length){
        setCurrentQuestion(nextQuestion)
      }
      else{
        setShowScore(true)
      }
    }
return(
  <div className="app">
    {showScore ? (
    <div className="score-section">
    you scored {score} out of {questions.length}
  </div>
  ):(
    <>
    <div className="question-section">
      <div className="question-count">
        <span>question {currentQuestion+1}</span>/{questions.length}
      </div>
      <div className="question-text">{questions[currentQuestion].questionText}</div>
    </div>
    <div className="answer-section">
      {questions[currentQuestion].answerOption.map((answerOption)=>(
        <button onClick={()=>handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
      ))}

    </div>
  </>
  

      

        

      

    
  
  )}
  </div>  
    
  
)
}

export default App
