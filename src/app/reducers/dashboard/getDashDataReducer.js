import C from '../../actions/constants';

export default function getDashboardDataReducer(state = {}, action) {
    switch (action.type) {
        case C.GET_DASHBOARD_DATA:
            return action.payload;
        default:
            return state;
    }
};