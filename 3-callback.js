var maxTime = 1000;

// If input is even, double it
// If input is odd, error
// (call takes random amount of time < 1s)

var evenDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if(v % 2 == 0) {
        //This also works!!!
        //setTimeout(callback, waitTime, null, v*2, waitTime);

        setTimeout(function() {
            callback(null, v*2, waitTime)
        }, waitTime);

    } else {
        callback(new Error(":("));
    }

};


var maxValue = 500;
var count = 0;

//Variation 1
var handleResults = function(err, results, time) {
    if(err) {
        console.log("ERROR: " + err.message);
    } else {
        console.log("The results are: " + results + "(" + time + " ms)");
    }

    count++;
    if(count === maxValue) {
        console.log('done!');
    }
};


for(var i=0; i<maxValue; i++) {
    evenDoubler(i, handleResults);
}


//Variation 2 - anonymous function
//
// var maxValue = 500;
// var count = 0;
// for(var i=0; i<maxValue; i++) {
//     console.log('starting...');
//     evenDoubler(i, function(err, results, time) {
//         count++;
//         if(err) {
//             console.log("ERROR: " + err.message);
//         } else {
//             console.log("The results are: " + results + "(" + time + " ms)");
//         }
//         if(count == maxValue) {
//             console.log('done');
//         }
//     });
// }


console.log("-----");