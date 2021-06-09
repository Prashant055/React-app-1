import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginService from "../services/login";

const validateForm = (errors) => {
  let valid = true;
  //Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

/*  
export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>email</label>
                    <input type="text" className="form-control" placeholder="Enter email" />
                </div>
                <br/>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br/>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    New Customer <a href="/sign-up">Sign up?</a>
                </p>
            </form>
        );
    }
}*/

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginres: "",
      email: "",
      password: "",
      rememberMe: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    /*switch (name) {
        case "email":
          errors.id = value.length < 2 ? "invalid id" : "";
          break;
  
        case "password":
          errors.password =
            value.length < 4 ? "password must be greater than 4 characters" : "";
        default:
          break;
      }*/

    this.setState({ errors, [name]: value });
  }

  handleCheckBoxChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;
    this.setState({ [input.name]: value });
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const id = rememberMe ? localStorage.getItem("id") : "";
    this.setState({ id, rememberMe });
  }

  loginUser = (e) => {
    e.preventDefault();

    if (validateForm(this.state.errors)) {
      sessionStorage.setItem("email", this.state.email);
      //sessionStorage.setItem("role", this.state.choice);

      localStorage.setItem("rememberMe", this.state.rememberMe);
      localStorage.setItem(
        "email",
        this.state.rememberMe ? this.state.email : ""
      );

      //if (1) {
      LoginService.loginUser(this.state.email, this.state.password).then(
        (res) => {
          this.setState({ loginres: res.data });
          if (this.state.loginres === "Login Successful.") {
            this.props.history.push("/body");
          } else {
            alert(this.state.loginres);
            //window.location = "/sign-up";
          }
        }
      );
    }
    /*if (this.state.choice === "engineer") {
          LoginService.loginUser(this.state.id, this.state.password, 2).then(
            (res) => {
              this.setState({ loginres: res.data });
              if (this.state.loginres === "Login successfull") {
                this.props.history.push(`/homepage-engineer/${this.state.id}`);
              } else {
                alert(this.state.loginres);
                window.location.reload(false);
              }
            }
          );
        }
    
        if (this.state.choice === "admin") {
          LoginService.loginUser(this.state.id, this.state.password, 3).then(
            (res) => {
              this.setState({ loginres: res.data });
              if (this.state.loginres === "Login successfull") {
                this.props.history.push(`/homepage-admin/${this.state.id}`);
              } else {
                alert(this.state.loginres);
                window.location.reload(false);
              }
              console.log(this.state.loginres);
            }
          );
        }
      }*/
    /*else{
          alert("please enter correct credentials")
      }*/
  };

  /*register = (event) => {
      event.preventDefault();
      if (this.state.choice === "client") {
        this.props.history.push("/register-client");
      }
    };*/

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changePasswordHandler = (event) => {
    // this.showErrorPW();
    this.setState({ password: event.target.value });
  };
  changeChoiceHandler = (event) => {
    this.setState({ choice: event.target.value });
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.loginUser} noValidate>
        <h3>Log in</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <br />
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              name="rememberMe"
              checked={this.state.rememberMe}
              onChange={this.handleCheckBoxChange}
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Sign in
        </button>
        <p className="forgot-password text-right">
          New Customer <a href="/sign-up">Sign up?</a>
        </p>
      </form>
    );
  }
}

export default LoginPage;
