import React from "react";
import {useRoutes} from "react-router-dom";
import Index from "@/pages/Index";
import TotalLayout from "@layouts/web/TotalLayout";
import Schedule from "@pages/account/Schedule";
import LostPassword from "@pages/login/LostPassword";
import SurveyDeStress from "@pages/survey/SurveyDestress";
import SurveyBefore from "@pages/survey/SurveyBefore";
import Program from "@pages/program/Program";
import BookProgram from "@pages/program/BookProgram";
import ProgramInfo from "@pages/program/ProgramInfo";
import ProgramList from "@pages/program/ProgramList";
import ReservationList from "@pages/account/ReservationList";
import Pain from "@pages/survey/Pain";
import Tired from "@pages/survey/Tired";
import Survey from "@pages/survey/Survey";
import Join from "@pages/join/Join";
import LostId from "@pages/login/LostId";
import ISI from "@pages/survey/ISI";
import NCCN from "@pages/survey/NCCN";
import Account from "@pages/account/Account";
import DeleteAccount from "@pages/account/DeleteAccount";
import ForestList from "@pages/forest/ForestList";
import ForestContent from "@pages/forest/ForestContent";
import JoinModify from "@pages/login/JoinModify";
import Modify from "@pages/account/Modify";
import ModifyInformation from "@pages/account/ModifyInformation";
import SurveyToday from "@pages/survey/SurveyToday";
import Policy from "@pages/join/Policy";
import Login from "@pages/login/Login";

function Router() {
    const routes = [
        {
            path: '/',
            children: [
                {
                    path: '',
                    element: <Index/>,
                },
            ],
        },
        {
            path: 'login',
            children: [
                {
                    path: '',
                    element: <Login/>,
                },
            ],
        },
        {
            path: 'password',
            children: [
                {
                    path: '',
                    element: <LostPassword/>,
                },
            ],
        },
        {
            path: 'joinModify',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <JoinModify/>,
                },
            ],
        },
        {
            path: 'modify',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <Modify/>,
                },
            ],
        },
        {
            path: 'myPage',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <ModifyInformation/>,
                },
            ],
        },
        {
            path: 'main',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <Program/>,
                },
            ],
        },
        {
            path: 'program',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <ProgramList/>,
                },
            ],
        },
        {
            path: 'programView',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <ProgramInfo/>,
                },
            ],
        },
        {
            path: 'forest',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <ForestList/>,
                },
            ],
        },
        {
            path: 'forestView',
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
        {
            path: 'surveyBefore',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <SurveyBefore/>,
                },
            ],
        },
        {
            path: 'surveyToday',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <SurveyToday/>,
                },
            ],
        },
        {
            path: 'deStress',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <SurveyDeStress/>,
                },
            ],
        },
        {
            path: 'pain',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <Pain/>,
                },
            ],
        },
        {
            path: 'tired',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <Tired/>,
                },
            ],
        },
        {
            path: 'schedule',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <Schedule/>,
                },
            ],
        },
        {
            path: 'bookProgram',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <BookProgram/>,
                },
            ],
        },
        {
            path: 'reservation',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <ReservationList/>,
                },
            ],
        },
        {
            path: 'join',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <Join/>,
                },
            ],
        },
        {
            path: 'lostId',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <LostId/>,
                },
            ],
        },
        {
            path: 'isi',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <ISI/>,
                },
            ],
        },
        {
            path: 'nccn',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <NCCN/>,
                },
            ],
        },
        {
            path: 'account',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <Account/>,
                },
            ],
        },
        {
            path: 'deleteAccount',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <DeleteAccount/>,
                },
            ],
        },
        {
            path: 'policy',
            element: <TotalLayout/>,
            children: [
                {
                    path: '',
                    element: <Policy/>,
                },
            ],
        },
    ]
    return useRoutes(routes);
}

export default Router;