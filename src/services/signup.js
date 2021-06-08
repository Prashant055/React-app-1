

import axios from 'axios'
 
const uri='http://localhost:8088/user/add'



class signup{
    addUser(user){
        return axios.post(uri,user);
    }
}
 
export default new signup()


