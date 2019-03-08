import React from 'react';

const SmurfCard = props => {
  const { smurf } = props
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
        // onClick={e => handleDelete(e, friend.id)}
        className="delete"
        >Delete</button>                
    </div>
  )
}

export default SmurfCard;