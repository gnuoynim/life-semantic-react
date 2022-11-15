import {useRoutes} from "react-router-dom";
import IndexPage from "@pages/IndexPage";
import TotalLayout from "@layouts/web/TotalLayout";

import Schedule from "@/pages/Schedule";
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
            path: 'home',
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
            path: 'destress',
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
    ]
    return useRoutes(routes);
}

export default Router;