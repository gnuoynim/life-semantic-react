import BoardWritePage from "@pages/BoardWritePage";
import IndexPage from "@pages/IndexPage";
import Schedule from "./pages/Schedule";
import AnotherPage from "@pages/AnotherPage";
import LostPassword from "./pages/LostPassword";
import SurveyDeStress from "./pages/SurveyDestress";
import SurveyBefore from "./pages/SurveyBefore";
import Program from "./pages/Program";
import BookProgram from "./pages/BookProgram";
import ProgramInfo from "./pages/ProgramInfo";
import ProgramList from "./pages/ProgramList";
import Pain from "./pages/Pain";
import Tired from "./pages/Tired"
import Survey from "./pages/Survey";
import Join from "@pages/Join";
import LostId from "@pages/LostId";
import ISI from "./pages/ISI";
import NCCN from "./pages/NCCN";
import ForestList from "./pages/ForestList";
import ForestContent from "./pages/ForestContent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "../node_modules/scss-reset/_reset.scss";
import "@assets/sass/style.scss";
import SurveyToday from "./pages/SurveyToday";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<IndexPage/>}/>
                <Route path="schedule" element={<Schedule/>}/>
                <Route path="programList" element={<ProgramList/>}/>
                <Route path="programInfo" element={<ProgramInfo/>}/>
                <Route path="forestList" element={<ForestList/>}/>
                <Route path="forestContent" element={<ForestContent/>}/>
                <Route path="Tired" element={<Tired/>}/>
                <Route path="ISI" element={<ISI/>}/>
                <Route path="NCCN" element={<NCCN/>}/>
                <Route path="pain" element={<Pain/>}/>
                <Route path="program" element={<Program/>}/>
                <Route path="bookProgram" element={<BookProgram/>}/>
                <Route path="surveyToday" element={<SurveyToday/>}/>
                <Route path="deStress" element={<SurveyDeStress/>}/>
                <Route path="survey" element={<Survey/>}/>
                <Route path="surveyBefore" element={<SurveyBefore/>}/>
                <Route path="join" element={<Join/>}/>
                <Route path="id" element={<LostId/>}/>
                <Route path="password" element={<LostPassword/>}/>
                <Route path="another" element={<AnotherPage/>}/>
                <Route path="board/write" element={<BoardWritePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
