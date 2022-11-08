import BoardWritePage from "@pages/BoardWritePage";
import IndexPage from "@pages/IndexPage";
import Schedule from "./pages/Schedule";
import AnotherPage from "@pages/AnotherPage";
import LostPassword from "./pages/LostPassword";
import SurveyDestress from "./pages/SurveyDestress";
import SurveyBefore from "./pages/SurveyBefore";
import Program from "./pages/Program";
import BookProgram from "./pages/BookProgram";
import PrgramInfo from "./pages/ProgramInfo";
import ProgramList from "./pages/ProgramList";
import Pain from "./pages/Pain";
import Tired from "./pages/Tired"
import Survey from "./pages/Survey";
import Join from "@pages/Join";
import LostId from "@pages/LostId";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/scss-reset/_reset.scss";
import "@assets/sass/style.scss";
import SurveyToday from "./pages/SurveyToday";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="schedule" element={< Schedule/>} />
        <Route path="programList" element={< ProgramList/>} />
        <Route path="programInfo" element={<PrgramInfo />} />
        <Route path="tired" element={<Tired />} />
        <Route path="pain" element={<Pain />} />
        <Route path="program" element={<Program />} />
        <Route path="bookProgram" element={<BookProgram />} />
        <Route path="surveyToday" element={<SurveyToday />} />
        <Route path="" element={<SurveyDestress />} />
        <Route path="survey" element={<Survey />} />
        <Route path="surveybefore" element={<SurveyBefore />} />
        <Route path="join" element={<Join />} />
        <Route path="id" element={<LostId />} />
        <Route path="password" element={<LostPassword />} />
        <Route path="index/join" element={<IndexPage />} />
        <Route path="another" element={<AnotherPage />} />
        <Route path="board/write" element={<BoardWritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
