import { BrowserRouter, Route, Routes } from "react-router-dom";

import QuestionsPage from "./pages/QuestionsPage";
import AnswersPage from "./pages/AnswersPage";
import ResultPage from "./pages/ResultPage";

import jsonData from "../data/baydin.json"
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionsPage data={jsonData}/>}/>
          <Route path="/question/:questionNo" element={<AnswersPage data={jsonData}/>}/>
          <Route path="/answer/:questionNo/:answerNo" element={<ResultPage data={jsonData}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}