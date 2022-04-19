import React, { useState } from "react";
import Request from "../../../../../components/RequestTable/AdminTable/index";
import Header from "../../../../../components/Header/Header";
import Sidebar from "../../../../../components/Sidebar/Sidebar";

const RequestAdminViewList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div>
                <h1 className="text-black font-bold px-10 pt-5 mt-4 mb-6 text-5xl">
                    Requests
                </h1>
                <Request />
            </div>
        </>
    );
};

export default RequestAdminViewList;
