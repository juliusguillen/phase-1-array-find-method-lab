// code your solution here
function superbowlWin(record) {
    let win = record.find(function(record) {return record.result === "W"})
     if (win  != undefined){
        return win.year;
     } else{ 
          return win 
     }
        
  console.log(win)
};

