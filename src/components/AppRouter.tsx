import React from 'react'

import {Routes} from "react-router-dom";
import {Route} from 'react-router'
import {Config} from "./Config/Config";
import {Orders} from "./Orders/Orders";

export const AppRouter = () => {

    return <Routes>
        <Route path="Config" element={Config()} />
        <Route path="Orders" element={Orders()} />
    </Routes>

}

