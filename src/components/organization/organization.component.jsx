import React from "react";
import OrganizationEntry from "./organization.entry.component";
import OrganizationList from "./organization.list.component";

const Organization = () => {
    return (
        <React.Fragment>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Organization</h5>
                    <OrganizationEntry/>
                    <br></br>
                    <OrganizationList/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Organization;
