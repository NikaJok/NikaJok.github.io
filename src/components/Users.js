import React, { Component } from 'react';
import axios from 'axios';
import Image from './images.png';
import './users.css';
import Spinner from './Spinner';
//import MapCard from './MapCard';
import EditUserForm from './EditUserForm';
//import Popup from 'reactjs-popup';

export default class Users extends Component {
  state = {
    modal: true,
    user: null
  };
  componentDidMount() {
    let id = this.props.match.params.user_id;
    // const upState
    axios.get('http://jsonplaceholder.typicode.com/users/' + id).then(res => {
      this.setState({
        user: res.data
      });
      console.log(this.state);
    });
    console.log(this.state);
  }
  handleClick = e => {
    this.setState({
      modal: !this.state.modal
    });
    console.log(this.state.modal);
  };
  render() {
    const user = this.state.user ? (
      <div className='row'>
        <div className='col s3'>
          <img src={Image} />
        </div>
        <div className='col s6'>
          <h5>The name: {this.state.user.name}</h5>
          <h6>The username: {this.state.user.username}</h6>
          <h6>E-mail: {this.state.user.email}</h6>
          <h6>
            Adress: {this.state.user.address.zipcode},{' '}
            {this.state.user.address.city}, {this.state.user.address.street},{' '}
            {this.state.user.address.suite}.
          </h6>
          <h6>Phone: {this.state.user.phone}</h6>
          <h6>Website: {this.state.user.website}</h6>
          <h6>Company: {this.state.user.company.name}</h6>
        </div>
        <div className='col s6'></div>
      </div>
    ) : (
      <div className='container center'>
        <div className='row'>
          <Spinner />
        </div>
      </div>
    );
    return (
      <div className='container userDetails'>
        <div className='modalWindow'>
          {this.state.modal && <EditUserForm handleClick={this.handleClick} />}
        </div>
        {user}
        <button type='submit' onClick={this.handleClick}>
          Edit
        </button>
        {/* <MapCard user={this.state.user} /> */}
      </div>
    );
  }
}
