import React from "react";
import BookComponent from "@/components/program/book/BookComponent";
import GoodByeComponent from "@/components/program/GoodByeProgramComponent";
import GoodSleepComponent from "@/components/program/GoodSleepProgramComponent";
import BannerComponent from "@/components/program/banner/BannerComponent";
import BookProgram from "./BookProgram";
import HeaderComponent from "../components/head/Header";

const Program = () => {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <div className="programName">
                <BookProgram/>
                <GoodByeComponent/>
                <GoodSleepComponent/>
            </div>
            <BannerComponent/>
            <BookComponent/>
        </React.Fragment>
    );
};

export default Program;
