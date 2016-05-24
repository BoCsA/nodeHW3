var debug = require('debug')('myservice1')
var debugStep1 = require('debug')('myservice1.step1')
var debugStep2 = require('debug')('myservice1.step2')
var debugEntry = require('debug')('myservice1.entry')

var logger = (req, res, next) => {
    var reqToLog1 = "step1";
    
    var reqToLog2 = "step2";
    
    var reqToLog3 = "entry";
    
    if(req.baseUrl.indexOf(reqToLog1) > -1 )
    {
        debugStep1("Request received to step1");
    } 
    else if(req.baseUrl.indexOf(reqToLog2) > -1 )
    {
        debugStep2("Request received to step2");
    }
    else if(req.baseUrl.indexOf(reqToLog3) > -1)
    {
        debugEntry("Request received to entry");
    }

    next();
}

module.exports = logger