import axios from "axios";

const BASE_URL = `http://localhost:8080/api/Login/UserLogin`;

class LoginService {
  loginUser(email, password) {
    return axios.get(BASE_URL + "/" + email + "/" + password);
  }
}

export default new LoginService();
