import axios from 'axios';

const BASE_URL = `http://localhost:8088/login/authenticate`;

class LoginService{
    loginUser(username, password) {
        return axios.get(BASE_URL + '/' + username + '/' + password);
      }
}

export default new LoginService();