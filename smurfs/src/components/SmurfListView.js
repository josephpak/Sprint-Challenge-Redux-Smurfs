import React from 'react'
import { connect } from 'react-redux';
import { getData } from '../actions';

import SmurfList from '../components/SmurfList'

class SmurfListView extends React.Component {
    
    componentDidMount() {
        this.props.getData()
    }
    
    render() {
    return (
      <div>
        <SmurfList smurfs={this.props.smurfs}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { getData }
)(SmurfListView);