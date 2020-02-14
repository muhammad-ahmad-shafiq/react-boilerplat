// Todo: Remove Sample Reducer

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMessage } from '../../actions/sample';

class SampleRedux extends Component {
  sampleAction = () => {
    this.props.setMessage("hello from redux store");
  }

  render() {
    return (
      <div>
        <h3>Plese click the below button to see the change using store</h3>
        <div className="redux-container col-12">
          <pre>Store Message: {this.props.message} </pre>
          <button className="btn btn-primary col-md-offset-5" onClick={this.sampleAction}>Test redux action</button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  message: state.sample.message
});

const mapDispatchToProps = dispatch => ({
  setMessage: bindActionCreators(setMessage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SampleRedux);
