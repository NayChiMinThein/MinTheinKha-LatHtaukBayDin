/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./QuestionsPage.css";
import LogoTitle from "../components/LogoTitle";

function QuestionsPage({data}) {
  const {questions} = data

  return (
    <div>
      <LogoTitle/>

      <div className="mt-6 md:mt-8 bg-slate-50 mx-4 md:mx-14 max-h-96 px-5 py-2 md:px-6 md:py-3 overflow-y-scroll custom-scrollbar">
          <ul className="text-amber-950">
            {questions.map(question => (
              <li 
                key={question.questionNo}
                className="py-3 md:py-4 border border-transparent border-b-slate-200 hover:text-amber-800 " 
              >
                <span className="me-2">{question.questionNo}.</span>
                <Link to={`/question/${question.questionNo}`}>{question.questionName}</Link>
            </li>
            ))}

          </ul>
      </div>
    </div>
  )
}

export default QuestionsPage