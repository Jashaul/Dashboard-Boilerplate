import CONFIGS from '../../config/config';
// import { invalidateUserSession } from "../../utils/LoginService";

export default class API {
    constructor(method = 'POST', timeout = 60000, auth = false) {
        this.code = null;
        this.message = null;
        this.domain = null;
        this.method = method;
        this.timeout = timeout;
        this.auth = auth;
    }

    toString() {
        return `( code: ${this.code} message: ${this.message} domain: ${this.domain} method: ${this.method} timeout: ${this.timeout} auth: ${this.auth}`;
    }

    apiEndPoint() {
        return CONFIGS.apiEndPoint;
    }
    apiUploadEndPoint() {
        return CONFIGS.UPLOAD_URL;
    }
    processResponse(res) {
        if (res && res.code && res.message && res.domain) {
            this.code = res.code;
            this.message = res.message;
            this.domain = res.domain;
        } else if (res.message === 'Token is not valid!') {
            // invalidateUserSession();
        } else if(res === 'The token has expired!'){
            // invalidateUserSession();
        }
    }
}