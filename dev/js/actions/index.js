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
                        dispatch(groupAllEvents())
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

        var query = new CB.CloudQuery("_Event")
        query.limit = 9999999;
        query.find({
            success: function(data) {
                var documentArr = _.pluck(data, 'document');
                var groupedByDay = groupByTime(documentArr, 'createdAt', 'day');
                var groupedByMonth = groupByTime(documentArr, 'createdAt', 'month');
                var groupedByWeek = groupByTime(documentArr, 'createdAt', 'week');
                var groupedEventsByDay = [];
                let days = (_.keys(groupedByDay));
                let eventsPerDay = ((_.values(groupedByDay)));
                eventsPerDay.forEach((event, i) => {
                    groupedEventsByDay.push({day: days[i], events: _groupObjects(event)})
                })
                var groupedEventsByMonth = [];
                let months = (_.keys(groupedByMonth));
                let eventsPerMonth = ((_.values(groupedByMonth)));
                eventsPerMonth.forEach((event, i) => {
                    groupedEventsByMonth.push({day: days[i], events: _groupObjects(event)})
                })
                var groupedEventsByWeek = [];
                let weeks = (_.keys(groupedByWeek));
                let eventsPerWeek = ((_.values(groupedByWeek)));
                eventsPerWeek.forEach((event, i) => {
                    groupedEventsByWeek.push({day: days[i], events: _groupObjects(event)})
                })
                dispatch({
                    type: "GROUP_ALL_EVENTS",
                    payload: {
                        month: groupedEventsByMonth,
                        day: groupedEventsByDay,
                        week: groupedEventsByWeek
                    }
                });
            },
            error: function(err) {}
        });
    });
}

function _groupObjects(objects) {
    var groups = {};
    for (var i = 0; i < objects.length; i++) {
        var groupName = objects[i].name;
        if (!groups[groupName]) {
            groups[groupName] = [];
        }
        groups[groupName].push(objects[i]);
    }
    objects = [];
    for (groupName in groups) {
        objects.push({event: groupName, object: groups[groupName]});
    }
    return objects;
}
