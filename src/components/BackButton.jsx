import { Link } from "react-router-dom"

function BackButton() {
  return (
    <div>
        <button className="text-white bg-orange-900 hover:bg-amber-950 block mx-auto mt-3 mb-4 px-3 pb-1 rounded-full">
          <Link to="/">နောက်သို့</Link>
        </button>
    </div>
  )
}

export default BackButton