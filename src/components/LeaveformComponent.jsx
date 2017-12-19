'use strict';

import React from 'react';

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
  render() {
    console.log("--> In render event");
    return (
      <div className="leaveform-component">
        <h1> Hi There - ! {this.props.title}</h1>
        <p>Your leave balance: {this.state.leaveBalance}</p>
        <div>
          <input type="button" onClick={this.onSave.bind(this)} value="Save"></input>
        </div>
      </div>
    );
  }
}

LeaveformComponent.displayName = 'LeaveformComponent';

// Uncomment properties you need
// LeaveformComponent.propTypes = {};
// LeaveformComponent.defaultProps = {};

export default LeaveformComponent;
