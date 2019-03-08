import React from 'react'
import SmurfCard from './SmurfCard'

export default function SmurfList(props) {
  return (
    <div>
      {props.smurfs.map(smurf => (
          <SmurfCard key={smurf.id} smurf={smurf}/>
      ))}
    </div>
  )
}
