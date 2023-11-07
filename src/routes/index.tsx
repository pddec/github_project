import React from "react";

import {  
    BrowserRouter,
    Routes, // instead of "Switch"
    Route, } from 'react-router-dom';

import Dashborad from "./../pages/dashbord";
import Repositories from "./../pages/repositories";


const RouteBrowser: React.FC = function configRoutesReact(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  Component={Dashborad} />
                <Route path="/repositories" Component={Repositories} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteBrowser;