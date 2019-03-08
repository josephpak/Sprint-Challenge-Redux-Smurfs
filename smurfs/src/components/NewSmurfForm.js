import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class NewSmurfForm extends React.Component {
    state = {
        smurf: this.props.activeSmurf || {
            name: '',
            age: '',
            height: ''
        } 
    }

    handleFormChange = e => {
        e.persist();
        let value = e.target.value
        e.preventDefault();
        this.setState(prevState => ({
            smurf: {
                ...prevState.smurf,
                [ e.target.name ]: value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        // Do some data checks
        console.log("Submitting....")

        const initialState = {
            name: '',
            age: '',
            height: ''
        }

        // if (this.props.activeSmurf) {
        //     // this.props.updateFriend(e, this.state.friend)
        //     this.setState({
        //         smurf: initialState
        //     })   
        // } else {
            this.props.addSmurf(this.state.smurf)
            this.setState({
                smurf: initialState
            })   
        // }
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h3>{`[ ${this.props.activeSmurf ? "update" : "add new"} smurf ]`}</h3>
            <div>
                <p>Name</p>
                <input           
                type="text"
                name="name"
                value={this.state.smurf.name}
                autoComplete="off"
                onChange={this.handleFormChange}
                ></input>
            </div>
            <div>
                <p>Age</p>
                <input
                type="text"
                name="age"
                value={this.state.smurf.age}
                autoComplete="off"
                onChange={this.handleFormChange}           
                ></input>
            </div>
            <div>
                <p>Height</p>
                <input
                type="text"
                name="height"
                value={this.state.smurf.height}
                autoComplete="off"
                onChange={this.handleFormChange}
                ></input>
            </div>
            <button>{`${this.props.activeSmurf ? "Update" : "Add New"} Smurf`}</button>
        </form>
        )
    }
}

export default connect(
    null,
    { addSmurf }
)(NewSmurfForm)