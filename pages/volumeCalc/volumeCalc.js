// volumeCalc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultHidden: true,
    result: 0
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
  jump: function (e) {
    var url = e.currentTarget.dataset.jump;
    wx.navigateTo({
      url: '../' + url + "/" + url,
      complete: function () {
        console.log('success')
      }
    })

  },
  formSubmit: function (e) {
    var form = e.detail.value;
    var result = parseInt(form.width) + parseInt(form.height) + parseInt(form.length)
    this.setData({
      result: result,
      resultHidden: false
    })
  },
})