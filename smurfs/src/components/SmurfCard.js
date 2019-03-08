import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';

const SmurfCard = props => {
    const { smurf } = props

    const handleDelete = (e, id) => {
        e.preventDefault();
        props.deleteSmurf(id)
    }

    return (
        <div>
            <p>{`Name: ${smurf.name}`}</p>
            <p>{`Age: ${smurf.age}`}</p>
            <p>{`Email: ${smurf.height}`}</p>
            <button 
            // onClick={e => handlePrepopulate(e, friend)}
            className="update"
            >Update</button>
            <button
            onClick={e => handleDelete(e, smurf.id)}
            className="delete"
            >Delete</button>                
        </div>
    )
}

export default connect(
    null,
    { deleteSmurf }
)(SmurfCard);