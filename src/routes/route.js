const express = require('express');
const lodash = require('lodash')
const abc = require('./intro')
const router = express.Router();
const logger = require("../logger/logger")
const helper = require("../util/helper")
const validator = require("../validator/formatter");
const { chunk } = require('lodash');



router.get('/test-me', function (req, res) {
    console.log('My batch is ', abc.name)
    abc.printName()
    
    res.send('My first nodejs!')
});

 





router.get('/test-you', function (req, res) {
   
    logger.welcome()
    res.send('Welcome to my apllications. I am Shruti and a part of FunctionUp Plutoinum cohort')
});

router.get('/test-date', function (req, res) {
    // console.log('My date is ', helper.output)
    helper.output1()
    helper.output()
    helper.batchInfo()
    
    res.send('todays date')
});




router.get('/test-lower', function (req, res) {
   
    
    console.log('trim ', validator.trim)
    validator.trim()
    
    console.log('tolowercase ', validator.changeToLowerCase)
    validator.changeToLowerCase()

    
    console.log('toUppercasecase ', validator.changeToUpperCase)
    validator.changeToUpperCase()
    res.send('converting the cases')
});



module.exports = router;
