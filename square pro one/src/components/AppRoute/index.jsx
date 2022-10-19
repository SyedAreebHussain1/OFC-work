import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import PlotRequest from "../Pages/PlotRequest";
import ProjectRegistration from "../Pages/ProjectRegistration";
import AddEmpolyee from "../Pages/AddEmpolyee";
import ProjectRequest from "../Pages/ProjectRequest";
import AgencyList from "../Pages/AgencyList";
import SupportConverstion from "../Pages/SupportConverstion";
import CustomerList from "../Pages/CustomerList";
import AgentList from "../Pages/AgentList";
import Settings from "../Pages/Settings";

// import Sitebar from "../Sitebar";


const AppRoute = () => {
    return (
        <BrowserRouter>
        {/* <Sitebar/> */}
            <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/user/plot_request" element={<PlotRequest />} />
                <Route path="/user/add_project" element={<ProjectRegistration />} />
                <Route path="/user/add_user" element={<AddEmpolyee />} />
                <Route path="/user/project_request" element={<ProjectRequest />} />
                <Route path="/user/agency_list" element={<AgencyList />} />
                <Route path="/user/support_chat" element={<SupportConverstion />} />
                <Route path="/user/customer_list" element={<CustomerList />} />
                <Route path="/user/agent_list" element={<AgentList />} />
                <Route path="/user/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoute