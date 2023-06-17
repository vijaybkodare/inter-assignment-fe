import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveEntryAction, loadEntryAction } from "../../redux/actions/organizationAction"
import SaveCancelButton from "../common/saveCancelButton.component";

const OrganizationEntry = () => {
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.organizationReducer);
    let { entity } = reducer;

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const saveEntry = () => {
        entity.name = name;
        entity.address = address;
        dispatch(saveEntryAction(entity));  
    };

    const cancelEntry = () => {
        dispatch(loadEntryAction({name:'', address:''}));    
    };
    
    useEffect(() => {
        setName(entity.name);
        setAddress(entity.address);
     }, [entity]);

    return (
        <React.Fragment>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Entry</h5>
                    <div class="mb-3 row">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Address</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value={address} onChange={(e)=> setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <SaveCancelButton saveEntry={saveEntry} cancelEntry={cancelEntry}></SaveCancelButton>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OrganizationEntry;
