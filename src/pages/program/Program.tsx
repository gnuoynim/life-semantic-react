import React from "react";
import BookComponent from "@components/program/book/BookComponent";
import GoodByeComponent from "@components/program/GoodByeProgramComponent";
import GoodSleepComponent from "@components/program/GoodSleepProgramComponent";
import BannerComponent from "@components/program/banner/BannerComponent";
import BookProgram from "./BookProgram";
import HeaderComponent from "@components/head/Header";
import {userState} from '@states/userState';
import {useRecoilValue} from "recoil";

const Program = () => {
    const user = useRecoilValue(userState);
    return (
        <React.Fragment>
            <HeaderComponent/>
            <div className="programName">
                {user.accessToken &&
                <BookProgram/>
                }
                <GoodByeComponent/>
                <GoodSleepComponent/>
            </div>
            <BannerComponent/>
            <BookComponent/>
        </React.Fragment>
    );
};

export default Program;
