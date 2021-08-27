let URL = 'http://localhost:3600/';

function postRequest(url, params, successCallback, errorCallback) {
    $.ajax({
        type: 'POST',
        url: URL + url,
        data: params,
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            console.log('success', data)
            successCallback && successCallback(data);
        }, error: function () {
            console.log('error')
            errorCallback && errorCallback();
        }
    })
}

function getRequest(url, params, successCallback, errorCallback) {
    $.ajax({
        type: 'GET',
        url: URL + url,
        data: params,
        crossDomain: true,
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        success: function (data) {
            console.log('success', data)
            successCallback && successCallback(data);
        }, error: function () {
            console.log('error')
            errorCallback && errorCallback();
        }
    })
}
