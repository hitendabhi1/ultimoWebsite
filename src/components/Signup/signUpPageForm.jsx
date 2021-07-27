import React, { Component } from "react";

import "../../style/SignUp/signUpSectionFrom.scss";

// Logo
import Logo from "../../assets/homePage/ultimoGGLogo.svg";

class SignUpPageForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    country: "",
    check: false,
    formHit: false,
    formResponse: "",
  };

  onHandleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.emailAddress.includes("@")) {
      console.log(this.state.emailAddress.split("@").length);
    }
  };

  changeCheck = () => {
    if (this.state.check === false) {
      this.setState({
        check: true,
      });
    } else {
      this.setState({
        check: false,
      });
    }
  };
  submitForm = async () => {
    await fetch(
      `https://ultimo-mailchimp-api.herokuapp.com/userPost/${this.state.firstName}/${this.state.lastName}/${this.state.emailAddress}/${this.state.phoneNumber}/${this.state.country}`
    )
      .then((response) => response.text())
      .then(
        function (result) {
          if (result.includes("{")) {
            console.log("form entered");
            this.setState({
              formResponse: "You have already signed up for Ultimo GG",
            });
          } else {
            console.log("hit");
            this.setState({
              formResponse: "You have signed up for Ultimo GG",
            });
          }

          this.setState({
            formHit: true,
            firstName: "",
            lastName: "",
            emailAddress: "",
            country: "",
            phoneNumber: "",
            check: false,
          });
        }.bind(this)
      )

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    let disableButton =
      this.state.emailAddress !== "" &&
      this.state.firstName !== "" &&
      this.state.lastName &&
      this.state.country !== "" &&
      this.state.emailAddress.includes("@") &&
      this.state.check &&
      this.state.emailAddress.split("@").length < 3
        ? "submit-button "
        : "submit-button button-disable";

    let hasSubmit = this.state.formHit
      ? "sign-up-resp resp-show"
      : "sign-up-resp";
    return (
      <div className='sign-up_form'>
        <h1 className='title-block'>Sign up to join our global community</h1>
        <p className='text-block'>
          Sign up now to stay up to date with everything Ultimo GG & our
          game-changing esports token ULTGG
        </p>

        <form className='page-form'>
          <div className='field-group_top'>
            <label>First Name*</label>
            <input
              type='text'
              name='firstName'
              onChange={this.onHandleInput}
              value={this.state.firstName}
            ></input>
          </div>
          <div className='field-group_top'>
            <label>Last Name*</label>
            <input
              type='text'
              name='lastName'
              onChange={this.onHandleInput}
              value={this.state.lastName}
            ></input>
          </div>
          <div className='field-group_top'>
            <label>Email Address*</label>
            <input
              type='email'
              name='emailAddress'
              onChange={this.onHandleInput}
              value={this.state.emailAddress}
            ></input>
          </div>
          <div className='field-group_top'>
            <label>Phone Number (optional)</label>
            <input
              type='tel'
              name='phoneNumber'
              onChange={this.onHandleInput}
              value={this.state.phoneNumber}
            ></input>
          </div>

          <div className='field-group_bottom'>
            <label>Country Of Residence*</label>
            <input
              type='text'
              name='country'
              onChange={this.onHandleInput}
              value={this.state.country}
            ></input>
          </div>

          <div className='check-box'>
            <input
              type='checkbox'
              name='check'
              onClick={this.changeCheck}
              checked={this.state.check || false}
            ></input>
            <span className='checkbox_custom'></span>

            <label>I AM HAPPY FOR ULTIMO GG TO CONTACT ME</label>
          </div>

          <p className={hasSubmit}>{this.state.formResponse}</p>
          <div className={disableButton} onClick={this.submitForm}>
            <div className='sign-up_button'></div>
          </div>

          <img className='logoGG' src={Logo} alt='UltimoGG' />
        </form>
      </div>
    );
  }
}

export default SignUpPageForm;
