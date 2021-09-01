import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, phoneNumber, password, confirmPassword } =
      this.state;
    console.log(displayName);
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName,
        phoneNumber,
        password,
      });

      this.setState({
        displayName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, phoneNumber, password, confirmPassword } =
      this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span className="title">Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            handleChange={this.handleChange}
            label="Display name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="phoneNumber"
            type="tel"
            value={phoneNumber}
            handleChange={this.handleChange}
            label="Phone number"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm password"
            required
          />
          <div className="buttons">
            <CustomButton type="button" isCancelBtn>
              Cancel
            </CustomButton>
            <CustomButton type="submit" isNormalBtn>
              Sign up
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
