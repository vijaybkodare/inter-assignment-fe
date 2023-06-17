import React from "react";
import EmployeeEntry from "./employee.entry.component";
import EmployeeList from "./employee.list.component";

const Employee = () => {
    return (
        <React.Fragment>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Employee</h5>
                    <EmployeeEntry/>
                    <br></br>
                    <EmployeeList/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Employee;
