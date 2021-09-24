import React, { Component } from "react";

// css
import "../../style/contactUs/contactForm.scss";

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <div className='contact-form'>
        <h1 className='title-block'>Get in touch</h1>
        <div className='form-container'>
          <form className='page-form'>
            <h1 className='title-block--mobile'>Get in touch</h1>
            <div className='field-group_top'>
              <label>First Name</label>
              <input type='text'></input>
            </div>
            <div className='field-group_top'>
              <label>Last Name</label>
              <input type='text'></input>
            </div>
            <div className='field-group_top'>
              <label>Email Address</label>
              <input type='text'></input>
            </div>
            <div className='field-group_top'>
              <label>COUNTRY Of Residence</label>
              <input type='text'></input>
            </div>

            <div className='check-box'>
              <input type='checkbox'></input>
              <span className='checkbox_custom'></span>
              <label>I am happy for Ultimo GG to contact me</label>
            </div>
            <div className='mobile'>
              <div className='sign-up_button'></div>
            </div>
          </form>
          <div className='desktop'>
            <div className='sign-up_button'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
