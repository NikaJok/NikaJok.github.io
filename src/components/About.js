import React, { Component } from 'react';
import axios from 'axios';
import Image from './images.png';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

export default class About extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users/').then(res => {
      setTimeout(() => {
        this.setState({
          users: res.data.slice(0, 8)
        });
      }, 2000);
    });
  }
  render() {
    const { users } = this.state;
    const usersList = users.length ? (
      users.map(user => {
        return (
          <div className='col s3' key={user.id}>
            <div className='card'>
              <div className='card-image'>
                <img src={Image} />
                <span className='card-title'>{user.name}</span>
              </div>
              <div className='card-content'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, nobis. Quisquam nisi, nobis laudantium similique
                  deserunt mollitia amet corrupti soluta dolores laborum ipsum
                  repellendus tenetur qui illum excepturi sint omnis!
                </p>
              </div>
              <div className='card-action'>
                <Link to={'/' + user.id}>More about</Link>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className='center'>
        <Spinner />
      </div>
    );
    return (
      <div className='container home'>
        <div className='row'>{usersList}</div>
      </div>
    );
  }
}
