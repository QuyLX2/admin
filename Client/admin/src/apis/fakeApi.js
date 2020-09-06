import axios from "axios";
const apis = {
    login: (value) => {
        return axios.post('https://medical-be.herokuapp.com/api/doctor/login', value).then(res => {
            return res;
        })
    }
}
export default apis