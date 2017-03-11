export default function(state = {
    docs: [],
    init: true
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
                userProfilePic: action.payload.userProfilePic
            }

    }
    return state;
}
