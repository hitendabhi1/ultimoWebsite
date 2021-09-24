import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import "../../style/SignUp/signUpSectionFrom.scss";

// Logo
import Logo from "../../assets/homePage/ultimoGGLogo.svg";

class SignUpPageForm extends Component {
  state = {
    FNAME: "",
    LNAME: "",
    EMAIL: "",
    PHONE_NUMBER: "",
    COUNTRY: "",
    check: false,
    formHit: false,
    formResponse: "",
    captureValue: "",
  };

  onHandleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.EMAIL.includes("@")) {
      console.log(this.state.EMAIL.split("@").length);
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
    let PHONE_NUMBER = this.state.PHONE_NUMBER;

    if (this.state.PHONE_NUMBER.length === 0) {
      PHONE_NUMBER = 0;
    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        FNAME: this.state.FNAME,
        LNAME: this.state.LNAME,
        EMAIL: this.state.EMAIL,
        PHONE_NUMBER: this.state.PHONE_NUMBER,
        COUNTRY: this.state.COUNTRY
      })
    }
    await fetch('https://ultimo.gg/userPost/index.php', requestOptions)
        .then((response) => response.text())
        .then(
            function (result) {
              console.log(result);
              if (result.includes("{")) {
                console.log("form previously entered");
                this.setState({
                  formResponse: "You have already signed up for Ultimo GG",
                });
              } else {
                console.log("hit");
                this.setState({
                  formResponse: "Thank you for signing up for Ultimo GG",
                });
              }

              this.setState({
                formHit: true,
                FNAME: "",
                LNAME: "",
                EMAIL: "",
                COUNTRY: "",
                PHONE_NUMBER: "",
                check: false,
              });
            }.bind(this)
        )

        .catch((error) => {
          console.error("Error:", error);
        });
  };

  isValid = (str) => {
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
  };

  isNum = (str) => {
    return /^\d+$/.test(str);
  };

  recapture = (value) => {
    this.setState({
      captureValue: value,
    });
  };

  render() {
    let disableButton =
        this.state.EMAIL !== "" &&
        this.state.FNAME !== "" &&
        this.isValid(this.state.FNAME) === true &&
        this.isValid(this.state.LNAME) === true &&
        this.isValid(this.state.COUNTRY) === true &&
        this.isValid(this.state.EMAIL) === true &&
        this.isValid(this.state.PHONE_NUMBER) === true &&
        this.state.captureValue.length !== 0 &&
        this.state.LNAME &&
        this.state.COUNTRY !== "" &&
        this.state.EMAIL.includes("@") &&
        this.state.check &&
        this.state.EMAIL.split("@").length < 3
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
                  name='FNAME'
                  onChange={this.onHandleInput}
                  value={this.state.FNAME}
              ></input>
            </div>
            <div className='field-group_top'>
              <label>Last Name*</label>
              <input
                  type='text'
                  name='LNAME'
                  onChange={this.onHandleInput}
                  value={this.state.LNAME}
              ></input>
            </div>
            <div className='field-group_top'>
              <label>Email Address*</label>
              <input
                  type='email'
                  name='EMAIL'
                  onChange={this.onHandleInput}
                  value={this.state.EMAIL}
              ></input>
            </div>
            <div className='field-group_top'>
              <label>Phone Number (optional)</label>
              <input
                  type='tel'
                  name='PHONE_NUMBER'
                  onChange={this.onHandleInput}
                  value={this.state.PHONE_NUMBER}
              ></input>
            </div>

            <div className='field-group_bottom'>
              <label>COUNTRY Of Residence*</label>
              <input
                  type='text'
                  name='COUNTRY'
                  onChange={this.onHandleInput}
                  value={this.state.COUNTRY}
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
            <div
                style={{
                  position: "relative",
                  zIndex: "1000",
                  margin: "0 auto",
                  paddingTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
            >
              <ReCAPTCHA
                  sitekey='6Lfw0dUbAAAAAG6RBSr6bTrvVQq4COn7a7PflcJ-'
                  onChange={this.recapture}
              />
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
