// pages/packagePredictTrans/packagePredictTrans.js
var  app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    depotindex: 0,
    array:
    ["百事汇通", "京东商城", "快捷快递", "顺丰快递", "申通E物流", "EMS快递", "圆通快递", "天天快递", "国通快递", "一店通", "申通快递", '急宅送', '全峰速运', '中国邮政'],

    depot: [
      "中国 广东 东莞仓", "上海仓"
    ],
    goods: app.globalData.goods
    

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
  bindDepotChange: function (e) {

    this.setData({
      depotindex: e.detail.value
    })
  },
  jump: function (e) {
    var url = e.currentTarget.dataset.jump;
    if (url == 'packagePredictTrans' || url == 'index' || url == 'member') {
      wx.switchTab({
        url: '../' + url + "/" + url,
      })
    } else {
    wx.navigateTo({
      url: '../' + url + "/" + url,
      complete: function () {
        console.log('success')
      }
    })
    }

  },
  addGood: function () {
    app.globalData.goods.push({})
    wx.redirectTo({
      url: '../../pages/editMypackageTrans/editMypackageTrans',
    })
  },
  deleteGood: function (e) {
    wx.showModal({
      title: '佰客国际',
      content: '确认删除商品',
      success: function (res) {
        if (res.confirm) {
          var id = e.currentTarget.dataset.index
          app.globalData.goods.splice(id, 1)
          wx.redirectTo({
            url: '../../pages/editMypackageTrans/editMypackageTrans',
          })
        } else if (res.cancel) {

        }
      }
    })
  },
  formSubmit: function (e) {
    console.log('传值处理..')
    wx.redirectTo({
      url: '../../pages/mergeTrans/mergeTrans',
    })
  }
})