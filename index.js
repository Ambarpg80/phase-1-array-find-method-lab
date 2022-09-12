/*
function isWin(array){
    console.log(array.find(result => result === "W"))
    }
isWin(record);*/

function superbowlWin(win){
   const obj = win.find(item => item.result ==="W");
   if (obj){
    return obj.year
   }
}
superbowlWin()