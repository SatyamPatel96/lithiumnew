const express = require("express");
const router = express.Router(); ///test-you
//importing a custom module
const xyz = require("../logger");
//importing external package
const underscore = require("underscore");
const first = require("../logger/logger.js");
const second = require("../util/helper.js");
const third = require('../validator/formatter.js')
const fourth = require("lodash");
router.get("/test-me", function(req, res) {
    console.log(first.welcome());
    console.log(second.printDate());
    console.log(second.printMonth());
    console.log(second.getBatchInfo());
    console.log(third.Trim());
    console.log(third.tolowercase());
    console.log(third.touppercase());
    const arr = ['jan', 'fab', 'march', 'aprail', 'may', 'june', 'july', 'august', 'sep', 'oct', 'nov', 'dec'];
    console.log(fourth.chunk(arr, 3))
    const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    console.log(fourth.tail(arr1, 1));
    const arr2 = [1, 2, 1, 3, 2];
    console.log(fourth.union(arr2))
    const arr3 = [
        ["horror", "The Shining"],
        ["drama", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantasy", " Pans Labyrinth"]
    ];
    console.log(fourth.fromPairs(arr3))
        //Calling the components of a different custom module
        // console.log("Calling my function ", xyz.myFunction());
        // console.log("The value of the constant is ", xyz.myUrl);
        //Trying to use an external package called underscore
        // let myArray = ["Akash", "Pritesh", "Sabiha"];
        // let result = underscore.first(myArray);
        // console.log("The result of underscores examples api is : ", result);

    res.send("My first ever api!");

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;