import React, { Component } from 'react';
import './auth.css';

export default class Signup extends Component {
  render() {
    return (
      <div className="signup-page">
        <div class='form-container'>
          <header>
            <h2>Sign Up</h2>
            <p>Sign up for free with farmly</p>
          </header>
          <form class='signup'>
            <div class=''>
              <input type='text' placeholder='First Name' />
            </div>
            <div class=''>
              <input type='text' placeholder='Last Name' />
            </div>
            <div class=''>
              <input type='email' placeholder='Email Address' />
            </div>
            <div class=''>
              <input type='password' placeholder='Password' />
            </div>
            <div class=''>
              <input type='telephone' placeholder='Telephone Number' />
            </div>
            <div class=''>
              <input type='text' placeholder='Address' />
            </div>
            <div class=''>
              <select class='select'>
                <option>Vendor</option>
                <option>Farmer</option>
                <option>Investor</option>
                <option>Visitor</option>
              </select>
            </div>
            <div class='links'>
              <a>Already have an ACCOUNT? Log In</a>
            </div>
            <input type='button' class='btn' value='sign Up' c />
          </form>
        </div>
      </div>
    );
  }
}
