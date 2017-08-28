// announceDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    messages: [

      { "id": 0, "title": "订单即将关闭", "body": "您有一笔订单即将关闭，再不付款宝贝就没啦，快去看看吧~", "date": "2017-04-15 14:20" },
      { "id": 1, "title": "下单失败", "body": "抱歉，您的订单（020024646164)，因为当前库存不足，交易失败，请您稍后再试。感谢您对非越的厚爱和支持！", "date": "2017-04-12 11:18" },
      { "id": 2, "title": "送您10元新人专享优惠券！", "body": "新人专享10元优惠券免费领，还有更多惊喜，快来领取吧~", "date": "2017-04-10 18:22" },

    ],
    specific: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = parseInt(options.id);
    this.setData({
      specific: this.data.messages[id]
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

  }
  ,

})