import axios from "axios";

const url = "http://localhost:8080/api/Registration/UserRegistration";

class signup {
  addUser(user) {
    return axios.post(url, user);
  }
}

export default new signup();
