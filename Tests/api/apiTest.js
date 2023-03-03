module.exports = {
    before: function (browser) {
    },
    'API Testing - GET Positive': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'Mike Selby')
            browser.assert.equal(response.body.media_type, 'image')
            browser.assert.equal(response.body.service_version, 'v1')
        })
    },
    'API Testing - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'Mike Selby')
        })
    },
    'API Testing - Nasa 1 - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.id, "LANDSAT/LC08/C01/T1_SR/LC08_025039_20180103")
        })
    },
    'API Testing - Nasa 2 - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.element_count, 25)
        })
    },
    'API Testing - POST': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = {"name":"QA CoE Name", "job":"Unosquare QA"}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'QA CoE Name')
            browser.assert.equal(response.body.job, 'Unosquare QA')
        })
    },
    'API Testing - POST Negative': function (browser) {
        var apiUrl = 'https://reqres.in/api/register'
        var postData = {"email": "sydney@fife"}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '400')
            browser.assert.equal(response.body.error, "Missing password")
        })
    }
};