// jshint esversion:6
exports.getDate = function (){
    var today = new Date(); // storing the value of date in today variable
    // var currentDay = today.getDay(); // currentDay = today's day in number 
    var day = ""; // initialiging a veriable
    var optional = {weekday:'long',month:'long',day:'numeric',year:'numeric'}; // basically it is the format of date
    return  today.toLocaleDateString("en-US",optional); // this function converts todat's date into a perticular format
}
exports.getDay = function (){
    var today = new Date(); // storing the value of date in today variable
    // var currentDay = today.getDay(); // currentDay = today's day in number 
    var day = ""; // initialiging a veriable
    var optional = {weekday:'long'}; // basically it is the format of date
    return today.toLocaleDateString("en-US",optional); // this function converts todat's date into a perticular format
}