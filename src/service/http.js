import axios from 'axios';
import qs from 'qs';
class http {
    get(url, data) {
        let params = qs.stringify(data);
        return new Promise((res, rej) => {
            axios.get(url, params).then(result => {
                res(result);
            }).catch(e => {
                rej(e);
            })
        })
    }
    post(url, data) {
        let params = qs.stringify(data);
        return new Promise((res, rej) => {
            axios.post(url, params).then(result => {
                res(result);
            }).catch(e => {
                rej(e);
            })
        })
    }
}
export default http