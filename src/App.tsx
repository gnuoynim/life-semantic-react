import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/scss-reset/_reset.scss";
import "@assets/sass/style.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./router";

const App = () => {
  return (
    <BrowserRouter>
      {/*<Routes>*/}
      {/*  <Route path="" element={<IndexPage />} />*/}
      {/*  <Route path="joinModify" element={<JoinModify />} />*/}
      {/*  <Route path="modal" element={<Modal/>} />*/}
      {/*  <Route path="reservation" element={<ReservationList/>} />*/}
      {/*  <Route path="modify" element={<Modify/>} />*/}
      {/*  <Route path="modifyInformation" element={<ModifyInformation/>} />*/}
      {/*  <Route path="schedule" element={<Schedule />} />*/}
      {/*  <Route path="deleteAccount" element={<DeleteAccount />} />*/}
      {/*  <Route path="account" element={<Account />} />*/}
      {/*  <Route path="programList" element={<ProgramList />} />*/}
      {/*  <Route path="programInfo" element={<ProgramInfo />} />*/}
      {/*  <Route path="forestList" element={<ForestList />} />*/}
      {/*  <Route path="forestContent" element={<ForestContent />} />*/}
      {/*  <Route path="Tired" element={<Tired />} />*/}
      {/*  <Route path="ISI" element={<ISI />} />*/}
      {/*  <Route path="NCCN" element={<NCCN />} />*/}
      {/*  <Route path="pain" element={<Pain />} />*/}
      {/*  <Route path="program" element={<Program />} />*/}
      {/*  <Route path="bookProgram" element={<BookProgram />} />*/}
      {/*  <Route path="surveyToday" element={<SurveyToday />} />*/}
      {/*  <Route path="deStress" element={<SurveyDeStress />} />*/}
      {/*  <Route path="survey" element={<Survey />} />*/}
      {/*  <Route path="surveyBefore" element={<SurveyBefore />} />*/}
      {/*  <Route path="join" element={<Join />} />*/}
      {/*  <Route path="id" element={<LostId />} />*/}
      {/*  <Route path="password" element={<LostPassword />} />*/}
      {/*  <Route path="another" element={<AnotherPage />} />*/}
      {/*  <Route path="board/write" element={<BoardWritePage />} />*/}
      {/*</Routes>*/}
      <Router />
    </BrowserRouter>
  );
};

export default App;
