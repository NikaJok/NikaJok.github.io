import React, { Component } from 'react';
import axios from 'axios';
import Image from './images.png';
import './users.css';
import Spinner from './Spinner';
import MapCard from './MapCard';

class EditUserForm extends Component {
  state = {
    user: {
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      },
      phone: '',
      website: '',
      company: ''
    }
  };
  // componentDidMount() {
  //   let id = this.props.match.params.user_id;
  //   axios.get('http://jsonplaceholder.typicode.com/users/' + id).then(res => {
  //     this.setState({
  //       user: res.data
  //     });
  //   });
  // }
  onChange = ({ target }) => {
    console.log([target.name]);
    this.setState({
      ...this.state.user,
      [target.name]: target.value
    });
    console.log(this.state);
  };
  onSubmit(e) {
    e.preventDefault();
    const {
      name,
      username,
      email,
      address,
      phone,
      website,
      company
    } = this.state.user;
    const { street, suite, city, zipcode } = address;
    const user = {
      name: name,
      username: username,
      email: email,
      address: {
        street: street,
        suite: suite,
        city: city,
        zipcode: zipcode
      },
      phone: phone,
      website: website,
      company: company
    };

    console.log(user);
  }
  render() {
    const {
      name,
      username,
      email,
      address,
      phone,
      website,
      company
    } = this.state.user;
    const { street, suite, city } = address;
    const user = this.state.user ? (
      <div className='row'>
        <div className='col s3'>
          <img src={Image} />
        </div>
        <div className='col s6'>
          <form onSubmit={this.onSubmit}>
            <label forHTML='name'>The name: </label>
            <input
              name='name'
              type='text'
              required
              value={name}
              onChange={this.onChange}
            />
            <label forHTML='username'>The username: </label>
            <input
              name='username'
              type='text'
              required
              value={username}
              onChange={this.onChange}
            />
            <label forHTML='email'>E-mail: </label>
            <input
              name='email'
              type='text'
              required
              value={email}
              onChange={this.onChange}
            />
            <label forHTML='city'>Address: </label>
            <input
              name='city'
              type='text'
              required
              value={city}
              onChange={this.onChange}
            />
            <input
              name='street'
              type='text'
              required
              value={street}
              onChange={this.onChange}
            />
            <input
              name='suite'
              type='text'
              required
              value={suite}
              onChange={this.onChange}
            />
            <label forHTML='phone'>Phone: </label>
            <input
              name='phone'
              type='text'
              required
              value={phone}
              onChange={this.onChange}
            />
            <label forHTML='website'>Website: </label>
            <input
              name='website'
              type='text'
              required
              value={website}
              onChange={this.onChange}
            />
            <label forHTML='company.name'>Company: </label>
            <input
              name='company.name'
              type='text'
              required
              value={company.name}
              onChange={this.onChange}
            />
          </form>
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
        {this.state.user ? (
          <MapCard user={this.state.user} />
        ) : (
          <div className='center'>
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}
export default EditUserForm;
