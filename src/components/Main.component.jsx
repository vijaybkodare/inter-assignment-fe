import React, { useEffect, useState } from "react";
import Employee from "./employee/employee.component";
import Organization from "./organization/organization.component";

const Main = () => {
    const [activeForm, setActiveForm] = useState('employee');
    
    return (
        <React.Fragment>
            <div class="container px-4">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Interaction</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" onClick={()=> setActiveForm('employee')}>Employee</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" onClick={()=> setActiveForm('organization')}>Organization</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="container px-4">
                {activeForm == "employee"? <Employee/> : null}
                {activeForm == "organization"? <Organization/>: null}
            </div>
        </React.Fragment>
    );
};

export default Main;
