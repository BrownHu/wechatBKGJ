// announcement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    announcement:[
      {"id":1, "title": "海关严查，违法物品一律拒发！", "body": "刚收到各种快递公司和报关行的最新消息，由于..", "date": "2017-06-20", "admin": "佰客国际" },
      { "id":2,"title": "端午节放假通知", "body": "您们好！端午节即将来临，为了方便大家提前安排...", "date": "2017-05-25", "admin": "佰客国际" },
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
    return {
      title:"佰客国际",
      desc: '我发现一个好玩的小程序-【佰客国际】，一起来玩吧',
      path: '/pages/guide/guide'
    }
  },
  jump: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/announceDetail/announceDetail?id='+id,
    })
  },
  formSubmit: function (e) {
    console.log('传值处理..')
    wx.navigateTo({
      url: '../../pages/mergeTrans/mergeTrans',
    })
  },
})