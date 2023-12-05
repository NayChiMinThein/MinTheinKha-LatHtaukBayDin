/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import LogoTitle from "../components/LogoTitle"
import SelectedQName from "../components/SelectedQName"

function ResultPage({data}) {
  const {questions, answers} = data
  const {questionNo, answerNo} = useParams()
  
  //Find Answer From Selected Question & Selected Answer Number(random)
  const findAnswer = answers.find(answer => answer.questionNo === +questionNo && answer.answerNo === +answerNo)
  return (
    <div>
      <LogoTitle/>
      <SelectedQName questions={questions} questionNo={questionNo}/>

      <div className="bg-slate-50 shadow-lg max-w-sm lg:max-w-md mx-4 md:mx-auto my-6 px-4 lg:px-8 pt-6 md:pt-7 lg:pt-8 pb-2 md:pb-3 lg:pb-4 rounded">
        <p className="text-amber-950 text-center md:pb-1">
          {findAnswer.answerResult} 
        </p>
        <BackButton/>
      </div>
    </div>
  )
}

export default ResultPage