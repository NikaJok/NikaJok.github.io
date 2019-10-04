import React, { Component } from 'react';
import './users.css';
import axios from 'axios';
export default class SignUp extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    phone: ''
  };
  onChange = ({ target }) => {
    this.setState({
      ...this.state,
      [target.name]: target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.addinfo(this.state);

    this.setState({
      username: '',
      password: '',
      email: '',
      phone: ''
    });
  };
  addinfo = async user => {
    try {
      await axios.post('http://localhost:3005/user/registration', user);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div className='container regist'>
        <div className='row z-depth-5'>
          <div className='col s12'>
            <h4 className='center'>Registration Form</h4>
            <form className='col s12' onSubmit={this.onSubmit}>
              <div className='row'>
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>account_circle</i>
                  <input
                    name='username'
                    id='userName'
                    type='text'
                    className='validate'
                    required
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <label htmlFor='userName'>User Name</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>lock</i>
                  <input
                    name='password'
                    id='password'
                    type='password'
                    className='validate'
                    minLength='8'
                    required
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <label htmlFor='password'>Password</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>email</i>
                  <input
                    name='email'
                    id='email'
                    type='email'
                    className='validate'
                    value={this.state.email}
                    required
                    onChange={this.onChange}
                  />
                  <label htmlFor='email'>Email</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>phone</i>
                  <input
                    name='phone'
                    id='icon_telephone'
                    type='tel'
                    className='validate'
                    required
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                  <label htmlFor='icon_telephone'>Telephone</label>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 center'>
                  <input
                    type='submit'
                    value='Sign Up'
                    className='waves-effect waves-red btn-flat'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
