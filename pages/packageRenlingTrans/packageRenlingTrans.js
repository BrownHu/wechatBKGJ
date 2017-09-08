// pages/packageRenlingTrans/packageRenlingTrans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allcheck:false,
    array:
    ["百事汇通", "京东商城", "快捷快递", "顺丰快递", "申通E物流", "EMS快递", "圆通快递", "天天快递", "国通快递", "一店通", "申通快递", '急宅送', '全峰速运', '中国邮政'],

    index: 0,
    detail:[
      { name: "韵达快递", number: "5463134642", weight: "8.00", size: "200*87*65", status: "已到库", depot: "81"},
      { name: "韵达快递", number: "5463134642", weight: "8.00", size: "200*87*65", status: "已到库", depot: "81" }
      ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  },
  formSubmit: function (e) {
    wx.showToast({
      title: '认领成功',
      icon: 'success',
      duration: 5000,
      success: function () {
        wx.redirectTo({
          url: '../../pages/arrivedPackageTrans/arrivedPackageTrans',
        })
      }
    })
  },
  allSelect:function(){
    var allcheck = this.data.allcheck===false?true:false;
    this.setData({
      allcheck: allcheck,
    })
  }
})