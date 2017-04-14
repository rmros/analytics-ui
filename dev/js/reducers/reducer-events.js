export default function(state = {
    init: true,
    allEvents: []
}, action) {
    console.log(action);
    switch (action.type) {
        case 'APP_INIT_SUCCESS':
            return {
                appInitSuccess: true,
                appId: action.payload.appId,
                appName: action.payload.appName,
                allApps: action.payload.allApps,
                init: false,
                userProfilePic: action.payload.userProfilePic,
                allEvents: []
            }
        case 'FETCH_ALL_EVENTS':
            return {
                ...state,
                fetchingEvents: false,
                allEvents: action.payload
            }
        case 'FETCHING_EVENTS':
            return {
                ...state,
                fetchingEvents: true
            }

    }
    return state;
}
