'use strict';

import React from 'react';
import {Formio} from 'react-formio';

require('styles//Leaveform.css');

class LeaveformComponent extends React.Component {
  constructor(props){
    super();
    console.log("--> In Constructor");
    this.state = {leaveBalance: 0}
  }
  componentDidMount(){
    console.log("--> COMPONNET DID MOUNT");
  }
  componentDidUpdate(){
    console.log("--> Component did update");
  }
  onSave(event){
    console.log("--> In Save event");
    this.setState({leaveBalance: this.state.leaveBalance + 1});
  }
  onLeaveSubmit(submission){
    console.log("---> leave submitted");
  }
  onLeaveFormError(response){
    console.log("--> error occurred : "+response);
  }
  onLeaveFormPropChange(submission, key, value){
    console.log("--> "+key+" changed-to "+value);
  }
  render() {
    console.log("--> In render event");
    return (
      <div className="leaveform-component">
        <h1> Hi There - ! {this.props.title}</h1>
        <p>Your leave balance: {this.state.leaveBalance}</p>
        <div>
          <input type="button" onClick={this.onSave.bind(this)} value="Check Leave"></input>
        </div>
        <hr/>
        <Formio src="https://uhg.medebridge2.com/testhidden" 
                onFormSubmit={this.onLeaveSubmit.bind(this)}
                onFormError={this.onLeaveFormError.bind(this)}
                onChange={this.onLeaveFormPropChange.bind(this)}/>
      </div>
    );
  }
}

LeaveformComponent.displayName = 'LeaveformComponent';

// Uncomment properties you need
// LeaveformComponent.propTypes = {};
// LeaveformComponent.defaultProps = {};

export default LeaveformComponent;
