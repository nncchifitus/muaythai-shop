import React from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            value={this.state.name}
            handleChange={this.handleChange}
            label="Full name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.name}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="phoneNumber"
            type="tel"
            value={this.state.name}
            handleChange={this.handleChange}
            label="Phone number"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.name}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.name}
            handleChange={this.handleChange}
            label="Confirm password"
            required
          />
          <div className="buttons">
            <CustomButton className="cancel-btn">Cancel</CustomButton>
            <CustomButton>Sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
