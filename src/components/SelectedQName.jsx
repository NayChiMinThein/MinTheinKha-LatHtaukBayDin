/* eslint-disable react/prop-types */
function SelectedQName({questions, questionNo}) {
    const findQuestionName = questions.find(question => question.questionNo === +questionNo).questionName

  return (
    <div>
        <h3 className="text-center mx-6 md:mx-32 text-amber-950 mt-2 lg:mt-4">
            {findQuestionName}
        </h3>
    </div>
  )
}

export default SelectedQName