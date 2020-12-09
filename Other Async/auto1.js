const async = require('async')

async.auto({
    get_data: function(callback) {
        console.log('in get_data');
        // async code to get some data
        callback(null, 'data', 'converted to array');
    },
    make_folder: function(callback) {
        console.log('in make_folder');
        // async code to create a directory to store a file in
        // this is run at the same time as getting the data
        callback(null, 'folder');
    },
    write_file: ['get_data', 'make_folder', function(results, callback) {
        console.log('in write_file', JSON.stringify(results));
        // console.log('sgsdgvsdv:', get_data)
        // once there is some data and the directory exists,
        // write the data to a file in the directory
        callback(null, 'filename');
    }],
    email_link: ['write_file', function(results, callback) {
        console.log('in email_link', JSON.stringify(results));
        // once the file is written let's email a link to it...
        // results.write_file contains the filename returned by write_file.
        callback(null, {'file':results.write_file, 'email':'user@example.com'});
    }]
}, function(err, results) {
    console.log('err = ', err);
    console.log('results = ', results);
});

// async.auto({
//     getData: function(callback){
//         // console.log('In get data')
//         setTimeout(function(){
//         let a
//             a = 10
//             callback(null, a)
//         }, 1000)
//         // callback(null, a)
//     },
//     makeFolder: function(callback){
//         // console.log('In make folder')
//         let b = 6
//         callback(null,b)
//     },
//     writeFile: ['getData', 'makeFolder', function(result, callback){
//         console.log('In write file', result)
//         let c = 5
//         callback(null, c)
//     }],
//     emailLink: ['writeFile', function(results, callback){
//         console.log('In Email Link', results)
//         let d = 3
//         callback(null, d)
//     }]
// },function(err,res){
//     if(err){
//         console.log('err ------------->>>>>>>>>>>>>>>', err)
//     } else {
//         console.log(' The final results = ', res)
//         // console.log('checking console---->>>>>', res.emailLink[1].writeFile[1])
//     }
// })