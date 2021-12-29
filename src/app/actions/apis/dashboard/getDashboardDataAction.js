import API from '../api';
import C from '../../constants';
import CONFIGS from '../../../config/config';

export default class GetDashboardData extends API {
    constructor(data, timeout = CONFIGS.apiTimeout) {
        super('POST', timeout, false);
        this.type = C.GET_DASHBOARD_DATA;
        this.timeout = timeout;
        this.body = data;
        this.res = null;
    }

    processResponse(res) {
        super.processResponse(res)
        if (res) {
            this.res = res.response;
            return true;
        }
        return false;
    }

    apiEndPoint() {
        return CONFIGS.common.GET_DASHBOARD_DATA_URL;

    }


    getBody() {
        return this.body
    }

    getHeaders() {
        return {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

    getPayload() {
        return this.res;
    }

    getCustomConfigs() {
        return {
            timeout: this.timeout,
            withCredentials: true,
            crossDomain: true
        }
    }
}