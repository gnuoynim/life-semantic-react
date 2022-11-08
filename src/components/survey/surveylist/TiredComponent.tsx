import React, { useEffect, useState } from "react";
import TiredSurveyComponent01 from "./tired/TiredSurveyComponent01";
import InputElement from "@/components/elements/InputElement";
import useUserHttp from "@hooks/queries/useUserQuery";
import { ListInterface } from "@interfaces/listInterface";
import { UserInterface } from "@interfaces/userInterface";
import $ from "jquery";

const TiredComponent = () => {
  const dots = ["foreHead", ""];
  const [painColor, setPainColor] = useState<number[]>([]);

  useEffect(() => {

  }, []);

  return (
    <React.Fragment>
      <TiredSurveyComponent01/>
    </React.Fragment>
  );
};

export default TiredComponent;
