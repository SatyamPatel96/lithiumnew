const currdate = new Date();
const date = function() {
    console.log(currdate.getDate());
};
const month = function() {
    console.log(currdate.getMonth());
};
const getbatchinfo = function() {
    console.log(
        "batch name is - Lithium, current week is - W3D5, And  the topic for today is Nodejs module system"
    );
};
module.exports.printDate = date;
module.exports.printMonth = month;
module.exports.getBatchInfo = getbatchinfo;