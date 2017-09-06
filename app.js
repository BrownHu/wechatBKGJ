//app.js
App({
  onLaunch: function () {  
    var that=this
    // 获取openId并放入缓存
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
               console.log(res.data.result.openId)
           wx.setStorage({
             key: 'openId',
             data: res.data.result.openId,
           })
           }else{
              wx.showToast({
                title:"获取openId失败",
                image: '../../icon/error.png' ,
                complete:()=>{
                  wx.switchTab({
                    url: '../index/index',
                  })
                }
              })
           }
         }
       })
      }

        wx.getStorage({
          key: 'openId',
          success: function (openidres) {
            var openidres = openidres.data
            wx.getStorage({
              key: 'userId',
              success:res=>{
                // wx.showToast({
                //   title: '以检测到绑定用户',
                // })
              },
              fail: ()=> {
                wx.showLoading({
                  title: '正在获取绑定用户',
                  success:()=>{
                    wx.request({
                      url: 'https://api.beckbuy.com/api/isBind?openId=' + openidres,
                      success: res => {
                        var info = res.data
                        var error_code = info.error_code
                        if (error_code == 0 && info.result.isbind) {
                          wx.setStorage({
                            key: 'userId',
                            data: info.result.userId,
                            success: () => {
                              wx.setStorage({
                                key: 'isBind',
                                data: true,
                              })
                              wx.showToast({
                                title: '已获取绑定用户',
                              })
                              setTimeout(() => {
                                wx.hideToast()
                              }, 3000)
                            }
                          })
                        } else if (error_code == 0 && !info.result.isbind) {
                          wx.showLoading({
                            title: '当前账户未绑定，正在跳转..',
                          })
                          setTimeout(function () {
                            wx.hideLoading()
                              // wx.navigateTo({
                              //   url: '../../pages/bindAccount/bindAccount?fromIndex=true',
                              // })
                          }, 2000)
                        } else {
                          wx.showToast({
                            title: '网络异常,请重试',
                            image: '../../icon/error.png'
                          })
                        }

                      }
                    })
                  },
                })
                
              }
            })
          },

        })
      }
    })
    
//     wx.getSetting({
//       success:set=>{
//         if(set.authSetting['scope.userInfo']){
//           wx.getUserInfo({
//             success: usr => {
//               this.globalData.userInfo = usr.userInfo;
//             }
//           }) 
//         }else{
//             wx.authorize({
//               scope: 'scope.userInfo',
//               success:res=>{
//                 wx.getUserInfo({
//                   success:usr=>{
// this.globalData.userInfo=usr.userInfo;
//                   }
//                 })  
//               }
//             })
//         }
//       }
//     })
  },
  globalData: {
    getOpenId:null,
    userInfo: null,
    goods: [
      {}
    ]
  }
  
})