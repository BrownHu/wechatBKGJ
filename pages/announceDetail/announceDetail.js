// announceDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    announcement: [
      { "id": 1, "title": "海关严查，违法物品一律拒发！", "body": "刚收到各种快递公司和报关行的最新消息，由于刚收到各种快递公司和报关行的最新消息，由于刚收到各种快递公司和报关行的最新消息，由于", "date": "2017-05-25", "admin": "佰客国际" },
      { "id": 2, "title": "端午节放假通知", "body": "您们好！端午即将来临，为了方便大家提前安排好节日前后的出货计划，具体安排如下：大陆：5月29-30日晚不发车；5月31日正常发车，6月1号到港派件！注：如有货要出客户请提前拉点咨询，不便之处敬请谅解！谢谢！", "date": "2017-06-20", "admin": "佰客国际" },
    ]  ,
    specific:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = parseInt(options.id)-1;
    this.setData({
      specific: this.data.announcement[id]
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