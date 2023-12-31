import { useEffect, useState } from "react"


const Trivia = ({data, setStop, questionNumber, setQuestionNumber}) => {

  const [question, setQuestion] = useState(null)
  const [selectAnswer, setSelectAnswer] = useState(null)
  const [className, setClassName] = useState("answer")

  useEffect(() => {
    setQuestion(data[questionNumber - 1])
  },[data, questionNumber])


  const handleClick = (a) =>  {
    setSelectAnswer(a)
    setClassName("answer active")

    setStop(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong")
    })
  }

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map(a=> (
           <div className={selectAnswer === a ? className : "answer"} onClick={()=>handleClick(a)}>{a.text}</div>
        ))}
       
       
      </div>
    </div>
  )
}

export default Trivia
