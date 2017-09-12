// pages/arrivedPackageTrans/arrivedPackageTrans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allcheck: false,
    array:
    ["百事汇通", "京东商城", "快捷快递", "顺丰快递", "申通E物流", "EMS快递", "圆通快递", "天天快递", "国通快递", "一店通", "申通快递", '急宅送', '全峰速运', '中国邮政'],
    index: 0,
    packages:[
      {'id':"A2456","waybillNum":"54643134642","status":"已到库","stock":"10","weight":"28.20"},
      { 'id': "A2600", "waybillNum": "15646545648", "status": "已到库", "stock": "20", "weight": "21.58" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'openId',
      success: function (openidres) {
        var openidres = openidres.data
        wx.getStorage({
          key: 'userId',
          success: res => {
            wx.showToast({
              title: '以检测到绑定用户',
            })
          },
          fail: () => {
            wx.showLoading({
              title: '正在获取绑定用户',
              success: () => {
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
                        wx.hideLoading(),
                          wx.navigateTo({
                            url: '../../pages/bindAccount/bindAccount?fromIndex=true',
                          })
                      }, 5000)
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindPickerChange: function (e) {

    this.setData({
      index: e.detail.value
    })
  },
  jump: function (e) {
    var url = e.currentTarget.dataset.url;
    if (url == "index" || url == "packagePredictTrans" || url == "member") {
      wx.switchTab({
        url: '../' + url + '/' + url,
      })
    } else {
      wx.navigateTo({
        url: '../' + url + '/' + url,
      })
    }
  },
  formSubmit: function (e) {
    console.log('传值处理..')
    wx.redirectTo({
      url: '../../pages/mergeTrans/mergeTrans',
    })
  },
  allSelect: function () {
    var allcheck = this.data.allcheck === false ? true : false;
    this.setData({
      allcheck: allcheck,
    })
  }
})