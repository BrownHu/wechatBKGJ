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
  const judgeBind = function (success, fail) {
    wx.getStorage({
      key: 'openId',
      success: function (res) {
        wx.getStorage({
          key: 'userId',
          success: function (res) {
            success(res)
          },
          fail: res => {
            fail(res)
          }
        })
      },
      fail: res => {
        fail(res)
      }
    })
  }
//userAbout TRUE则拼接上userId  否则不拼接
  var allRequest = function (url,data,success,fail,userAbout=false) {
    var host = "https://api.beckbuy.com/api/";
    url = host + url
    wx.getStorage({
      key: 'openId',
      success: function(res) {
        if(userAbout==true){
          wx.getStorage({
            key: 'userId',
            success: function (res) {
              data.userId = res.data
              wx.request({
                url: url,
                data: data,
                header: {
                  // 'Content-Type': 'application/json'
                },
                success: function (res) {
                  success(res.data);
                },
                fail: function (res) {
                  fail(res);
                }
              });
            },
            fail: () => {
              // console.log('userId not get from util')
              wx.showToast({
                title: '请先登录',
                image:'../../icon/tips.png',
                duration:2000,
              })
              getApp().globalData.userInfo=null
            }
          })
        }else{
              wx.request({
                url: url,
                data: data,
                header: {
                  // 'Content-Type': 'application/json'
                },
                success: function (res) {
                  success(res.data);
                },
                fail: function (res) {
                  fail(res);
                }
              });
        }
        
      },
    })
  
   
  }
 
module.exports = {
  formatTime: formatTime,
  IsComplete: IsComplete,
  ForRegister: ForRegister,
  allRequest: allRequest,
  judgeBind: judgeBind

}
