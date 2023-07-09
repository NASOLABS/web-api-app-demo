// require('dotenv').config()

import React from 'react';
import axios from 'axios';

export default class Health extends React.Component {
  state = {
    healthStatus: ''
  }

  componentDidMount() {
    // console.log("API Server is <b>{process.env.API_SERVER}")
    axios.get(process.env.REACT_APP_API_SERVER)
    // axios.get(process.env.API_SERVER)
    // axios.get(`http://127.0.0.1:5000/health`)
    // axios.get(`http://127.0.0.1:4000/health`)
      .then(res => {
        const healthStatus = res.data;
        this.setState({ healthStatus });
      })
  }

  render() {
    return (
      <>
        <label>
        {
            this.state.healthStatus
        }
        </label>
        <label>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</label>
        <label>API Server is <b>{process.env.API_SERVER}</b>.</label>
      </>
    )
  }
}