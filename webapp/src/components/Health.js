import React from 'react';
import axios from 'axios';

export default class Health extends React.Component {
  state = {
    healthStatus: ''
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:5000/health`)
    // axios.get(`http://127.0.0.1:4000/health`)
      .then(res => {
        const healthStatus = res.data;
        this.setState({ healthStatus });
      })
  }

  render() {
    return (
        <label>
        {
            this.state.healthStatus
        }
        </label>
    )
  }
}