import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteSmurf, prepopulateUpdateForm } from '../actions';

const SmurfCard = props => {
    const { smurf } = props

    const handleDelete = (e, id) => {
        e.preventDefault();
        props.deleteSmurf(id)
    }

    const handlePrepopulate = (e, smurf) => {
        e.preventDefault();
        props.prepopulateUpdateForm(smurf)
      }

    return (
        <div>
            <p>{`Name: ${smurf.name}`}</p>
            <p>{`Age: ${smurf.age}`}</p>
            <p>{`Email: ${smurf.height}`}</p>
            <button 
            onClick={e => handlePrepopulate(e, smurf)}
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
    { deleteSmurf, prepopulateUpdateForm }
)(SmurfCard);