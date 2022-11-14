import React from "react";
import {Outlet} from "react-router-dom";
import WebLayout from "@layouts/web/WebLayout";

function TotalLayout() {
    return (
        <WebLayout>
            <Outlet/>
        </WebLayout>
    )
}

export default TotalLayout;