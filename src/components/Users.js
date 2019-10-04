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
    user: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    }
  };
  // componentDidMount() {
  //   let id = this.props.match.params.user_id;
  //   // const upState
  //   axios.get('http://jsonplaceholder.typicode.com/users/' + id).then(res => {
  //     this.setState({
  //       user: res.data
  //     });
  //     console.log(this.state);
  //   });
  //   console.log(this.state);
  // }
  // handleClick(e) {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  //   console.log(this.state.modal);
  // }
  render() {
    const user = this.state.user ? (
      <div className='row'>
        {/* {this.state.modal && } */}
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
        <div className='col s6'>
          {/* <input type='button' value='Edit' onClick={this.handleClick} /> */}
          <button type='submit' onClick={this.handleClick}>
            Edit
          </button>
        </div>
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
        {user}
        <EditUserForm />
        {/* {this.state.user ? (
          <MapCard user={this.state.user} />
        ) : (
          <div className='center'>
            <Spinner />
          </div>
        )} */}
      </div>
    );
  }
}
