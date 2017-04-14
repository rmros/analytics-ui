import axios from 'axios';
import async from 'async';
import _ from 'underscore';
import groupByTime from 'group-by-time';

export const initApp = (appId) => {
    console.log('appId', appId);
    return ((dispatch) => {
        axios.defaults.withCredentials = true

        axios.get(USER_SERVICE_URL + 'user').then((userData) => {

            axios.get(USER_SERVICE_URL + 'app').then((data) => {

                let allApps = [];
                var availableApps = data.data.filter((obj) => !obj.deleted);
                let length = availableApps.length;
                if (availableApps.length == 0)
                    window.location.href = DASHBOARD_URL;

                availableApps.forEach((app) => {
                    allApps.push({name: app.name, id: app.appId});
                    length--;
                    if (length == 0) {
                        if (!appId || appId == '' || appId == "")
                            window.location.href = ANALYTICS_URL + availableApps[0].appId
                        else {
                            app = availableApps.filter(function(obj) {
                                return obj.appId == appId;
                            });
                        }
                        console.log('app', app);
                        if (__isHosted == "true" || __isHosted == true) {
                            CB.CloudApp.init(appId, app[0].keys.master)
                        } else
                            CB.CloudApp.init(SERVER_URL, appId, app[0].keys.master)
                        let userProfilePic = null;
                        if (userData.data.file)
                            userProfilePic = userData.data.file.document.url;
                        dispatch({
                            type: 'APP_INIT_SUCCESS',
                            payload: {
                                appId: app[0].appId,
                                appName: app[0].name,
                                allApps: allApps,
                                userProfilePic: userProfilePic
                            }
                        });
                    }
                });
            }, (err) => {
                console.log(err);
            });

        }, (err) => {
            window.location.href = ACCOUNTS_URL + '?redirectUrl=' + ANALYTICS_URL
        })

    })
}

export const fetchAllEvents = () => {
    return ((dispatch) => {
        dispatch({type: "FETCHING_EVENTS"});

        var query = new CB.CloudQuery("_Event");
        query.limit = 9999999;
        query.distinct('name', {
            success: function(data) {
                var documentArr = _.pluck(data, 'document');
                var allEvents = _.pluck(documentArr, 'name');
                dispatch({type: "FETCH_ALL_EVENTS", payload: allEvents});
            },
            error: function(err) {
                //Error in retrieving the data.
            }
        });
    });
}

export const groupAllEvents = () => {
    return ((dispatch) => {

        var query = new CB.CloudQuery("_Event");
        query.find({
            success: function(data) {
                var documentArr = _.pluck(data, 'document');
                var groupedByDay = groupByTime(documentArr, 'createdAt', 'day');
                var groupedByMonth = groupByTime(documentArr, 'createdAt', 'month');
                var groupedByWeek = groupByTime(documentArr, 'createdAt', 'week');
                dispatch({
                    type: "GROUP_ALL_EVENTS",
                    payload: {
                        month: groupedByMonth,
                        day: groupedByDay,
                        week: groupedByWeek
                    }
                });
            },
            error: function(err) {
                //Error in retrieving the data.
            }
        });
    });
}
