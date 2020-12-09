var async = require('async');

//Async example for Sign Up flow
async.auto({

    get_username: function(callback){
        // async code to get some data

        setTimeout(()=> {
        console.log('in get_username');
        callback(null, 'Zhi', 'More output');
        }, 1000)
    },
    connect_to_db: function(callback){
        //Check connection

        setTimeout(()=> {
        console.log('in connect_to_db');
        var connected = true;  //set this to false here to simulate DB failure
        if (connected) {
            callback(null, connected);
        } else {
            callback('Error connecting to DB', null);
        }
            }, 1000)
    },
    sample_function: function(callback){
            console.log('In sample function')
            callback(null, 'sample output')
    },
    check_if_user_exist: ['get_username', 'connect_to_db', function(results, callback){ // order of Args
        console.log('in check_if_user_exist', results);
        //check if user exists in db...
        var userExists = false;

        if (userExists) {
            callback('User already exists in db', null);
        } else {
            callback(null, userExists);
            // setTimeout(function() {
            // }, 1000);
        }

    }],
    sign_up: ['check_if_user_exist', function(results, callback){
        console.log('in sign_up', JSON.stringify(results));

        var username = results.get_username;
        var isDBConnected = results.connect_to_db;
        var userExists = results.check_if_user_exist;
        // console.log(username, isDBConnected, userExists);

        if (username && isDBConnected && !userExists) {
            callback(null, {'status': '200', 'msg':'Successfully signed up user'});
        } else {
            callback('Error signing up user', null);
        }

    }]
}, function(err, results) {
    console.log('In final callback')
    if(err)
        console.log('error = ', err);
    else
        console.log('results = ', results);
});