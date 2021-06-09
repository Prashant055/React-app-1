import React, { Component } from "react";
import axios from "axios";
import signup from "../services/signup";

/*function SignUp(props){
        
    let initialuser={username:'',password:'',firstName:'',lastName:''};
    let [user,setUser]=useState(initialuser);
    let [msg,setMsg]=useState('');
    let [id,setId]=useState(0);


    useEffect(() => {
        const URL='http://localhost:8088/user/add';
        axios.post(URL,user).then((response) => 
        {
            
            setMsg(response.data)
        }).catch(error => console.log(error.message))
    },[id])

    function handleBtnClick()
    {
        console.log(user)
        setId(1)
    }*/

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    signup
      .addUser(this.state)
      .then((response) => {
        console.log(response);
        alert("User Added Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { email, firstName, lastName, password } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h3>Register</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={this.changeHandler}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={this.changeHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              name="username"
              value={email}
              onChange={this.changeHandler}
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
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </button>
          <b className="text-danger" id="error"></b>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">log in?</a>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUp;
