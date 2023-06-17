import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadEntryAction, loadListAction, deleteEntryAction  } from "../../redux/actions/organizationAction"
import EditDeleteButton from "../common/editDeleteButton.component";

const EmployeeList = () => {
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.organizationReducer);
    const { list } = reducer;

    const loadEntry = (entity) => {
        dispatch(loadEntryAction(entity));
    };

    const deleteEntry = (id) => {
        dispatch(deleteEntryAction(id));
    };

    useEffect(() => {
        dispatch(loadListAction());
     }, []);

    return (
        <React.Fragment>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">List</h5>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map(item =>
                                    <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td><EditDeleteButton handleEditClick={()=> loadEntry(item)} handleDeleteClick={()=> deleteEntry(item.id)} /></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EmployeeList;
