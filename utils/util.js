const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
 var IsComplete=function(obj){
   var  com=true;
    for(var i in obj){
      if (obj[i] == '' || obj[i] == null || obj[i] == undefined){
        com=false;
        break;
      }
    }
    return com;

  }

  var ForRegister=function (email) {
   var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
   return reg.test(email);
 } 
 

module.exports = {
  formatTime: formatTime,
  IsComplete: IsComplete,
  ForRegister: ForRegister
}
