import axios from 'axios';
import async from 'async';
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
                        var app;
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

export const deleteFile = (data) => {
    return ((dispatch) => {

        var query = new CB.CloudQuery("_File");
        query.findById(data, {
            success: function(obj) {
                obj.delete({
                    success: function(obj) {
                        dispatch({type: "DELETE_FILE", payload: data});

                    },
                    error: function(err) {}
                })
            },
            error: function(err) {}
        })
    });
}
export const editFile = (data) => {
    return ((dispatch) => {

        var query = new CB.CloudQuery("_File");
        query.findById(data.id, {
            success: function(obj) {
                obj.set('name', data.name);
                obj.save();
            },
            error: function(err) {}
        })
    });
}
export const fetchAllFiles = (data) => {

    let response = [];
    //fetchMoreFiles : for pagination , if true : concatinate the next batch of files to the current array;
    let {path, searchText, regex, skip, fetchMoreFiles} = data;
    console.log('skip', skip);

    if (path.endsWith('/'))
        path = path.slice(0, path.length - 1)
    var query = new CB.CloudQuery("_File");
    if (searchText)
        query.regex('name', '(.*)' + searchText + '(.*)', true);
    if (!regex)
        regex = '(.*)';
    query.regex('contentType', regex, true);

    return ((dispatch) => {
        dispatch({type: "FETCHING_ALL_FILES"});
        query.equalTo('path', path);
        query.setLimit(999999999);
        query.count({
            success: function(number) {
                dispatch({
                    type: 'TOTAL_FILES',
                    payload: Math.ceil(number / 20)
                })
            },
            error: function(error) {
                //error
            }
        });
        if (!skip)
            skip = 1;
        query.setSkip((skip - 1) * 20)
        query.setLimit(20);
        query.orderByDesc('createdAt');
        query.find({
            success: function(files) {
                files.forEach((cloudFile) => {
                    let file = cloudFile.document;
                    let date = new Date(parseInt(file.createdAt));
                    const modified = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
                    response.push({
                        id: file._id,
                        url: file.url,
                        title: file.name,
                        modified: modified,
                        type: file.contentType == 'folder/folder'
                            ? 'Folder'
                            : 'File',
                        img: imagePath(file.contentType, file.name)
                    })
                });
                dispatch({
                    type: "FETCH_ALL_FILES",
                    payload: {
                        data: response,
                        fetchMoreFiles: fetchMoreFiles,
                        selectedPage: skip,
                        regex: regex
                    }
                })

            },
            error: function(error) {}
        });

    })

}
export const addFile = (payload) => {
    return ((dispatch) => {

        let {file, data, type, path} = payload;
        let length = file.length;
        let filesUploaded = [];
        let filesUploading = file.slice();
        if (path.endsWith('/'))
            path = path.slice(0, path.length - 1)
        if (type != 'folder/folder')
            dispatch({type: "UPLOADING_FILES"});
        async.eachSeries(file, function(fileObj, done) {
            let cloudFile = new CB.CloudFile(fileObj, data, type, path);
            cloudFile.save({
                success: function(cloudFile) {
                    length--;
                    filesUploaded.push(cloudFile.document);
                    filesUploading.splice(0, 1);
                    dispatch({type: "FILES_UPLOADED", payload: filesUploaded})
                    if (length == 0)
                        dispatch({type: "ADD_FILE_SUCCESS"})
                    done();

                },
                error: function(error) {
                    length--;
                    if (length == 0)
                        dispatch({type: "ADD_FILE_SUCCESS"})
                },
                uploadProgress: function(percentComplete) {
                    dispatch({
                        type: 'UPLOAD_PROGRESS',
                        payload: {
                            uploadProgress: parseInt(percentComplete * 100),
                            file: fileObj,
                            up: filesUploading,
                            remainingFiles: length,
                            totalFiles: file.length
                        }
                    });
                }
            });

        }, function(err) {
            if (err) {
                throw err;
            }
            dispatch({type: 'UPLOADING_DONE'});
            dispatch(fetchAllFiles({path: path}));
        });
    })
}

export const sortDocuments = (data) => {
    return ({type: 'SORT_DOCUMENTS', payload: data});
}

/*
desc : return path of image depending on file type;
*/

function imagePath(type, name) {
    let img = "/assets/file-types/file.png";
    const fileType = type.split('/')[1];
    let fileTypes = 'after-effects.pngai.pngaudition.pngavi.pngbridge.pngcss.pngcsv.pngdbf.pngdoc.pngdreamweaver.pngdwg.pngexe.pngfile.pngfireworks.pngfla.pngflash.pnghtml.pngillustrator.pngindesign.pngiso.pngjavascript.pngjpg.pngjson-file.pngmp3.pngmp4.pngpdf.pngphotoshop.pngpng.pngppt.pngprelude.pngpremiere.pngpsd.pngrtf.pngsearch.pngsvg.pngtxt.pngxls.pngxml.pngzip-1.pngzip.pngfolder.pngjpeg.pngdocx.png';
    fileTypes = fileTypes.split('.png');
    if (fileTypes.indexOf(fileType) != -1) {
        img = '/assets/file-types/' + fileType + '.png';
    } else if (fileTypes.indexOf(name.split('.')[1]) != -1) {
        img = '/assets/file-types/' + name.split('.')[1] + '.png';
    }
    return img;
}
