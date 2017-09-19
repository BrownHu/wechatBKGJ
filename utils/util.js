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
  var arrJudge=function(arr){
    var back=true;
    if(arr.length==0){
      back=false;
    }else{
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == "" || arr[i].count == "" || arr[i].value == ""){
          back=false;
          break;
        }
      }
    }
     return back;
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
  var jump=function (e) {
    var url = e.currentTarget.dataset.jump;
    if (url == "index" || url == "packagePredictTrans" || url == "member") {
      wx.switchTab({
        url: '../../pages/' + url + '/' + url,
      })
    } else {
      wx.navigateTo({
        url: '../../pages/' + url + '/' + url,
      })
    }
  }

  var getChinesStatusName= function (num) {
    var chinese = "网络异常"
    var status = parseInt(num)
    var arr = {
      1: '未处理',
      2: '处理中',
      3: '配送中',
      4: '已发货',
      5: '确定收货',
      6: '信息有误',
      7: '已撤销',
      8: '海关退包',
      9: '海关退包',
      10: '无法投递退包',
      11: '等待补款'
    }
    for (var key in arr) {
      if (key == status) {
        chinese = arr[key]
        break;
      }
    }
    return chinese
  }
 
module.exports = {
  formatTime: formatTime,
  IsComplete: IsComplete,
  ForRegister: ForRegister,
  allRequest: allRequest,
  judgeBind: judgeBind,
  arrJudge: arrJudge,
  jump: jump,
  getChinesStatusName: getChinesStatusName
}
