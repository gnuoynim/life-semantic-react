import {useRoutes} from "react-router-dom";
import IndexPage from "@pages/IndexPage";
import WebLayout from "@layouts/web/WebLayout";
import TotalLayout from "@layouts/web/TotalLayout";
import HeaderComponent from "@/components/head/Header";
import Schedule from "@/pages/Schedule";
import AnotherPage from "@pages/AnotherPage";
import LostPassword from "@/pages/LostPassword";
import SurveyDeStress from "@/pages/SurveyDestress";
import SurveyBefore from "@/pages/SurveyBefore";
import Program from "@/pages/Program";
import BookProgram from "@/pages/BookProgram";
import ProgramInfo from "@/pages/ProgramInfo";
import ProgramList from "@/pages/ProgramList";
import ReservationList from "@/pages/ReservationList";
import Pain from "@/pages/Pain";
import Tired from "@/pages/Tired";
import Survey from "@/pages/Survey";
import Join from "@pages/Join";
import LostId from "@pages/LostId";
import ISI from "@/pages/ISI";
import NCCN from "@/pages/NCCN";
import Account from "@/pages/Account";
import Modal from "@/pages/Modal";
import DeleteAccount from "@/pages/DeleteAccount";
import ForestList from "@/pages/ForestList";
import ForestContent from "@/pages/ForestContent";
import JoinModify from "@/pages/JoinModify";
import Modify from "@/pages/Modify";
import ModifyInformation from "@/pages/ModifyInformation";
import SurveyToday from "@/pages/SurveyToday";
import React from "react";

function Router() {
    const routes = [
        {
            path: '/',
            children: [
                {
                    path: '',
                    element: <IndexPage/>,
                },
            ],
        },
        {
            path: 'program',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <Program/>,
                },
            ],
        },
        {
            path: 'forest',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <ForestContent/>,
                },
            ],
        },
        {
            path: 'survey',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <Survey/>,
                },
            ],
        },
    ];
    return useRoutes(routes);
}

export default Router;