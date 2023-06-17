import React from "react";

const EditDeleteButton = ({handleEditClick, handleDeleteClick}) => {
    return (
        <React.Fragment>
            <button type="button" class="btn btn-primary" onClick={handleEditClick}>Edit</button>
            <button type="button" class="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
        </React.Fragment>
    );
};

export default EditDeleteButton;
