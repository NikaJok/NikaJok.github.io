import React, { Component } from 'react';
import './users.css';
export default class SignUp extends Component {
  render() {
    return (
      <div className='container regist'>
        <div className='row z-depth-5'>
          <div className='col s12'>
            <h4 className='center'>Registration Form</h4>
            <form className='col s12'>
              <div className='row'>
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>account_circle</i>
                  <input
                    id='userName'
                    type='text'
                    className='validate'
                    required
                  />
                  <label htmlFor='userName'>User Name</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>lock</i>
                  <input
                    id='password'
                    type='password'
                    className='validate'
                    minLength='8'
                    required
                  />
                  <label htmlFor='password'>Password</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>email</i>
                  <input
                    id='email'
                    type='email'
                    className='validate'
                    required
                  />
                  <label htmlFor='email'>Email</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <i className='material-icons prefix'>phone</i>
                  <input
                    id='icon_telephone'
                    type='tel'
                    className='validate'
                    required
                  />
                  <label htmlFor='icon_telephone'>Telephone</label>
                </div>
              </div>
              <div className='row'>
                <div className='col s12 center'>
                  <a class='waves-effect waves-red btn-flat'>Sign Up</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
