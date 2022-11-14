import React from "react";
import { Link } from "react-router-dom";


const BookProgram = () => {

  return (
      <div className="bookProgram">
        <p>
          <span>김풀숲님, </span>
          오늘 설문은 하셨나요?
        </p>
        <Link to='/survey' className="surveyLink">
          설문하러가기 {'>'}
        </Link>
      </div>
  );
};

export default BookProgram;
