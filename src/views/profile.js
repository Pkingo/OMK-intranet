import React, { Component } from 'react';
import requireAuth from '../components/requireAuth';

class Profile extends Component {
  render() {
    return <div>Profile Page</div>;
  }
}

export default requireAuth(Profile);