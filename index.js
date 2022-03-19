// code your solution here
function superbowlWin(record) {
    let win = record.find(function(record) {return record.result === "W"})
    return(win.year? "W" : "undefined");
    //return win.year;
};
console.log(year)