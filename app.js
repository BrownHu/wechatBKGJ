//app.js
App({
  onLaunch: function () {  
    var that=this
    // 登录
    wx.login({
      success: res => {
        if (!that.globalData.getOpenId){
       wx.request({
         url: 'https://api.beckbuy.com/api/openId/',
         data:{
           'code':res.code
         },
         success:res=>{
           if (res.data.error_code==0){
             that.globalData.getOpenId=true,
           wx.setStorage({
             key: 'openId',
             data: res.data.result.openId,
           })
           }else{
              wx.showToast({
                title:"获取openId失败",
                image: '../../icon/error.png'
              })
           }
         }
       })
      }
      }
    })
    
    wx.getSetting({
      success:set=>{
        if(set.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success: usr => {
              this.globalData.userInfo = usr.userInfo;
            }
          }) 
        }else{
            wx.authorize({
              scope: 'scope.userInfo',
              success:res=>{
                wx.getUserInfo({
                  success:usr=>{
this.globalData.userInfo=usr.userInfo;
                  }
                })  
              }
            })
        }
      }
    })
  },
  globalData: {
    getOpenId:null,
    userInfo: null,
    goods: [
      {}
    ]
  }
  
})