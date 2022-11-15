import React from "react";
import BookComponent from "@/components/program/book/BookComponent";
import HeaderComponent from "@/components/head/Header";
import DropBoxComponent from "@/components/program/DropBoxComponent";
import {Link} from "react-router-dom";

const ProgramList = () => {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <DropBoxComponent/>
            <div className="banner">
                <Link to={"forest"}>
                    한국산림복지진흥원 <br/>
                    산림치유 프로그램 보러가기
                </Link>
            </div>
            <BookComponent/>
        </React.Fragment>
    );
};

export default ProgramList;
