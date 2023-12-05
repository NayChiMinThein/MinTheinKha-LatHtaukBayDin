/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import LogoTitle from "../components/LogoTitle";
import SelectedQName from "../components/SelectedQName";

function AnswersPage({data}) {
  const {numberList, questions, answers} = data
  const {questionNo} = useParams()

  //Get Random Answer For Selected Question
  let randomIndex;
  const getRandomAnswer = () => {
    const answersForQuestion = answers.filter(answer => answer.questionNo === +questionNo)
    randomIndex = Math.floor(Math.random() * answersForQuestion.length);
    return answersForQuestion[randomIndex].answerResult;
  }

  const navigate = useNavigate()
  const handleClick = () => {
    getRandomAnswer()
    navigate(`/answer/${questionNo}/${randomIndex + 1}`)
  }

  return (
    <div>
      <LogoTitle/>
      <BackButton/>
      <SelectedQName questions={questions} questionNo={questionNo}/>

      <div className="grid grid-cols-9 gap-1 md:gap-2 max-w-xs mx-auto my-5">
        {numberList.map(number => (
          <div 
            key={Math.random()}
            onClick={handleClick}
            className="text-white bg-orange-900 hover:bg-amber-950 h-8 md:w-8 flex justify-center items-center cursor-pointer"
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnswersPage