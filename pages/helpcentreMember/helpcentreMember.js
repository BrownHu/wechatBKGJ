// pages/helpcentreMember/helpcentreMember.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      onehidden:false,
      twohidden:true,
      threehidden: true,
      fourhidden: true,
      fivehidden: true,
      oneArrowIndex:0,
      twoArrowIndex:1,
      threeArrowIndex:1,
      fourArrowIndex:1,
      fiveArrowIndex:1,
      outArrow: ["../../images/common/helparrow-top.png","../../images/common/helparrow-bottom.png"],
      Firstsubmenu:[
        {"name":"代购","url":""},
        { "name": "国际转运", "url": "" },
        { "name": "商城", "url": "" },
        { "name": "自助购", "url": "" },
      ],
      Secondsubmenu: [
        { "name": "账号注册", "url": "" },
        { "name": "修改密码及找回密码", "url": "" },
        { "name": "充值查询及退款", "url": "" },
        { "name": "支付方式", "url": "" },
        { "name": "收货地址", "url": "" },

      ],
      Thirdsubmenu: [
        { "name": "配送方式", "url": "" },
        { "name": "提交订单", "url": "" },
        { "name": "邮寄限制", "url": "" },
        { "name": "海关及税项", "url": "" },
      ],
      Fourthsubmenu: [
        { "name": "商品退换货", "url": "" },
        { "name": "联系客服", "url": "" },
        { "name": "查询物流", "url": "" },
        { "name": "商品异常", "url": "" },
        { "name": "包裹丢失", "url": "" },

      ], 
      Fivethsubmenu: [
        { "name": "参见问题", "url": "" },
        { "name": "商品保管期限", "url": "" },
        { "name": "用户隐私和保护规则", "url": "" },
        { "name": "寄送限制", "url": "" },
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
  firstHidden:false
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
  oneTap:function(){
    var firstHidden = this.data.onehidden === true ? false : true
    var outArrowIndex = firstHidden?1:0;
    this.setData({
      onehidden: firstHidden,
      oneArrowIndex: outArrowIndex
    })
  },
  twoTap: function () {
    var firstHidden = this.data.twohidden === true ? false : true
    var outArrowIndex = firstHidden ? 1 : 0;
    this.setData({
      twohidden: firstHidden,
      twoArrowIndex: outArrowIndex
    })
  },
  threeTap: function () {
    var firstHidden = this.data.threehidden === true ? false : true
    var outArrowIndex = firstHidden ? 1 : 0;
    this.setData({
      threehidden: firstHidden,
      threeArrowIndex: outArrowIndex
    })
  },
  fourTap: function () {
    var firstHidden = this.data.fourhidden === true ? false : true
    var outArrowIndex = firstHidden ? 1 : 0;
    this.setData({
      fourhidden: firstHidden,
      fourArrowIndex: outArrowIndex
    })
  },
  fiveTap: function () {
    var firstHidden = this.data.fivehidden === true ? false : true
    var outArrowIndex = firstHidden ? 1 : 0;
    this.setData({
      fivehidden: firstHidden,
      fiveArrowIndex: outArrowIndex
    })
  },
  jump:function(){
    wx.redirectTo({
      url: '../../pages/helpcentreAgentMember/helpcentreAgentMember',
    })
  }
})