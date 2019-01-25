import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import API from '../../utils/API';

import * as ROUTES from '../../constants/routes';

export default class PopulateUsersPage extends React.Component {
  

  populateUsers = () => {
    API.populateUsers()
      .then(res => {
        console.log("populate users")
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  populatePictures = () => {
    API.populatePicures()
    .then(res => {
      console.log("populate pictures")
      console.log(res.data)
    })
    .catch(err => console.log(err));
  }

  
  redirectStartPage = () => {
    this.props.history.push(ROUTES.LANDING);
  };


  render() {
    return (

      <div >
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.populateUsers}>Populate Admin</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.populatePictures}>Populate Pictures</button>
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.redirectStartPage}>Back to app</button>
      </div>

    )
  }
}

//  export default Populate;