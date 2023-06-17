import React from "react";

const SaveCancelButton = ({saveEntry, cancelEntry}) => {
    return (
        <React.Fragment>
            <button type="button" class="btn float-end btn-danger" onClick={cancelEntry}>Cancel</button>
            <button type="button" class="btn float-end btn-primary" onClick={saveEntry}>Save</button>
        </React.Fragment>
    );
};

export default SaveCancelButton;
